import { Button, Dialog, Stack, Typography, IconButton, DialogTitle, DialogContentText } from '@mui/material'
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

export default function QuotationStatusBankPopup(props) {
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
          <IconButton><CloseRounded width={10} height={10} onClick={() => props.setFeaturedInfoClose()} /></IconButton>
        </Stack>
        <Stack alignItems='center' justifyContent='center' direction='row' pb={1}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'>Bank Quotation Status</Typography>
        </Stack>
      </DialogTitle>
      <DialogContentText>
      <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
      <TableContainer component={Paper}>
              <Table aria-label="custom pagination table">
              <TableHead>
                  <TableRow>
                  <StyledTableCell>Key</StyledTableCell>
                  <StyledTableCell align="left">Value</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {props.accountNumber && 
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" sx={{width:'50%'}} >Account Number</StyledTableCell>
                    <StyledTableCell align="left" sx={{width:'50%'}} >{props.accountNumber}</StyledTableCell>
                  </StyledTableRow>
                }
                {props.reciveCountry && 
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" sx={{width:'50%'}} >Receive Country</StyledTableCell>
                    <StyledTableCell align="left" sx={{width:'50%'}} >{props.reciveCountry}</StyledTableCell>
                  </StyledTableRow>
                }
                  {props.amount && 
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" >Request Amount</StyledTableCell>
                    <StyledTableCell align="left">{props.amount}</StyledTableCell>
                  </StyledTableRow>
                }
                  {props.requestCurrency && 
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Request Currency</StyledTableCell>
                      <StyledTableCell align="left">{props.requestCurrency}</StyledTableCell>
                  </StyledTableRow>
                }
                {props.sendCurrency && 
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Send Currency</StyledTableCell>
                      <StyledTableCell align="left">{props.sendCurrency}</StyledTableCell>
                  </StyledTableRow>
                }
                {props.reciveCurrency && 
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Receive Currency</StyledTableCell>
                      <StyledTableCell align="left">{props.reciveCurrency}</StyledTableCell>
                  </StyledTableRow>
                }
                {props.successRes && 
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Quotation Reference</StyledTableCell>
                      <StyledTableCell align="left">{props.successRes.quotationReference}</StyledTableCell>
                  </StyledTableRow>
                }
              </TableBody>
              </Table>
          </TableContainer>

        </Stack>
        <Stack py={3} justifyContent='center' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
          {/* <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' disabled>Create Transaction</CustomButtom> */}

        </Stack>
      </DialogContentText>


    </Dialog>
  )
}
