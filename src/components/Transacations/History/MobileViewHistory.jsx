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
export default function MobileViewHistory(props) {

  const [historyList, setHistoryList] = useState({})
  const [errorList, setErrorList] = useState({})
  const [errorListShow, setErrorListShow] = useState(false)
  const [historyListShow, setHistoryListShow] = useState(false)

  useEffect(() => {
    if (props.viewTrans) {
      getHistoryStatusView()
    }
  }, [props])

  const getHistoryStatusView = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('prodCountry') ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    axios.get(`${apiUrl}/${localStorage.getItem('language')}/transaction?transactionReference=${props.refId}`, { headers: options.headers }
    ).then((res) => {
      console.log("res.da",res.data)
      if(res.data.error) {
      setErrorList(res.data.error)
      setErrorListShow(true)
      setHistoryList({})
      } else {
        setHistoryList(res.data)
        setHistoryListShow(true)
        setErrorList({})
      }
    }).catch((err) => {
    })
  }
  console.log("errorl",errorList)
  return (
    <Dialog
      open={props.viewTrans} sx={{ height: '100%', width: '100%' }} onClose={() => props.OnClickViewClose()}
    >
      <DialogTitle>
        <Stack spacing={12} justifyContent='end' direction='row'>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Mobile Transacation View</Typography>
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
      {historyListShow ?
        <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
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
                {historyList && historyList.debitParty && historyList.debitParty.length > 0 &&  <StyledTableRow>
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
              </TableBody>
            </Table>
          </TableContainer>
        </Stack> : 
        errorListShow ? 
        <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
        <TableContainer component={Paper}>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
              <StyledTableCell>Error</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
              <StyledTableCell component="th" scope="row">Error Category</StyledTableCell>
                <StyledTableCell align="left">{errorList && errorList.errorCategory ? errorList.errorCategory : ''}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" > Error Code</StyledTableCell>
                <StyledTableCell align="left">{errorList && errorList.errorCode ? errorList.errorCode : ''}</StyledTableCell>
              </StyledTableRow>
             
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" >Date && Time</StyledTableCell>
                <StyledTableCell align="left"> {errorList && errorList.errorDateTime ? errorList.errorDateTime : ''}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" >errorDescription</StyledTableCell>
                <StyledTableCell align="left"> {errorList && errorList.errorDescription ? errorList.errorDescription : ''}</StyledTableCell>
              </StyledTableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
       : '' }
      <Stack spacing={3} py={5} justifyContent='center' direction='row'>
        <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={props.OnClickViewClose}>OK</Button>
      </Stack>
    </Dialog>
  )
}
