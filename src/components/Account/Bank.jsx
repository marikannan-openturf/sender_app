import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React,{ useState } from 'react'
import AccountStatusBankPopup from './AccountStatusBankPopup'
import MenuItem from '@mui/material/MenuItem';
import ErrorPopup from '../../pages/ErrorPopup';
import { styled } from '@mui/system'
import axios from 'axios'
import { config } from '../../assets/config/config';
import {countryList} from '../../Utils/country'
import {requestBodyData} from '../../Utils/common'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import BankQuotation from '../Quotation/Bank'
import PersonalBank from '../Transacations/Personal/PersonalBank'
import BusinessBank from '../Transacations/Business/BusinessBank'
const apiUrl = config.api.url
const steps = ['Account Status', 'Quotation', 'Select Transaction', 'Transaction'];

export default function Bank() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('50100002965304')
  const [kycNumber, setKycNumber] = useState('David Robinson')
  const [senderName, setSenderName] = useState('')
  const [bankCode, setBankCode] = useState('12345')
  const [bankName, setBankName] = useState('HDFC Bank')
  const [country, setCountry] = useState('IN')
  const [provider, setProvider] = useState('')
  const [subCode, setSubCode] = useState('')
  const [msisdn, setMsisdn] = useState('')
  // const [network, setNetwork] = useState('bank-account')
  const [errorPopup, setErrorPopup] = useState(false)
  const [errorRes, setErrorRes] = useState({})

  const [status, setStatus] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [accountStatus, setAccountStatus] = useState(true)
  const [quotationActive, setQuotationActive] = useState(false)
  const [showTransactionActive, setShowTransactionActive] = useState(false)
  const [transaction, setTransaction] = useState("personal")
  const [transactionPersonal,setTransactionPersonal] = useState(false)
  const [transactionBusiness,setTransactionBusiness] = useState(false)
  const [quoteIdInfo,setQuoteIdInfo] = useState('')

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    handleNext()
    handleComplete()
    setAccountStatus(false)
    setShowTransactionActive(false)
    setTransactionPersonal(false)
    setTransactionBusiness(false)
    setQuotationActive(true)
    /*   setAccountNumber('50100002965304')
      setKycNumber('Deepa Jain')
      setBankCode('HDFC0001626')
      setBankName('HDFC Bank')
      setCountry('IN')
      setProvider('')
      setSubCode('') */
    // setNetwork('bank-account')
  }

  // const setFeaturedInfoDetails = () => {
  //   if (accountNumber && kycNumber && bankCode) {
  //     setFeaturedInfo(true)
  //     setErrorPopup(false)
  //   } else {
  //     setFeaturedInfo(false)
  //     setAccountNumber('')
  //     setKycNumber('')
  //     setBankCode('')
  //     setMobileNumber('')
  //     setCountry('')
  //     setProvider('')
  //     setSubCode('')
  //     setNetwork('')
  //     setErrorPopup(true)
  //   }
  // }

  const CloseErrorPopup = () => {
    setErrorPopup(false)
    /* setAccountNumber('50100002965304')
    setKycNumber('Deepa Jain')
    setBankCode('HDFC0001626')
    setBankName('HDFC Bank')
    setCountry('IN')
    setProvider('')
    setSubCode('') */
    // setNetwork('bank-account')
  }

  const CustomButtom = styled(Button)`
    &.Mui-disabled{
       opacity:0.5;
       background-color : #1976d2;
       color:white
    }`

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

      axios.post(`${apiUrl}/${localStorage.getItem('language')}/accounts-status`
        , {
          "instrument": 'bank-account',
          "accountId": `${accountNumber}`,
          "bankName": `${bankName}`,
          "countryCode": `${country}`,
          "beneficiaryName": `${kycNumber}`,
          "bankcode": `${bankCode}`,
          "banksubcode": `${subCode}`,
          "provider": `${provider}`,
          "snv": `${senderName}`,
          "msisdn": `${msisdn}`
      },
        { headers: options.headers }
      ).then((res) => {
        if (res.data.error) {
          setErrorPopup(true)
          setErrorRes(res.data)
          setFeaturedInfo(false)
        } else {
          setLei(res.data.lei)
          setStatus(res.data.status)
          setSubStatus(res.data.subStatus)
          setFeaturedInfo(true)
          setErrorPopup(false)
        }
      }).catch((err) => {
        setErrorPopup(true)
        setFeaturedInfo(false)
      })
  }

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const totalSteps = () => {
    return steps.length;
  };

  const selectTransaction = () => {
    setAccountStatus(false)
    setQuotationActive(false)
    setShowTransactionActive(false)
    if(transaction === 'personal') {
      setTransactionPersonal(true)
      setTransactionBusiness(false)
    } else {
      setTransactionBusiness(true)
      setTransactionPersonal(false)
    }
    handleNext()
    handleComplete()
  }

  const quotationClose = (data) => {
    setAccountStatus(false)
    setQuotationActive(false)
    setTransactionPersonal(false)
    setTransactionBusiness(false)
    setQuoteIdInfo(data)
    setShowTransactionActive(true)
    handleNext()
    handleComplete()

  }
  return (
    <>
      <Paper sx={{ p: 2 }}>
      <Box sx={{ width: '100%', marginTop: '30px', marginBottom: '20px' }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          </Box>
          {accountStatus ?
          <>
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Bank Account Status</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Beneficiary Bank Account ID or IBAN Number <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Beneficiary Bank Account' onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Full KYC name of the beneficiary <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Full KYC name' onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Full name of Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Full name of Sender' onChange={({ target }) => setSenderName(target.value)} value={senderName} />
          </Stack>
          {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account Instrument
            </Typography>
            <TextField
              sx={{ width: 205 }}
              label="instrument"
              value={network}
              onChange={({ target }) => setNetwork(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="" >
              instrument
              </MenuItem>
              <MenuItem value='mobile-wallet'>Mobile-Wallet</MenuItem>
              <MenuItem value='bank-account'>Bank-Account</MenuItem>
            </TextField>
          </Stack> */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank Name <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Name' onChange={({ target }) => setBankName(target.value)} value={bankName} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank code-IFSC/Routing Code/Swift BIC
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank code' onChange={({ target }) => setBankCode(target.value)} value={bankCode} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank Subcode
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Subcode' onChange={({ target }) => setSubCode(target.value)} value={subCode} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
              Country <span style={{color:'#ea5c57'}}>*</span>
            </Typography>
          <TextField
            alignItems='center'
              sx={{ width: 205}}
              label="Country"
              value={country}
              onChange={({ target }) => setCountry(target.value)}
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
            {/* <Typography color="#575757" fontWeight='500'>
              Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Country' onChange={({ target }) => setCountry(target.value)} value={country} /> */}
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Provider
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Provider' onChange={({ target }) => setProvider(target.value)} value={provider} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Beneficiary Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' onChange={({ target }) => setMsisdn(target.value)} value={msisdn} />
          </Stack>
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {accountNumber && kycNumber && bankName && country
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack> </> : quotationActive ?
            <> 
            <BankQuotation accountNumber={accountNumber} benificiaryNumber={msisdn} reciveCountry ={country}  quotationClose={quotationClose} />
            </> : 
            showTransactionActive ? 
            <>
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Select Transaction</Typography>

           <Stack width={600} spacing={5} sx={{ p: 4 }}>
             <Stack direction='row' alignItems='center' justifyContent='space-between'>
               <Typography color="#575757" fontWeight='500'>
                 Transaction <span style={{ color: '#ea5c57' }}>*</span>
               </Typography>
               <TextField
                 alignItems='center'
                 sx={{ width: 205 }}
                 label="Transaction"
                 value={transaction}
                 onChange={({ target }) => setTransaction(target.value)}
                 select
                 InputProps={{ style: { height: 40 } }}
                 InputLabelProps={{ style: { height: 40 } }}
               >
                 <MenuItem value='personal'>Personal-Transaction</MenuItem>
                 <MenuItem value='business'>Business-Transaction</MenuItem>
               </TextField>
             </Stack>
             <Stack direction='row'>
               <div style={{ width: '400px' }}>
               </div>
               <Button sx={{ letterSpacing: 1 }} onClick={selectTransaction} variant='contained'>Submit</Button>
             </Stack>
           </Stack>
           </> 
           : transactionPersonal ? 
           <>
           <PersonalBank quoteIdInfo={quoteIdInfo} accountNumber={accountNumber}/>
           </> : transactionBusiness ? 
           <>
           <BusinessBank quoteIdInfo={quoteIdInfo} accountNumber={accountNumber}/>
           </> : ''
            }
      </Paper>
      <AccountStatusBankPopup featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        // network={network}
        kycNumber={kycNumber}
        bankCode={bankCode}
        bankName={bankName}
        country={country}
        setFeaturedInfoClose={setFeaturedInfoClose}
        lei={lei}
        status={status}
        subStatus={subStatus} />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
