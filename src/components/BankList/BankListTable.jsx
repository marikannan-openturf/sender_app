import * as React from 'react';
import { Container, Stack, Box, Button, Paper, Typography } from '@mui/material';
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
import axios from 'axios'
import { config } from '../../assets/config/config';
import { useEffect, useState } from 'react';

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

  // useEffect(()=>{
  //   getBankList()
  //  },[])

  //  const getBankList = () => {
  //    console.log("mari")
  //    const options = {
  //      headers: {
  //        'username': 'OpenTurfDev',
  //        'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
  //        'actualdate': '2018-04-04 09:27:16',
  //        'origincountry': 'US'
  //      }
  //    }
  //    axios.get(`${apiUrl}/js/bank-list?countryCode=BD`,{ headers: options.headers } 
  //    ).then((res) => {
  //      // setFeaturedInfo(true)
  //      console.log("res.data.length",res.data.banks)
  //      setBanks(res.data.banks)
  //     //  if(res.data && res.data.length > 0) {
  //     //    console.log("test")
  //     //    setBalance(res.data[0].currentBalance)
  //     //    setCurrency(res.data[0].currency)
  //     //  }
  //     //  console.log(res.data[0].currentBalance)

  //    }).catch((err) => {
  //      // setErrorPopup(true)
  //    }) 
  //  }
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

function createData(countryCode, lastUpdatedOn, bankName, bankCode, providerCode, status) {
  return { countryCode, lastUpdatedOn, bankName, bankCode, providerCode, status };
}

const rows = [
  createData(4000, '01-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '02-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '23-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '19-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '35-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '19-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '19-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '20-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '30-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '11-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '12-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '13-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '10-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '07-02-2020', 'bankName', 3143, 42342, 'status',),
  createData(4000, '19-02-2020', 'bankName', 3143, 42342, 'status',),
].sort((a, b) => (a.dates < b.dates ? -1 : 1));

export default function BankListTable() {
  const [banks,setBanks] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - banks.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // function refreshPage() {
  //   window.location.reload();
  // }

  useEffect(() => {
    getBankList()
  }, [])

  const getBankList = () => {
    const options = {
      headers: {
        'username': 'OpenTurfDev',
        'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.get(`${apiUrl}/js/bank-list?countryCode=BD`, { headers: options.headers }
    ).then((res) => {
      // setFeaturedInfo(true)
      setBanks(res.data.banks)
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

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          <Stack direction='row' mb={3}>
            <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Bank List</Typography>
          </Stack>
          <Stack spacing={3}>
            <Button variant='contained' sx={{ backgroundColor: '#4490fa' }} onClick={getBankList} >Refresh</Button>
          </Stack>
        </Stack>
        <Paper sx={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Bank Name</StyledTableCell>
                  <StyledTableCell align="left">Branch</StyledTableCell>
                  <StyledTableCell align="left">Bank Code</StyledTableCell>
                  <StyledTableCell align="left">Provider Code</StyledTableCell>
                  <StyledTableCell align="left">City</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? banks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : banks
                ).map((row) => (
                  <StyledTableRow key={row.providerCode}>
                    <StyledTableCell component="th" scope="row" >{row.bankName}</StyledTableCell>
                    <StyledTableCell align="left">{row.branch}</StyledTableCell>
                    <StyledTableCell align="left">{row.bankCode}</StyledTableCell>
                    <StyledTableCell align="left">{row.providerCode}</StyledTableCell>
                    <StyledTableCell align="left">{row.city}</StyledTableCell>
                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                  </StyledTableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={10}
                    count={banks.length}
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
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </>
  )
}
