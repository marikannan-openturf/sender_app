import * as React from 'react';
import { Typography, Stack } from '@mui/material'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useState } from "react";
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SortIcon from '../../../assets/img/two-arrows.png'
import BankReverseHistory from './BankReverseHistory';
import BankCancelHistory from './BankCancelHistory';
import { useEffect } from 'react';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import BankViewHistory from './BankViewHistory';
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

  useEffect(()=>{
    getTransactionHistory()
   },[])
 
   const getTransactionHistory = () => {
     const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US',
        'environment': localStorage.getItem('environment')
      }
     }
     axios.get(`${apiUrl}/js/transaction?transactionReference=SrcTxnId001`,{ headers: options.headers } 
     ).then((res) => {
       // setFeaturedInfo(true)
 
     }).catch((err) => {
       // setErrorPopup(true)
     }) 
   }


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

function createData(id,dates, amount, currency, type, reqrefid, status, reference, sender, recepient) {
  return { id,dates, amount, currency, type, reqrefid, status, reference, sender, recepient};
}

const rows = [
  createData(1,'01-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(2,'02-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(3,'23-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(4,'19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(5,'35-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(6,'19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(7,'19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(8,'20-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(9,'30-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(10,'11-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(11,'12-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(12,'13-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(13,'10-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(14,'07-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData(15,'19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
].sort((a, b) => (a.dates < b.dates ? -1 : 1));

export default function HistoryBank() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [cancelTrans, setCancelTrans] =useState(false)
  const [reverseTrans, setReverseTrans] =useState(false)
  const [viewTrans, setViewTrans] =useState(false)
  const [refId,setRefId] = useState('SrcTxnId001')
  const [reverseDetails,setReverseDetails] = useState({})
  const [cancelDetails, setCancelDetails] = useState({})
  const [history,setHistory] = useState([])

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

  /* more popup */
  const [morePopup, setMorePopup] = React.useState(null);
  const open = Boolean(morePopup);
  const handleClick = (event) => {
    setMorePopup(event.currentTarget);
  };
  const handleClose = () => {
    setMorePopup(null);
  };

  const OnClickCancel = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
        'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/cancel-transaction`
      , {
        "reason": "cancelling",
        "txnId": "SrcTxnId001"
    },
      { headers: options.headers }
    ).then((res) => {
      setCancelDetails(res.data)
      setViewTrans(false);
      setReverseTrans(false);
      setCancelTrans(true);
    }).catch((err) => {
      setViewTrans(false);
      setReverseTrans(false);
      setCancelTrans(true);
    })
  };
  const OnClickReverse = () => {

    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US',
        'environment': localStorage.getItem('environment')
      }
    }
    axios.post(`${apiUrl}/js/reverse-transaction`
      , {
        "reversalReason": "reversalreason",
        "txnId": "TPKM000000056269"
    },
      { headers: options.headers } 
    ).then((res) => {
    setReverseDetails(res.data)
    setViewTrans(false);
    setCancelTrans(false);
    setReverseTrans(true);
    }).catch((err) => {
    setViewTrans(false);
    setCancelTrans(false);
    setReverseTrans(true);
    })
  };
  const onClickView = () => {
    setCancelTrans(false);
    setReverseTrans(false);
    setViewTrans(true);
  };
  const onClickCancelClose = () => {
    setCancelTrans(false);
  };
  const OnClickReverseClose = () => {
    setReverseTrans(false);
  };
  const OnClickViewClose = () => {
    setViewTrans(false);
  };

  useEffect(()=>{
    getHistoryTransaction()
    },[])
  
    const getHistoryTransaction = (data) => {
      const options = {
        headers: {
          'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
          'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
          'actualdate': '2018-04-04 09:27:16',
          'origincountry': 'US',
          'environment': localStorage.getItem('environment')
        }
      }
      axios.get(`${apiUrl}/js/transaction/list`, { headers: options.headers }
      ).then((res) => {
        // setFeaturedInfo(true)
        if(res && res.data && res.data.rows) {
          setHistory(res.data.rows)
        }
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
  
    const historyMockJson = {
      "count": 1,
      "rows": [
          {
              "id": 1,
              "data": {
                  "type": "inttransfer",
                  "amount": "500",
                  "currency": "NPR",
                  "debitParty": [
                      {
                          "key": "msisdn",
                          "value": "+9779840002320"
                      }
                  ],
                  "creditParty": [
                      {
                          "key": "msisdn",
                          "value": "+9779840002320"
                      }
                  ],
                  "requestDate": "2021-05-23 08:19:36",
                  "transactionStatus": "3050:Remit Acknowledged.",
                  "transactionReference": "TPOT000000723289",
                  "requestingOrganisationTransactionReference": "SrcTxnId3858"
              }
          },
          {
            "id": 2,
            "data": {
                "type": "inttransfer",
                "amount": "500",
                "currency": "NPR",
                "debitParty": [
                    {
                        "key": "msisdn",
                        "value": "+9779840002320"
                    }
                ],
                "creditParty": [
                    {
                        "key": "msisdn",
                        "value": "+9779840002320"
                    }
                ],
                "requestDate": "2021-05-23 08:19:36",
                "transactionStatus": "3050:Remit Acknowledged.",
                "transactionReference": "TPOT000000723289",
                "requestingOrganisationTransactionReference": "SrcTxnId3858"
            }
        },
        {
          "id": 3,
          "data": {
              "type": "inttransfer",
              "amount": "500",
              "currency": "NPR",
              "debitParty": [
                  {
                      "key": "msisdn",
                      "value": "+9779840002320"
                  }
              ],
              "creditParty": [
                  {
                      "key": "msisdn",
                      "value": "+9779840002320"
                  }
              ],
              "requestDate": "2021-05-23 08:19:36",
              "transactionStatus": "3050:Remit Acknowledged.",
              "transactionReference": "TPOT000000723289",
              "requestingOrganisationTransactionReference": "SrcTxnId3858"
          }
      },
      {
        "id": 4,
        "data": {
            "type": "inttransfer",
            "amount": "500",
            "currency": "NPR",
            "debitParty": [
                {
                    "key": "msisdn",
                    "value": "+9779840002320"
                }
            ],
            "creditParty": [
                {
                    "key": "msisdn",
                    "value": "+9779840002320"
                }
            ],
            "requestDate": "2021-05-23 08:19:36",
            "transactionStatus": "3050:Remit Acknowledged.",
            "transactionReference": "TPOT000000723289",
            "requestingOrganisationTransactionReference": "SrcTxnId3858"
        }
    },
    {
      "id": 5,
      "data": {
          "type": "inttransfer",
          "amount": "500",
          "currency": "NPR",
          "debitParty": [
              {
                  "key": "msisdn",
                  "value": "+9779840002320"
              }
          ],
          "creditParty": [
              {
                  "key": "msisdn",
                  "value": "+9779840002320"
              }
          ],
          "requestDate": "2021-05-23 08:19:36",
          "transactionStatus": "3050:Remit Acknowledged.",
          "transactionReference": "TPOT000000723289",
          "requestingOrganisationTransactionReference": "SrcTxnId3858"
      }
  },
  {
    "id": 6,
    "data": {
        "type": "inttransfer",
        "amount": "500",
        "currency": "NPR",
        "debitParty": [
            {
                "key": "msisdn",
                "value": "+9779840002320"
            }
        ],
        "creditParty": [
            {
                "key": "msisdn",
                "value": "+9779840002320"
            }
        ],
        "requestDate": "2021-05-23 08:19:36",
        "transactionStatus": "3050:Remit Acknowledged.",
        "transactionReference": "TPOT000000723289",
        "requestingOrganisationTransactionReference": "SrcTxnId3858"
    }
  }
      ]
  }

  return (
    <>
    <Paper sx={{ paddingTop:3, paddingLeft:5, paddingRight:5, paddingBottom:5, }}>
    <Stack alignItems='center' sx={{pb:4}}>
      <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Bank Transaction History</Typography>
    </Stack>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell><Stack direction='row'>
            {/* <img src={SortIcon} height="16" weight="16" style={{marginTop:'1px'}} /> */}
            <Typography sx={{paddingLeft:0.5}}>Date</Typography>
          </Stack></StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left"><Stack direction='row'>
            {/* <img src={SortIcon} height="16" weight="16" style={{marginTop:'1px'}} /> */}
            <Typography sx={{paddingLeft:0.5}} >Currency</Typography>
          </Stack></StyledTableCell>
            {/* <StyledTableCell align="left">Type</StyledTableCell> */}
            {/* <StyledTableCell align="left">Req Ref Id</StyledTableCell> */}
            <StyledTableCell align="left"> <Stack direction='row'>
            {/* <img src={SortIcon} height="16" weight="16" style={{marginTop:'1px'}} /> */}
            <Typography sx={{paddingLeft:0.5}}>Status</Typography>
          </Stack></StyledTableCell>
            <StyledTableCell align="left">Reference</StyledTableCell>
            <StyledTableCell align="left">Sender</StyledTableCell>
            <StyledTableCell align="left">Receiver</StyledTableCell>
            <StyledTableCell align="center">More</StyledTableCell>
          </TableRow>
      </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? historyMockJson.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : historyMockJson.rows
          ).map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" >{row.data.requestDate}</StyledTableCell>
                <StyledTableCell align="left">{row.data.amount}</StyledTableCell>
                <StyledTableCell align="left">{row.data.currency}</StyledTableCell>
                {/* <StyledTableCell align="left">{row.type}</StyledTableCell> */}
                {/* <StyledTableCell align="left">{row.reqrefid}</StyledTableCell> */}
                <StyledTableCell align="left">{row.data.transactionStatus}</StyledTableCell>
                <StyledTableCell align="left">{row.data.transactionReference}</StyledTableCell>
                <StyledTableCell align="left">{row.data.creditParty[0].value}</StyledTableCell>
                <StyledTableCell align="left">{row.data.debitParty[0].value}</StyledTableCell>
                <StyledTableCell align="center">
                  <Box>
                    <Tooltip title="More">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 0 }}
                        aria-controls={open ? "More" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                      <MoreHorizIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </StyledTableCell>
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
              count={historyMockJson.rows.length}
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
    <Menu
        anchorEl={morePopup}
        id="More"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0.2,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 5,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={onClickView}>View</MenuItem>
        <MenuItem onClick={OnClickCancel}>Cancel</MenuItem>
        <MenuItem onClick={OnClickReverse} >Reverse</MenuItem>
      </Menu>
    </Paper>
    {cancelTrans &&  <BankCancelHistory cancelTrans={cancelTrans} cancelDetails={cancelDetails} onClickCancelClose={onClickCancelClose} /> }
    {reverseTrans && <BankReverseHistory reverseTrans={reverseTrans} reverseDetails={reverseDetails} OnClickReverseClose={OnClickReverseClose} />}
    {viewTrans && <BankViewHistory viewTrans={viewTrans} refId={refId} OnClickViewClose={OnClickViewClose} />}
    </>
  );
}
