import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';
import QuotationStatusPopup from './QuotationStatusPopup'
import { currencyList } from '../../Utils/currency';
import { useNavigate } from "react-router-dom";
const apiUrl = config.api.url

export default function Mobile(props) {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [creditMobileNumber, setCreditMobileNumber] = useState('+255897378380')
  const [receiverMobileNumber, setReceiverMobileNumber] = useState('+4491509874561')
  const [amount, setAmount] = useState('500')
  const [requestCurrency, setRequestCurrency] = useState('NPR')
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [reciveCurrency, setReciveCurrency] = useState('NPR')
  // const [receiverBankAccount, setReceiverBankAccount] = useState('NPR')
  const [requestDate, setRequestDate] = useState('2017-06-20 12:27:16')
  const [status, setStatus] = useState('')
  const [quotationReference, setQuotationReference] = useState({})
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  let navigate = useNavigate();

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
    props.quotationClose(quotationReference)
  }

  const createPersonalTransaction = () => {
    setFeaturedInfo(false)
    /* setCreditMobileNumber('+9779840002320')
    setRequestCurrency('500')
    setRequestCurrency('NPR') */
    navigate(`/sender-app/transactions-personal`)
  }

  const createBusinessTransaction = () => {
    setFeaturedInfo(false)
    /* setCreditMobileNumber('+9779840002320')
    setRequestCurrency('500')
    setRequestCurrency('NPR') */
    navigate(`/sender-app/transactions-business`)

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
    axios.post(`${apiUrl}/${localStorage.getItem('language')}/quotation`
      , {
        "requestDate": new Date().toLocaleString("sv-SE"),
        "debitParty": [
          {
            "key": "msisdn",
            "value": `${receiverMobileNumber}`
          }
        ],
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
      if (res.data.error) {
        setErrorPopup(true)
        setErrorRes(res.data)
      } else {
        setLei(res.data.lei)
        setStatus(res.data.status)
        setSubStatus(res.data.subStatus)
        setQuotationReference(res.data)
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

  useEffect(()=>{
   if(props.accountNumber) {
    setCreditMobileNumber(props.accountNumber)
   }
  },[props])  
  return (
    <>
      {/* <Paper sx={{ p: 2 }}> */}
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Mobile Quotation</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Request Quotation Amount <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Request Quotation Amount' onChange={({ target }) => setAmount(target.value)} value={amount} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Sender Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Mobile Number' onChange={({ target }) => setReceiverMobileNumber(target.value)} value={receiverMobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Receiver Mobile Number <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Mobile Number' onChange={({ target }) => setCreditMobileNumber(target.value)} value={creditMobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Request Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 205 }}
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
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Send Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 205 }}
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
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Receive Currency <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <TextField
                alignItems='center'
                sx={{ width: 205 }}
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
          </Stack>
         
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {requestCurrency && amount && sendCurrency && reciveCurrency && requestDate && creditMobileNumber
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      {/* </Paper> */}
      <QuotationStatusPopup
        featuredInfo={featuredInfo}
        creditMobileNumber={creditMobileNumber}
        amount={amount}
        requestCurrency={requestCurrency}
        sendCurrency={sendCurrency}
        reciveCurrency={reciveCurrency}
        quotationReference={quotationReference}
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
