import { Box, Button, Paper, Stack, Typography } from '@mui/material'

export default function CancelHistory(props) {
    const OnClickCancelClose = () => {
        props.setCancelTrans(false);
      };

  return (
    <>
    <Typography textAlign='left' fontSize={20} variant='h6' color="#404040">Cancel Transaction</Typography>
    <Paper>
        <Box>
            <Stack py={5} justifyContent='center' textAlign='center' direction='row'>
                <Typography variant='h6' fontFamily='Poppins' fontWeight='600' my={2}>Transacations Cancelled</Typography>
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
                    <Button sx={{ alignSelf: 'center', letterSpacing: 1 }} variant='contained' onClick={OnClickCancelClose}>OK</Button>
                </Stack>
            </Box>
        </Box>
    </Paper>
    </>
  )
}
