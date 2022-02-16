import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { config } from '../../../assets/config/config';
const apiUrl = config.api.url


export default function Ledger() {
   const [balance,setBalance] = useState('100, 0000.00')
   const [currency,setCurrency] = useState('')

    useEffect(()=>{
      getLedgerBalance()
     },[])
   
     const getLedgerBalance = () => {
       console.log("mari")
       const options = {
         headers: {
           'username': 'OpenTurfDev',
           'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
           'actualdate': '2018-04-04 09:27:16',
           'origincountry': 'US'
         }
       }
       axios.post(`${apiUrl}/js/ledger-balance`,{},{ headers: options.headers } 
       ).then((res) => {
         // setFeaturedInfo(true)
         console.log("res.data.length",res.data.length)
         if(res.data && res.data.length > 0) {
           console.log("test")
           setBalance(res.data[0].currentBalance)
           setCurrency(res.data[0].currency)
         }
         console.log(res.data[0].currentBalance)
   
       }).catch((err) => {
         // setErrorPopup(true)
       }) 
     }

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
        <Stack direction='row' mb={3}>
        <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Ledger Balance</Typography> 
        </Stack>
        <Stack spacing={3}>
        <Button variant='contained' sx={{backgroundColor:'#4490fa'}} onClick={getLedgerBalance} >Refresh</Button>
        </Stack>
        </Stack>
        <Paper >
                <Box sx={{padding:'200px' }}>
                    <Stack spacing={2} alignItems='center' justifyContent='center' direction='row'>
                            <Typography  fontSize={25} fontWeight='500' >Your Current Balance is : {balance} {currency}</Typography>
                    </Stack>
                </Box>
        </Paper>
      </Stack>
    </>
  )
}
