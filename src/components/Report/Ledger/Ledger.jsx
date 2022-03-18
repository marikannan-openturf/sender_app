import * as React from 'react';
import { Container, Stack, Box, Button, Paper, Typography, IconButton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import WalletIcon from '../../../assets/img/WalletIcon.svg'
import InformationIconGray from '../../../assets/img/InformationIconGray.png'
import LedgerPopup from './LedgerPopup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tooltip from "@mui/material/Tooltip";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency';
import Autocomplete from '@mui/material/Autocomplete';

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

function createData(currentBalance, currency, status) {
  return { currentBalance, currency, status };
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

export default function Ledger() {
  const [balance, setBalance] = useState('100, 0000.00')
  const [currency, setCurrency] = useState('All')
  const [ledgerPopup, setLedgerPopup] = useState(false)
  const [response, setResponse] = useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [corridors, setCorridors] = useState([])
  const [page, setPage] = React.useState(0);

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

  const openLedgerPopup = () => {
    setLedgerPopup(true)
  }
  const closeLedgerPopup = () => {
    setLedgerPopup(false)
  }

  useEffect(() => {
    getLedgerBalance()
  }, [])

  const getLedgerBalance = () => {
    setCurrency('All')
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('prodCountry') ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    axios.post(`${apiUrl}/js/ledger-balance`, {}, { headers: options.headers }
    ).then((res) => {
      if (res.data && res.data.length > 0) {
        setBalance(res.data[0].currentBalance)
        setResponse(res.data)
      }

    }).catch((err) => {
    })
  }

  const getLedgerBalanceByCurrency = (data) => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('prodCountry') ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    axios.post(`${apiUrl}/js/ledger-balance?currency=${data}`, {}, { headers: options.headers }
    ).then((res) => {
      if (res.data && res.data.length > 0) {
        setBalance(res.data[0].currentBalance)
        setResponse(res.data)
      }
    }).catch((err) => {
      setBalance(0)
      setResponse([])
    })
  }


  const setCurrencyHandler = (e) => {
    setCurrency(e.target.value)
    if (e.target.value !== 'All') {
      getLedgerBalanceByCurrency(e.target.value)
    } else {
      getLedgerBalance()
    }
  }

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN');
 return curr;
 }
  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
          <Stack direction='row' mb={3}>
            <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Ledger Balance</Typography>
          </Stack>
          <Stack spacing={3}>
            <Button variant='contained' sx={{ backgroundColor: '#4490fa' }} onClick={getLedgerBalance} >Refresh</Button>
          </Stack>
        </Stack>
        <Paper >
          <Stack alignItems='right' justifyContent='space-between' mr={3} mt={3} direction='row' >
            {/* <IconButton><img className="infomation-img" onClick={openLedgerPopup} src={InformationIconGray} width="20" height="20" alt="walletIcon" /></IconButton> */}
            <Stack direction='row' alignItems='center' justifyContent='space-between' pl={4}>
              {/* <Typography color="#575757" fontWeight='500'>
              Account Instrument
            </Typography> */}

              <TextField
                alignItems='center'
                sx={{ width: 205 }}
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
            <IconButton><img className="infomation-img" onClick={openLedgerPopup} src={InformationIconGray} width="20" height="20" alt="walletIcon" /></IconButton>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='center'>
            <Paper sx={{ boxShadow: 'none', minWidth: 350 }} >


              <Box pb={4}>
                <Stack sx={{ pb: 0 }} alignItems='center' justifyContent='center' direction='row' >
                  <img src={WalletIcon} width="250" height="250" alt="walletIcon" />
                </Stack>

                {/* <Stack alignItems='center' justifyContent='center'>
              <Typography color={"#575757"} fontSize={20} fontWeight='500' >Your Current Balance </Typography>
              <Typography color={"#575757"} fontSize={20} fontWeight='500' >{balance} {currency}</Typography>

            </Stack> */}
              </Box>
            </Paper>
            <Paper sx={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, boxShadow: 'none' }}>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="left">Currency</StyledTableCell>
                        <StyledTableCell>Current Balance</StyledTableCell>
                        {/* <StyledTableCell align="left">Rate</StyledTableCell> */}
                      </TableRow>
                    </TableHead>
                   {response && response.length > 0 ?  <TableBody>
                      {(rowsPerPage > 0
                        ? response.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : response
                      ).map((row) => (
                        <StyledTableRow key={row.corridorName}>
                          <StyledTableCell align="left">{row.currency}</StyledTableCell>
                          <StyledTableCell component="th" scope="row" > {toIndianCurrency(parseFloat(row.currentBalance))}</StyledTableCell>
                          {/* <StyledTableCell align="left">{row.status}</StyledTableCell> */}
                        </StyledTableRow>
                      ))}

                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  :  <TableBody>
                    <TableRow>
                    {/* <TableCell align='center' colSpan='center'> */}
                    <Typography spacing={2} p={2}>

No data available
</Typography>
                    {/* </TableCell> */}
                   
                    </TableRow>
                    </TableBody> }
                    {response && response.length > 0 ?    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                          colSpan={10}
                          count={response.length}
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
        </Paper>

        <LedgerPopup response={response} closeLedgerPopup={closeLedgerPopup} ledgerPopup={ledgerPopup} />
      </Stack>
    </>
  )
}
