import { Container,Box, Button, Dialog, OutlinedInput, Paper, Stack, TextField, Typography, Content, DialogContent, IconButton, DialogTitle, DialogContentText } from '@mui/material'
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { styled } from '@mui/system'

export default function ReverseHistory(props) {
    const OnClickReverseClose = () => {
        props.setReverseTrans(false);
      };


  return (
    <>
        <Typography textAlign='left' fontSize={20} variant='h6' color="#404040">Reverse Transaction</Typography>
            <Paper>
                <Box>
                    <Stack py={5} justifyContent='center' textAlign='center' direction='row'>
                        <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Transacations Reversed</Typography>
                    </Stack>
                    <Box>
                        <Stack spacing={2} alignItems='center' justifyContent='center' direction='row'>
                            <Stack  spacing={3} textAlign='right'>
                                <Typography color="#575757" fontWeight='500' >Transacations Date :</Typography>
                                <Typography color="#575757" fontWeight='500' >Mobile Number :</Typography>
                                <Typography color="#575757" fontWeight='500' >Transacations Type :</Typography>
                                <Typography color="#575757" fontWeight='500' >Transacations Reference :</Typography>
                                <Typography color="#575757" fontWeight='500' >Cancellation Status :</Typography>
                            </Stack>
                            <Stack spacing={3}>
                                <Typography color="#575757" fontWeight='500'>sadasd</Typography>
                                <Typography color="#575757" fontWeight='500'>sadasd</Typography>
                                <Typography color="#575757" fontWeight='500'>sadasd</Typography>
                                <Typography color="#575757" fontWeight='500'>sadasd</Typography>
                                <Typography color="#575757" fontWeight='500'>sadasd</Typography>
                            </Stack>
                        </Stack>
                        <Stack py={5} justifyContent='center' direction='row'>
                            <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={OnClickReverseClose}>OK</Button>
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </>
  )
}
