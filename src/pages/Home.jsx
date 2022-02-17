import './home.css'
import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import WelcomeIcon from '../assets/img/WelcomeIcon.svg'

export default function Home() {
  return (
  <div className='home'>
    <Stack p={6} >
      <Stack direction='row' justifyContent='flex-start' spacing={5}>
        <Stack direction='row' mb={3}>
          <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Ledger Balance</Typography> 
        </Stack>
      </Stack>
        <Paper>
          <Stack p={1} alignItems='center' justifyContent='center' direction='row' ><img src={WelcomeIcon} width="350" height="350" alt="walletIcon"/></Stack>
            <Box sx={{marginTop:'-75px' }} py={7}>
                <Stack spacing={2} alignItems='center' justifyContent='center' direction='row'>
                        <Typography   color={"#575757"} fontSize={16} fontWeight='500' >Welcome! start sending money.</Typography>
                </Stack>
            </Box>
        </Paper>
    </Stack>
  </div>
  );
}
