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

export default function AccountStatusBankPopup(props) {
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
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'>Bank Account Status</Typography>
        </Stack>
      </DialogTitle>
      <DialogContentText>
      <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
          
          {/* <Stack  spacing={3} textAlign='right'>
            <Typography color="#575757" fontWeight='500' >Account Number of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' >Account KYC Number of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' >Bank name of the beneficiary :</Typography>
            <Typography color="#575757" fontWeight='500' >Bank code-IFSC/Routing Code/Swift BIC :</Typography>
            <Typography color="#575757" fontWeight='500' > Country :</Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography color="#575757" fontWeight='500'>{props.accountNumber}</Typography>
            <Typography color="#575757" fontWeight='500'>{props.kycNumber}</Typography>
            <Typography color="#575757" fontWeight='500'> {props.network}</Typography>
            <Typography color="#575757" fontWeight='500'> {props.bankCode}</Typography>
            <Typography color="#575757" fontWeight='500'>{props.country}</Typography>
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
                    {props.status && 
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row" sx={{width:'50%'}} >Status</StyledTableCell>
                        <StyledTableCell align="left" sx={{width:'50%'}} >{props.status}</StyledTableCell>
                      </StyledTableRow>
                    }
                      {props.subStatus && 
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row" >Sub Status</StyledTableCell>
                        <StyledTableCell align="left">{props.subStatus}</StyledTableCell>
                      </StyledTableRow>
                    }
                      {props.lei && 
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row" >Legal Entity Identifierinstrument</StyledTableCell>
                          <StyledTableCell align="left">{props.lei}</StyledTableCell>
                      </StyledTableRow>
                    }
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" sx={{width:'50%'}} > Account Number of the beneficiary</StyledTableCell>
                      <StyledTableCell align="left" sx={{width:'50%'}} >{props.accountNumber}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Account KYC Number of the beneficiary</StyledTableCell>
                      <StyledTableCell align="left">{props.kycNumber}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Bank name of the beneficiary</StyledTableCell>
                      <StyledTableCell align="left">{props.network}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Bank code-IFSC/Routing Code/Swift BIC</StyledTableCell>
                      <StyledTableCell align="left">{props.bankCode}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" >Country</StyledTableCell>
                      <StyledTableCell align="left">{props.country}</StyledTableCell>
                    </StyledTableRow>
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
