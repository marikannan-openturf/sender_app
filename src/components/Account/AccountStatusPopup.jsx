import { Container, Button, Dialog, OutlinedInput, Paper, Stack, TextField, Typography, Content, DialogContent, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'

export default function AccountStatusPopup(props) {
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
        <Stack sx={{ float: 'right' }} spacing={15} direction='row'>

          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Account Status</Typography>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0}><CloseRounded width={10} height={10} onClick={() => props.setFeaturedInfoClose()} /></IconButton>
        </Stack>
      </DialogTitle>
      <DialogContentText>

        <Stack spacing={2} width={500} alignItems='center' justifyContent='center' direction='row'>
          <Stack spacing={3} textAlign='right'>
            <Typography >Account Status :</Typography>
            <Typography >Account Sub Status :</Typography>
            <Typography > Legal Entity Identifier :</Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography>{props.accountNumber}</Typography>
            <Typography>{props.kycNumber}</Typography>
            <Typography> {props.network}</Typography>
          </Stack>

        </Stack>
        <Stack spacing={3} py={5} justifyContent='center' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
          <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' disabled>Create Transaction</CustomButtom>

        </Stack>
      </DialogContentText>


    </Dialog>
  )
}
