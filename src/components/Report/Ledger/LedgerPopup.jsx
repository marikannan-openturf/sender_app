import { Button, Dialog, Stack, Typography, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'
import './LedgerStyles.css'

export default function LedgerPopup(props) {

  return (
    <Dialog
      open={props.ledgerPopup} sx={{ height: '100%', width: '100%' }} onClose={() => props.closeLedgerPopup()} >
      <DialogTitle>
        <Stack alignItems='right' justifyContent='right' direction='row'>
          <IconButton><CloseRounded width={10} height={10} onClick={() => props.closeLedgerPopup()} /></IconButton>
        </Stack>
        <Stack alignItems='center' justifyContent='center' direction='row' pb={1}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'>JSON Code Snipppet</Typography>
        </Stack>
      </DialogTitle>
      <DialogContentText>
      <Stack px={5} width={500} alignItems='center' justifyContent='center' direction='row'>
        Mock Data
        </Stack>
        <Stack py={3} justifyContent='center' direction='row'>
          <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained'  onClick={() => props.closeLedgerPopup()} >OK</Button>
        </Stack>
      </DialogContentText>

    </Dialog>
  )
}
