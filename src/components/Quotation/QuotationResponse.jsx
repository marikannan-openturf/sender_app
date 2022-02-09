import * as React from 'react';
import { Button, Dialog, Stack, Typography, DialogTitle, DialogContentText } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  
  function createData(requestamount, dollars,) {
    return { requestamount, dollars};
  }
  
  const rows = [
    createData('Request Currency', 'USD'),
    createData('Sender MSISDN', 3423423423),
    createData('Beneficiary MSISDN', 1434234),
    createData('Bank Account Number', 2342343),
    createData('Receiving Country', 'India'),
    createData('Quotation Expiry Time', '6.00PM IST'),
    createData('Sending Amount', '50.00 USD'),
    createData('Receiving Amount', '3500.00 INR'),
    createData('Forex Rate', '74.00'),
    createData('Terrapay Quotation Reference', 97697697),
    createData('Quotation Status', 'Active'),
  ];


export default function QuotationResponse(props) {
  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`

  return (
    <Dialog
      open={props.featuredInfo} sx={{ height: '100%', width: '100%' }} onClose={() => props.setFeaturedInfoClose()} >
      <DialogTitle>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}> Quotation Id: 34234234</Typography>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Date: 10 Jan 2020</Typography>
        </Stack>
      </DialogTitle>
      <DialogContentText>
        <Stack spacing={2} width={500} paddingBottom={5} paddingLeft={5} paddingRight={5} alignItems='center' justifyContent='center' direction='row'>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Request Amount</StyledTableCell>
                <StyledTableCell align="left">Dollars</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(rows.length > 0 && rows
                ).map((row) => (
                <StyledTableRow key={row.requestamount}>
                    <StyledTableCell component="th" scope="row" >{row.requestamount}</StyledTableCell>
                    <StyledTableCell align="left">{row.dollars}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </Stack>
        <Stack paddingBottom={5} paddingRight={5} justifyContent='right' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
        </Stack>
      </DialogContentText>


    </Dialog>
  )
}
