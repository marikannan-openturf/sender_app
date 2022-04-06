import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';
import QuotationStatusBankPopUp from './QuotationStatusBankPopUp'
import { currencyList } from '../../Utils/currency';
import { countryList } from '../../Utils/country';
import {requestBodyData} from '../../Utils/common'
const apiUrl = config.api.url

export default function Bank(props) {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('232201001600')
  const [senderMobileNumber, setSenderMobileNumber] = useState('+9779840002444')
  const [receiverMobileNumber, setReceiverMobileNumber] = useState('')
  const [reciveCountry, setReciveCountry] = useState('IN')
  const [amount, setAmount] = useState('500')
  const [requestCurrency, setRequestCurrency] = useState('INR')
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [reciveCurrency, setReciveCurrency] = useState('INR')
  const [requestDate, setRequestDate] = useState('2017-06-20 12:27:16')
  const [status, setStatus] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  const [successRes, setSuccessRes] = useState({})
  const [quotationReference, setQuotationReference] = useState({})

  const CloseErrorPopup = () => {
    setErrorPopup(false)
    /* setAccountNumber('50100002965304')
    setRequestCurrency('500')
    setRequestCurrency('INR')
    setSendCurrency('USD')
    setReciveCurrency('INR')
    setReciveCountry('IN') */
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    props.quotationClose(quotationReference)

    /* setAccountNumber('50100002965304')
    setRequestCurrency('500')
    setRequestCurrency('NPR')
    setSendCurrency('USD')
    setReciveCurrency('NPR')
    setReciveCountry('IN') */
  }

  const setFeaturedInfoDetails = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('prodCountry') ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    // let requestBodyDataInfo =  {
    //   "requestDate": new Date().toLocaleString("sv-SE"),
    //   "debitParty": [
    //     {
    //       "key": "msisdn",
    //       "value": `${senderMobileNumber}`
    //     }
    //   ],
    //   "creditParty": [
    //     {
    //       "key": "msisdn",
    //       "value": `${receiverMobileNumber}`
    //     },
    //     {
    //       "key": "bankaccountno",
    //       "value": `${accountNumber}`
    //     },
    //     {
    //       "key": "receivingCountry",
    //       "value": `${reciveCountry}`
    //     }
    //   ],
    //   "requestAmount": `${amount}`,
    //   "requestCurrency": `${requestCurrency}`,
    //   "quotes": [
    //     {
    //       "sendingCurrency": `${sendCurrency}`,
    //       "receivingCurrency": `${reciveCurrency}`
    //     }
    //   ]
    // }
    // const requestBody = requestBodyData(requestBodyDataInfo)
    axios.post(`${apiUrl}/${localStorage.getItem('language')}/quotation`
      , {
        "requestDate": new Date().toLocaleString("sv-SE"),
        "debitParty": [
          {
            "key": "msisdn",
            "value": `${senderMobileNumber}`
          }
        ],
        "creditParty": [
          {
            "key": "msisdn",
            "value": `${receiverMobileNumber}`
          },
          {
            "key": "bankaccountno",
            "value": `${accountNumber}`
          },
          {
            "key": "receivingCountry",
            "value": `${reciveCountry}`
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
      if (res.data.error) {
        setErrorPopup(true)
        setErrorRes(res.data)
      } else {
        setLei(res.data.lei)
        setStatus(res.data.status)
        setSubStatus(res.data.subStatus)
        setSuccessRes(res.data)
        setQuotationReference(res.data)
        setFeaturedInfo(true)
      }
    }).catch((err) => {
      setFeaturedInfo(true)
    })
  }

  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`

    useEffect(()=>{
    if(props.accountNumber) {
      setAccountNumber(props.accountNumber)
    }
    if(props.reciveCountry) {
      setReciveCountry(props.reciveCountry)
    }
    if(props.benificiaryNumber) {
      setReceiverMobileNumber(props.benificiaryNumber)
    }
    },[props])
  return (
    <>
      {/* <Paper sx={{ p: 2 }}> */}
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Bank Quotation</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Request Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' onChange={({ target }) => setRequestDate(target.value)} value={requestDate} />
          </Stack> */}
         
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account Number <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Account Number' onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Receive Country <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
            alignItems='center'
              sx={{ width: 200}}
              label="Receive Country"
              value={reciveCountry}
              onChange={({ target }) => setReciveCountry(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              

                            {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
            </TextField>
            {/* <OutlinedInput sx={{ height: 40 }} placeholder='Recive Country' onChange={({ target }) => setReciveCountry(target.value)} value={reciveCountry} /> */}
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Amount <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Amount' onChange={({ target }) => setAmount(target.value)} value={amount} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Sender Mobile Number <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Sender Mobile Number' onChange={({ target }) => setSenderMobileNumber(target.value)} value={senderMobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Receiver Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40,width:200 }} placeholder='Receiver Mobile Number' onChange={({ target }) => setReceiverMobileNumber(target.value)} value={receiverMobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Request Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 200 }}
                label="Request Currency"
                value={requestCurrency}
                onChange={({ target }) => setRequestCurrency(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                  )
                })}
              </TextField>
            {/* <OutlinedInput sx={{ height: 40 }} placeholder='Request Currency' onChange={({ target }) => setRequestCurrency(target.value)} value={requestCurrency} /> */}
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Send Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 200 }}
                label="Send Currency"
                value={sendCurrency}
                onChange={({ target }) => setSendCurrency(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                  )
                })}
              </TextField>
            {/* <OutlinedInput sx={{ height: 40 }} placeholder='Send Currency' onChange={({ target }) => setSendCurrency(target.value)} value={sendCurrency} /> */}
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Receive Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 200 }}
                label="Receive Currency"
                value={reciveCurrency}
                onChange={({ target }) => setReciveCurrency(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                  )
                })}
              </TextField>
            {/* <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency' onChange={({ target }) => setReciveCurrency(target.value)} value={reciveCurrency} /> */}
          </Stack>
          
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {accountNumber && requestCurrency && amount && sendCurrency && reciveCurrency && reciveCountry 
            ? 
            <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      {/* </Paper> */}
      <QuotationStatusBankPopUp
        featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        reciveCountry={reciveCountry}
        amount={amount}
        requestCurrency={requestCurrency}
        sendCurrency={sendCurrency}
        reciveCurrency={reciveCurrency}
        setFeaturedInfoClose={setFeaturedInfoClose}
        quotationReference={quotationReference}
        lei={lei}
        status={status}
        subStatus={subStatus}
        successRes={successRes}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
