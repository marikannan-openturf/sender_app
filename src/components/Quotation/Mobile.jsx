import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';
import QuotationStatusPopup from './QuotationStatusPopup'
const apiUrl = config.api.url

export default function Mobile() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [creditMobileNumber, setCreditMobileNumber] = useState('+9779840002320')
  const [amount, setAmount] = useState('500')
  const [requestCurrency, setRequestCurrency] = useState('NPR')
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [reciveCurrency, setReciveCurrency] = useState('NPR')
  const [status, setStatus] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [errorRes,setErrorRes] = useState({})

  const CloseErrorPopup = () => {
    setErrorPopup(false)
    /* setCreditMobileNumber('+9779840002320')
    setRequestCurrency('500')
    setRequestCurrency('NPR')
    setSendCurrency('USD')
    setReciveCurrency('NPR') */
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    /* setCreditMobileNumber('+9779840002320')
    setRequestCurrency('500')
    setRequestCurrency('NPR') */
  }

  const setFeaturedInfoDetails = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
        'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/quotation`
      , {
        "requestDate": "2017-06-20 12:27:16",
  "creditParty": [
    {
      "key": "msisdn",
      "value": `${creditMobileNumber}`
    }
  ],
  "requestAmount": `${amount}`,
  "requestCurrency": `${requestCurrency}`,
  "quotes": [
    {
      "sendingCurrency": `${sendCurrency}`,
      "receivingCurrency": `${reciveCurrency}`
    }
  ]
    },
      { headers: options.headers } 
    ).then((res) => {
      if(res.data.error) {
        setErrorPopup(true)
        setErrorRes(res.data)
      } else {
        setLei(res.data.lei)
        setStatus(res.data.status)
        setSubStatus(res.data.subStatus)
        setFeaturedInfo(true)
      }
    }).catch((err) => {
      setErrorPopup(true)
    })
  }

  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Mobile Quotation</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
             Receiver Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' onChange={({ target }) => setCreditMobileNumber(target.value)} value={creditMobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
             Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount' onChange={({ target }) => setAmount(target.value)} value={amount} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
             Request Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Request Currency' onChange={({ target }) => setRequestCurrency(target.value)} value={requestCurrency} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
             Send Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Send Currency' onChange={({ target }) => setSendCurrency(target.value)} value={sendCurrency} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency' onChange={({ target }) => setReciveCurrency(target.value)} value={reciveCurrency} />
          </Stack>
          {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full KYC name of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Full KYC name' onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
          </Stack> */}
          {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account Instrument
            </Typography>

            <TextField
              sx={{ width: 205 }}
              label="Instrument"
              value={network}
              onChange={({ target }) => setNetwork(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="" >
                Instrument
              </MenuItem>
              <MenuItem value='mobile-wallet'>Mobile-Wallet</MenuItem>
              <MenuItem value='bank-account'>Bank-Account</MenuItem>
            </TextField>
          </Stack> */}
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {creditMobileNumber && requestCurrency && amount && sendCurrency && reciveCurrency
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      </Paper>
      <QuotationStatusPopup
        featuredInfo={featuredInfo}
        creditMobileNumber={creditMobileNumber}
        amount={amount}
        requestCurrency={requestCurrency}
        sendCurrency={sendCurrency}
        reciveCurrency={reciveCurrency}
        setFeaturedInfoClose={setFeaturedInfoClose}
        lei={lei}
        status={status}
        subStatus={subStatus}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
