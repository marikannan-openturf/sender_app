import { Container, Button, Dialog, OutlinedInput, Paper, Stack, TextField, Typography, Content, DialogContent, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'
import ErrorPopupIcon from '../assets/img/ErrorPopupIcon.svg'
import { useNavigate } from "react-router-dom";

export default function SettingsErrorPopUp(props) {
  let navigate = useNavigate();

  const CloseErrorPopup = () => {
    navigate(`/sender-app/settings`)
    props.closeSettingsPopUp()
  }
  return (
    <Dialog
      open={props.errorPopup} sx={{ height: '100%', width: '100%' }} onClose={CloseErrorPopup}
    >
      <DialogTitle>
        <Stack sx={{ float: 'right' }} spacing={15} direction='row'>
          <IconButton sx={{ justifyContent: 'right', marginBlockEnd: `auto !important`, marginLeft: 'auto' }} p={0} onClick={CloseErrorPopup}><CloseRounded width={10} height={10} /></IconButton>
        </Stack>
      </DialogTitle>
      <DialogContentText>
        <>
          <Stack spacing={2} width={500} alignItems='center' justifyContent='center' direction='row'>
            <Stack spacing={3} textAlign='right'>
              <img src={ErrorPopupIcon} width="100px" height="150px" style={{ margin: 'auto' }} />
              <Typography >Please enter username and password to proceed</Typography>
            </Stack>
          </Stack>
          <Stack spacing={3} py={5} justifyContent='center' direction='row'>
            <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={CloseErrorPopup}>OK</Button>

          </Stack>
        </>
      </DialogContentText>


    </Dialog>
  )
}
