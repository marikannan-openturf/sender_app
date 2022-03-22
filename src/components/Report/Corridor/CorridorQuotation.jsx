import * as React from 'react';
import { Container, Stack, Box, Button, Paper, Typography, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { config } from '../../../assets/config/config';
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency';

const apiUrl = config.api.url

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 13,
    fontWeight: 500,
    backgroundColor: '#4490fa',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(corridorName, currency, rate) {
  return { corridorName, currency, rate };
}

const rows = [
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
  createData("corridor", 234, 'rate'),
].sort((a, b) => (a.dates < b.dates ? -1 : 1));

export default function CorridorQuotation() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [corridors, setCorridors] = useState([])
  const [currency, setCurrency] = useState('All')

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getCorridorList()
  }, [])

  const corridorRefresh = () => {
    setCurrency('All')
    getCorridorList()

  }

  const getCorridorList = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US',
        'environment': localStorage.getItem('environment')
      }
    }
    axios.get(`${apiUrl}/js/quotation`, { headers: options.headers }
    ).then((res) => {
      setCorridors(res.data.quotes)
    }).catch((err) => {
    })
  }

  const getCorridorListByCurrency = (data) => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US',
        'environment': localStorage.getItem('environment')
      }
    }
    axios.get(`${apiUrl}/js/quotation?currency=${data}`, { headers: options.headers }
    ).then((res) => {
      // setFeaturedInfo(true)
      setCorridors(res.data.quotes)
      //  if(res.data && res.data.length > 0) {
      //    console.log("test")
      //    setBalance(res.data[0].currentBalance)
      //    setCurrency(res.data[0].currency)
      //  }
      //  console.log(res.data[0].currentBalance)

    }).catch((err) => {
      // setErrorPopup(true)
    })
  }

  const setCurrencyHandler = (e) => {
    setCurrency(e.target.value)
    if(e.target.value !== 'All') {
     getCorridorListByCurrency(e.target.value)
    } else {
      getCorridorList()
    }
  }

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          <Stack direction='row' mb={3}>
            <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Corridor Quotation</Typography>
          </Stack>
          <Stack spacing={3}>
            <Button variant='contained' sx={{ backgroundColor: '#4490fa' }} onClick={corridorRefresh} >Refresh</Button>
          </Stack>
        </Stack>
        <Paper sx={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={4}>
            {/* <Typography color="#575757" fontWeight='500'>
              Account Instrument
            </Typography> */}

            <TextField
            alignItems='center'
              sx={{ width: 205}}
              label="Currency"
              value={currency}
              onChange={setCurrencyHandler}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              
                            <MenuItem value='All'>All</MenuItem>

                            {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                  )
                })}
            </TextField>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Corridor Name</StyledTableCell>
                  <StyledTableCell align="left">Currency</StyledTableCell>
                  <StyledTableCell align="left">Rate</StyledTableCell>
                </TableRow>
              </TableHead>
            {corridors && corridors.length > 0 ?  <TableBody>
                {(rowsPerPage > 0
                  ? corridors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : corridors
                ).map((row) => (
                  <StyledTableRow key={row.corridorName}>
                    <StyledTableCell component="th" scope="row" >{row.receivingServiceProvider}</StyledTableCell>
                    <StyledTableCell align="left">{row.receivingCurrency}</StyledTableCell>
                    <StyledTableCell align="left">{row.fxRate}</StyledTableCell>
                  </StyledTableRow>
                ))}

                {/* {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody> :
              <TableBody>
                    <TableRow>
                    {/* <TableCell align='center' colSpan='center'> */}
                    <Typography spacing={2} p={2}>

No data available
</Typography>
                    {/* </TableCell> */}
                   
                    </TableRow>
                    </TableBody>}
                    {corridors && corridors.length > 0 ?  <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={10}
                    count={corridors.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter> : ''}
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </>
  )
}
