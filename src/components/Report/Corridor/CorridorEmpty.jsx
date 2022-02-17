import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import WorldConnectedIcon from '../../../assets/img/WorldConnectedIcon.svg'



export default function CorridorEmpty() {

    function refreshPage(){ 
        window.location.reload(); 
    }

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
        <Stack direction='row' mb={3}>
        <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Corridor Quotation</Typography> 
        </Stack>
        <Stack spacing={3}>
        <Button variant='contained' sx={{backgroundColor:'#4490fa'}} onClick={refreshPage} >Refresh</Button>
        </Stack>
        </Stack>
        <Paper >
                <Box>
                    <Stack alignItems='center' justifyContent='center' direction='row'>
                        <Stack alignItems='center' justifyContent='center' sx={{marginTop:'-60px' }} >
                            <img src={WorldConnectedIcon} width="500" height="500" />
                            <Typography  pb={5} sx={{marginTop:'-80px' }} fontSize={18} fontWeight='500' >No corridor active.</Typography>
                        </Stack>
                    </Stack>
                    
                </Box>
        </Paper>
      </Stack>
    </>
  )
}
