import { Button, Dialog, Stack, Typography, IconButton, DialogTitle } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'

export default function MobileViewHistory(props) {

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
      <Stack spacing={1} justifyContent="center" alignItems="center" direction="row" width={500}>
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

      </Stack>
      <Stack spacing={3} py={5} justifyContent='center' direction='row'>
      <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={props.OnClickViewClose}>OK</Button>
      </Stack>
    </Dialog>
  )
}
