import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';
import { requestBodyData } from '../../Utils/common'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import MobileQuotation from '../Quotation/Mobile'
import PersonalMobile from '../Transacations/Personal/PersonalMobile';
import BusinessMobile from '../Transacations/Business/BusinessMobile'
const apiUrl = config.api.url
const steps = ['Account Status', 'Quotation', 'Select Transaction', 'Transaction'];
export default function Mobile() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('+9779840002320')
  const [kycNumber, setKycNumber] = useState('David Robinson')
  const [provider, setProvider] = useState("")
  const [senderName, setSenderName] = useState("")
  // const [network, setNetwork] = useState('mobile-wallet')
  const [status, setStatus] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  const [benificiaryErrorMsg, setBenificiaryErrorMsg] = useState(false)
  const [kycErrorMsg, setKycErrorMsg] = useState(false)
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [accountStatus, setAccountStatus] = useState(true)
  const [quotationActive, setQuotationActive] = useState(false)
  const [showTransactionActive, setShowTransactionActive] = useState(false)
  const [transaction, setTransaction] = useState("personal")
  const [transactionPersonal, setTransactionPersonal] = useState(false)
  const [transactionBusiness, setTransactionBusiness] = useState(false)
  const [quoteIdInfo, setQuoteIdInfo] = useState('')
  const CloseErrorPopup = () => {
    setErrorPopup(false)
    /* setAccountNumber('+9779840002320')
    setKycNumber('David Robinson') */
    // setNetwork('mobile-wallet')
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    handleNext()
    handleComplete()
    setAccountStatus(false)
    setShowTransactionActive(false)
    setTransactionPersonal(false)
    setTransactionBusiness(false)
    setQuotationActive(true)

  }

  const setFeaturedInfoDetails = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('environment') === 'uat' ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    let requestBodyDataInfo = {
      "instrument": 'mobile-wallet',
      "msisdn": `${accountNumber}`,
      "beneficiaryName": `${kycNumber}`,
      "provider": `${provider}`,
      "senderName": `${senderName}`
    }
    const requestBody = requestBodyData(requestBodyDataInfo)
    axios.post(`${apiUrl}/js/accounts-status`
      ,
      requestBody
      ,
      { headers: options.headers }
    ).then((res) => {
      if (res.data.status === 'available') {
        setLei(res.data.lei)
        setStatus(res.data.status)
        setSubStatus(res.data.subStatus)
        setFeaturedInfo(true)
      } else {
        setErrorPopup(true)
        setErrorRes(res.data)
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

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

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

  const selectTransaction = () => {
    setAccountStatus(false)
    setQuotationActive(false)
    setShowTransactionActive(false)
    if (transaction === 'personal') {
      setTransactionPersonal(true)
      setTransactionBusiness(false)
    } else {
      setTransactionBusiness(true)
      setTransactionPersonal(false)
    }
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
            <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Mobile Account Status</Typography>
            <Stack width={600} spacing={5} sx={{ p: 4 }}>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography color="#575757" fontWeight='500'>
                  Beneficiary MSISDN with country code <span style={{ color: '#ea5c57' }}>*</span>
                </Typography>
                <OutlinedInput
                  sx={{ height: 40 }}
                  placeholder='MSISDN number'
                  onChange={({ target }) => setAccountNumber(target.value)}
                  value={accountNumber}
                  error={benificiaryErrorMsg || ''}
                  helperText={benificiaryErrorMsg ? benificiaryErrorMsg : ''}
                />
              </Stack>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography color="#575757" fontWeight='500'>
                  Full KYC name of the beneficiary <span style={{ color: '#ea5c57' }}>*</span>
                </Typography>
                <OutlinedInput
                  sx={{ height: 40 }}
                  placeholder='Full KYC name'
                  onChange={({ target }) => setKycNumber(target.value)}
                  value={kycNumber}
                  error={kycErrorMsg || ''}
                  helperText={kycErrorMsg ? kycErrorMsg : ''}
                />
              </Stack>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography color="#575757" fontWeight='500'>
                  Sender Name
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Sender Name' onChange={({ target }) => setSenderName(target.value)} value={senderName} />
              </Stack>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography color="#575757" fontWeight='500'>
                  Provider
                </Typography>
                <OutlinedInput type='number' sx={{ height: 40 }} placeholder='Provider' onChange={({ target }) => setProvider(target.value)} value={provider} />
              </Stack>

              <Stack direction='row'>
                <div style={{ width: '400px' }}>
                </div>
                {accountNumber && kycNumber
                  ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
                  : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
                }
              </Stack>
            </Stack> </>
          : quotationActive ?
            <>
              <MobileQuotation accountNumber={accountNumber} quotationClose={quotationClose} />
            </>
            :
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
              </> : transactionPersonal ?
                <>
                  <PersonalMobile quoteIdInfo={quoteIdInfo} />
                </> : transactionBusiness ?
                  <>
                    <BusinessMobile quoteIdInfo={quoteIdInfo} />
                  </> : ''
        }
      </Paper>
      <AccountStatusPopup
        featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        // network={network}
        kycNumber={kycNumber}
        setFeaturedInfoClose={setFeaturedInfoClose}
        // createQuotation={createQuotation}
        lei={lei}
        status={status}
        subStatus={subStatus}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
