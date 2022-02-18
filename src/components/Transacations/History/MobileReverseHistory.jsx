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
export default function MobileReverseHistory(props) {

  return (
    <Dialog
      open={props.reverseTrans} sx={{ height: '100%', width: '100%' }} onClose={() => props.OnClickReverseClose()}
    >
      <DialogTitle>
        <Stack spacing={12} justifyContent='end' direction='row'>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Mobile Transacation Reversed</Typography>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0} onClick={() => props.OnClickReverseClose()}><CloseRounded width={10} height={10} onClick={props.onClickCancelClose} /></IconButton>
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
      {props.reverseDetails ?
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
                  <StyledTableCell component="th" scope="row" > Response Code</StyledTableCell>
                  <StyledTableCell align="left">{props.reverseDetails.responseCode}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" > Response Message</StyledTableCell>
                  <StyledTableCell align="left">{props.reverseDetails.responseMessage}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" > Transaction Id</StyledTableCell>
                  <StyledTableCell align="left">{props.reverseDetails.txnId ? props.reverseDetails.txnId : 'null'}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack> : ''}
      <Stack spacing={3} py={5} justifyContent='center' direction='row'>
        <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={props.OnClickReverseClose}>OK</Button>
      </Stack>
    </Dialog>
  )
}
