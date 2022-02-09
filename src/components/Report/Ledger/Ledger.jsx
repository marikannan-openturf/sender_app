import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';



export default function Ledger() {

    function refreshPage(){ 
        window.location.reload(); 
    }

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
        <Stack direction='row' mb={3}>
        <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Ledger Balance</Typography> 
        </Stack>
        <Stack spacing={3}>
        <Button variant='contained' sx={{backgroundColor:'#4490fa'}} onClick={refreshPage} >Refresh</Button>
        </Stack>
        </Stack>
        <Paper >
                <Box sx={{padding:'200px' }}>
                    <Stack spacing={2} alignItems='center' justifyContent='center' direction='row'>
                            <Typography  fontSize={25} fontWeight='500' >Your Current Balance is : 100, 0000.00</Typography>
                    </Stack>
                </Box>
        </Paper>
      </Stack>
    </>
  )
}
