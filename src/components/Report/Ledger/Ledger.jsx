import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography, IconButton} from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import WalletIcon from '../../../assets/img/WalletIcon.svg'
import InformationIconGray from '../../../assets/img/InformationIconGray.png'
import LedgerPopup from './LedgerPopup';
const apiUrl = config.api.url


export default function Ledger() {
   const [balance,setBalance] = useState('100, 0000.00')
   const [currency,setCurrency] = useState('')
   const [ledgerPopup, setLedgerPopup] = useState(false)
   const [response,setResponse] = useState({})

   const openLedgerPopup = () =>{
     setLedgerPopup(true)
   }
   const closeLedgerPopup =() =>{
     setLedgerPopup(false)
   }

    useEffect(()=>{
      getLedgerBalance()
     },[])
   
     const getLedgerBalance = () => {
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
         if(res.data && res.data.length > 0) {
           setBalance(res.data[0].currentBalance)
           setCurrency(res.data[0].currency)
           setResponse(res.data)
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
                <Stack alignItems='right' justifyContent='right' mr={3} mt={3} direction='row' >
                <IconButton><img  className="infomation-img" onClick={openLedgerPopup} src={InformationIconGray} width="20" height="20" alt="walletIcon"/></IconButton>
                </Stack>
                <Stack sx={{pb:0}} alignItems='center' justifyContent='center' direction='row' ><img src={WalletIcon} width="250" height="250" alt="walletIcon"/></Stack>

                <Box pb={4}>
                    <Stack alignItems='center' justifyContent='center'>
                            <Typography color={"#575757"} fontSize={25} fontWeight='500' >Your Current Balance </Typography>
                            <Typography color={"#575757"} fontSize={25} fontWeight='500' >{balance} {currency}</Typography>

                    </Stack>
                </Box>
        </Paper>
        <LedgerPopup response={response} closeLedgerPopup={closeLedgerPopup} ledgerPopup={ledgerPopup} />
      </Stack>
    </>
  )
}
