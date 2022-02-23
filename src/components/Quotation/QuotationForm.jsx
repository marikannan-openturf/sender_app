import { Button, OutlinedInput, Paper, Stack, TextField, Typography, Container } from '@mui/material'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import QuotationResponse from './QuotationResponse';
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';

const apiUrl = config.api.url
export default function QuotationForm() {
  const [amount,setAmount] = useState('')
  const [currency,setCurrency] = useState('')
  const [senderMobileNumber,setSenderMobileNumber] = useState('')
  const [beneficiaryMobileNumber,setBeneficiaryMobileNumber] = useState('')
  const [bankAccountNumber,setBankAccountNumber] = useState('')
  const [country, setCountry] = useState('')
  const [sendingCurrency, setSendingCurrency] = useState('')
  const [receivingCurrency, setReceivingCurrency] = useState('')

  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)



  const setFeaturedInfoClose = () => {
    setAmount('')
    setCurrency('')
    setSenderMobileNumber('')
    setBeneficiaryMobileNumber('')
    setBankAccountNumber('')
    setCountry('')
    setSendingCurrency('')
    setReceivingCurrency('')
    setFeaturedInfo(false)
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
            "key": "bankaccountno",
            "value": "50100002965304"
          },
          {
            "key": "receivingCountry",
            "value": "IN"
          }
        ],
        "requestAmount": "500",
        "requestCurrency": "INR",
        "quotes": [
          {
            "sendingCurrency": "USD",
            "receivingCurrency": "INR"
          }
        ]
      },
      { headers: options.headers } 
    ).then((res) => {
      setFeaturedInfo(true)

    }).catch((err) => {
      setErrorPopup(true)
    })
  }

  const CloseErrorPopup = () =>{
    setErrorPopup(false)
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
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
            Amount
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Amount' value={amount} onChange={({target}) => setAmount(target.value)}/>
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
            Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Currency' value={currency} onChange={({target}) => setCurrency(target.value)} />
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sender Mobile Number' value={senderMobileNumber} onChange={({target}) => setSenderMobileNumber(target.value)} />
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
          Beneficiary Mobile Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }}   placeholder='Beneficiary Mobile Number' value={beneficiaryMobileNumber} onChange={({target}) => setBeneficiaryMobileNumber(target.value)}/>
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
            Bank Account Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder=' Bank Account Number' value={bankAccountNumber} onChange={({target}) => setBankAccountNumber(target.value)} />
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
        <Typography color="#575757" fontWeight='500'>
          Country
          </Typography>
        <TextField
          sx={{width:205}}
          label="Country"
          value={country}
          onChange={({ target }) => setCountry(target.value)}
          select
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={{ style: { height: 40 } }}
        >
          <MenuItem value='India'>India</MenuItem>
          <MenuItem value='France'>France</MenuItem>
          <MenuItem value='Germany'>Germany</MenuItem>
        </TextField>
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
              Sending Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sending Currency'  value={sendingCurrency} onChange={({target}) => setSendingCurrency(target.value)}/>
        </Stack>
        <Stack alignItems='center' justifyContent='space-between' direction='row'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Currency' value={receivingCurrency} onChange={({target}) => setReceivingCurrency(target.value)}/>
        </Stack>
          </Stack>
          <Stack direction='row' sx={{marginBottom: 3}}>
            <div style={{ width: '400px'}}>
            </div>
            {amount && currency && senderMobileNumber && beneficiaryMobileNumber && bankAccountNumber && country && sendingCurrency && receivingCurrency ?
                <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1}} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
      </Paper>
      <QuotationResponse setFeaturedInfoClose={setFeaturedInfoClose} featuredInfo={featuredInfo} />
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
