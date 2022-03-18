import { Button, Dialog, Stack, Typography, IconButton, DialogTitle,  DialogContentText } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'
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

export default function TransactionMobileStatusPopup(props) {
  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`
  return (
    <Dialog
      open={props.featuredInfo} sx={{ height: '100%', width: '100%' }} onClose={() => props.setFeaturedInfoClose()}
    >
      <DialogTitle>
        <Stack alignItems='right' justifyContent='right' direction='row'>
          <IconButton ><CloseRounded width={10} height={10} onClick={() => props.setFeaturedInfoClose()} /></IconButton>
        </Stack>
        <Stack alignItems='center' justifyContent='center' direction='row' pb={1}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Mobile Status</Typography>
        </Stack>
      </DialogTitle>
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
                    <StyledTableCell component="th" scope="row" > Transaction Status</StyledTableCell>
                    <StyledTableCell align="left">{props.successRes.transactionStatus}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" > Transaction Reference</StyledTableCell>
                    <StyledTableCell align="left">{props.successRes.transactionReference}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" > Amount</StyledTableCell>
                    <StyledTableCell align="left">{props.successRes.amount}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Currency</StyledTableCell>
                    <StyledTableCell align="left"> {props.currency}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" > Sender Mobile Number</StyledTableCell>
                    <StyledTableCell align="left">{props.mobileNumber}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Receiver Mobile Number</StyledTableCell>
                    <StyledTableCell align="left">{props.reciverMobileNumber}
                    </StyledTableCell>
                  </StyledTableRow>
                  {/* <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Gender</StyledTableCell>
                    <StyledTableCell align="left">{props.genderDetails}
                    </StyledTableCell>
                  </StyledTableRow> */}
                  {/* <StyledTableRow>
                    <StyledTableCell component="th" scope="row" > Nationality</StyledTableCell>
                    <StyledTableCell align="left">{props.nationality}
                    </StyledTableCell>
                  </StyledTableRow> */}
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Date of Birth</StyledTableCell>
                    <StyledTableCell align="left">{props.dob}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Description</StyledTableCell>
                    <StyledTableCell align="left">{props.descriptionText}</StyledTableCell>
                  </StyledTableRow>
              </TableBody>
              </Table>
          </TableContainer>
      </Stack>
      <Stack py={3} justifyContent='center' direction='row'>
        <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
      </Stack>
    </Dialog>
  )
}
