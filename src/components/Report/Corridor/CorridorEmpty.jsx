import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import EmptyCorridor from '../../../assets/img/EmptyCorridor.svg'



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
                <Box sx={{padding:'40px' }}>
                    <Stack spacing={2} alignItems='center' justifyContent='center' direction='row'>
                        <Stack alignItems='center' justifyContent='center'>
                            <img src={EmptyCorridor} width="400" height="400" />
                            <Typography  sx={{marginTop:'-70px' }} fontSize={18} fontWeight='500' >No Corridor active.</Typography>
                        </Stack>
                    </Stack>
                    
                </Box>
        </Paper>
      </Stack>
    </>
  )
}
