import React, { useEffect, useState } from 'react';
import { Button, Dialog, Stack, Typography, IconButton, DialogTitle } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system'
import Paper from '@mui/material/Paper';

import axios from 'axios';
import { config } from '../../../assets/config/config';
const apiUrl = config.api.url

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: '#4490fa',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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
export default function BankViewHistory(props) {

  const [historyList, setHistoryList] = useState({})

  useEffect(() => {
    if (props.viewTrans) {
      getHistoryStatusView()
    }
  }, [props])

  const getHistoryStatusView = () => {
    const options = {
      headers: {
        'username': 'OpenTurfDev',
        'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.get(`${apiUrl}/js/transaction?transactionReference=SrcTxnId001`, { headers: options.headers }
    ).then((res) => {
      // setFeaturedInfo(true)
      setHistoryList(res.data)
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
    <Dialog
      open={props.viewTrans} sx={{ height: '100%', width: '100%' }} onClose={() => props.OnClickViewClose()}
    >
      <DialogTitle>
        <Stack spacing={12} justifyContent='end' direction='row'>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Bank Transacation View</Typography>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0}><CloseRounded width={10} height={10} onClick={props.OnClickViewClose} /></IconButton>
        </Stack>
      </DialogTitle>
      {/* <Stack spacing={1} justifyContent="center" alignItems="center" direction="row" width={500}>
        <Stack direction="column" spacing={2} textAlign="right" >
        <Typography color="#575757" fontWeight='500' >Transacations Date :</Typography>
        <Typography color="#575757" fontWeight='500' >Mobile Number :</Typography>
        <Typography color="#575757" fontWeight='500' >Transacations Type :</Typography>
        <Typography color="#575757" fontWeight='500' >Transacations Reference :</Typography>
        <Typography color="#575757" fontWeight='500' >Cancellation Status :</Typography>
        </Stack>
        <Stack spacing={2} textAlign="left">
        <Typography color="#575757" fontWeight='500'>27 Jan 2022</Typography>
        <Typography color="#575757" fontWeight='500'>USD $50.00</Typography>
        <Typography color="#575757" fontWeight='500'>Mock Data</Typography>
        <Typography color="#575757" fontWeight='500'>Mock Data</Typography>
        <Typography color="#575757" fontWeight='500'>Success</Typography>
        </Stack>

      </Stack> */}
      {historyList ?
        <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
          {/* <Stack direction="column" spacing={2} textAlign="right" >
            <Typography color="#575757" fontWeight='500'>
              Transaction Date :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Mobile Number :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Transaction Type :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Transaction Reference :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Transaction Status :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Tp Transaction Reference :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Sender Mobile Number :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Benificiary Mobile Number :
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Benificiary Mobile Account :
            </Typography>
          </Stack>
          <Stack spacing={2} textAlign="left">
            <Typography color="#575757" fontWeight='500'>
              27 Jan 2020
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              USD 50$
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Bank
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Bank
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Success
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              Success
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              9025797873
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              9025797873
            </Typography>
            <Typography color="#575757" fontWeight='500'>
              9025797873
            </Typography>
          </Stack> */}
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Account</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" > Amount</StyledTableCell>
                  <StyledTableCell align="left">{historyList.amount}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Currency</StyledTableCell>
                  <StyledTableCell align="left"> {historyList.currency}</StyledTableCell>
                </StyledTableRow>
                {historyList && historyList.creditParty && historyList.creditParty.length > 0 && <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Sender Mobile</StyledTableCell>
                  <StyledTableCell align="left"> {historyList.creditParty[0].value}</StyledTableCell>
                </StyledTableRow>}
                {historyList && historyList.debitParty && historyList.debitParty.length > 0 && <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Reciver Mobile</StyledTableCell>
                  <StyledTableCell align="left"> {historyList.debitParty[0].value}</StyledTableCell>
                </StyledTableRow>}
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Request Date</StyledTableCell>
                  <StyledTableCell align="left"> {historyList.requestDate}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Transaction Reference</StyledTableCell>
                  <StyledTableCell align="left">{historyList.transactionReference}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Transaction Status</StyledTableCell>
                  <StyledTableCell align="left">{historyList.transactionStatus}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" >Transaction Type</StyledTableCell>
                  <StyledTableCell align="left">{historyList.type}</StyledTableCell>
                </StyledTableRow>
                {/* <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Business Name</StyledTableCell>
                    <StyledTableCell align="left">{props.businessName}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Business Registration Type</StyledTableCell>
                    <StyledTableCell align="left">{props.businessRegistrationType}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" > Business Email</StyledTableCell>
                    <StyledTableCell align="left">{props.businessEmail}
                    </StyledTableCell>
                  </StyledTableRow> */}
                {/* <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Description</StyledTableCell>
                    <StyledTableCell align="left">{props.dob}
                    </StyledTableCell>
                  </StyledTableRow> */}
                {/* <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Description</StyledTableCell>
                    <StyledTableCell align="left">{props.descriptionText}</StyledTableCell>
                  </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack> : ''}
      <Stack spacing={3} py={5} justifyContent='center' direction='row'>
        <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={props.OnClickViewClose}>OK</Button>
      </Stack>
    </Dialog>
  )
}
