import { Container, Button, Dialog, OutlinedInput, Paper, Stack, TextField, Typography, Content, DialogContent, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'
import ErrorPopupIcon from '../assets/img/ErrorPopupIcon.svg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
export default function ErrorPopup(props) {
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
  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`
    const tryAgain = () => {
      window.location.reload()
    }
  return (
    <Dialog
      open={props.errorPopup} sx={{ height: '100%', width: '100%' }} onClose={() => props.CloseErrorPopup()}
    >
      <DialogTitle>
        <Stack sx={{ float: 'right' }} spacing={15} direction='row'>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0} onClick={() => props.CloseErrorPopup()}><CloseRounded width={10} height={10} /></IconButton>
        </Stack>
      </DialogTitle>
      <DialogContentText>
      {props &&  props.errorRes && props.errorRes.error && props.errorRes.error.systemError && props.errorRes.error.systemError.error && props.errorRes.error.systemError.error.length > 0 ? 
      
      <> <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
      
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
        <TableHead>
            <TableRow>
            <StyledTableCell>Error</StyledTableCell>
            <StyledTableCell align="left">Message</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {props.errorRes.error.systemError.error 
        && props.errorRes.error.systemError.error.length > 0
        && props.errorRes.error.systemError.error.map((value,index)=>{
          return(
            <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">{value.attribute}</StyledTableCell>
            <StyledTableCell align="left" >{value.message}</StyledTableCell>
          </StyledTableRow>
          )
        })}

        </TableBody>
        </Table>
    </TableContainer>
  </Stack> </> :
      <>
        <Stack spacing={2} width={500} alignItems='center' justifyContent='center' direction='row'>
          <Stack spacing={3} textAlign='right'>
            <img src={ErrorPopupIcon} width="100px" height="150px"style={{margin: 'auto'}} />
           {props.errorRes.error && props.errorRes.error ? <Typography >{props.errorRes.error.errorDescription}</Typography> :  <Typography >Something went wrong. Please try again later</Typography>}
          </Stack>
        </Stack></> }
        <Stack spacing={3} py={5} justifyContent='center' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.CloseErrorPopup()}>OK</Button>
          <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => tryAgain()}>TRY AGAIN</CustomButtom>

        </Stack>
      </DialogContentText>


    </Dialog>
  )
}
