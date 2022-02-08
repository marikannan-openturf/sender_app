import { Container, Button, Dialog, OutlinedInput, Paper, Stack, TextField, Typography, Content, DialogContent, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'

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
        <Stack spacing={12} justifyContent='end' direction='row'>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}> Transaction Status</Typography>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0}><CloseRounded width={10} height={10} onClick={() => props.setFeaturedInfoClose()} /></IconButton>
        </Stack>
      </DialogTitle>
      <Stack spacing={1} justifyContent="center" alignItems="center" direction="row" width={500}>
        <Stack direction="column" spacing={2} textAlign="right" >
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
        </Stack>

      </Stack>
      <Stack spacing={3} py={5} justifyContent='center' direction='row'>
        <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={() => props.setFeaturedInfoClose()}>OK</Button>
        <CustomButtom sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' disabled>Create Transaction</CustomButtom>

      </Stack>
    </Dialog>
  )
}
