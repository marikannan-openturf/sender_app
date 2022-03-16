import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';
import {requestBodyData} from '../../Utils/common'
const apiUrl = config.api.url

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
  const [errorRes,setErrorRes] = useState({})
  const [benificiaryErrorMsg, setBenificiaryErrorMsg] = useState(false)
  const [kycErrorMsg, setKycErrorMsg] = useState(false)

  const CloseErrorPopup = () => {
    setErrorPopup(false)
    /* setAccountNumber('+9779840002320')
    setKycNumber('David Robinson') */
    // setNetwork('mobile-wallet')
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    /* setAccountNumber('+9779840002320')
    setKycNumber('David Robinson') */
    // setNetwork('mobile-wallet')
  }

  // const setFeaturedInfoDetails = () => {
  //   if(!accountNumber) {
  //     setBenificiaryErrorMsg('This Field is required')
  //   }
  //   if(!kycNumber) {
  //     setKycErrorMsg('This Field is required')
  //   }
  //   else if(accountNumber && kycNumber && provider && senderName){
  //     setBenificiaryErrorMsg('')
  //     setKycErrorMsg('')
  //     const options = {
  //       headers: {
  //         'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
  //         'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
  //         'actualdate': '2018-04-04 09:27:16',
  //         'origincountry': 'US'
  //       }
  //     }
  //     axios.post(`${apiUrl}/js/accounts-status`
  //       , {
  //         "instrument": 'mobile-wallet',
  //         "msisdn": `${accountNumber}`,
  //         "beneficiaryName": `${kycNumber}`,
  //         "provider": `${provider}`,
  //         "senderName": `${senderName}`
  //       },
  //       { headers: options.headers } 
  //     ).then((res) => {
  //       if(res.data.status === 'available') {
  //         setLei(res.data.lei)
  //         setStatus(res.data.status)
  //         setSubStatus(res.data.subStatus)
  //         setFeaturedInfo(true)
  //       } else {
  //         console.log("res.da",res.data)
  //         setErrorPopup(true)
  //         setErrorRes(res.data)
  //       }
  //     }).catch((err) => {
  //       setErrorPopup(true)
  //     })
  //   } else if(accountNumber && kycNumber && provider){
  //     setBenificiaryErrorMsg('')
  //     setKycErrorMsg('')
  //     const options = {
  //       headers: {
  //         'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
  //         'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
  //         'actualdate': '2018-04-04 09:27:16',
  //         'origincountry': 'US'
  //       }
  //     }
  //     axios.post(`${apiUrl}/js/accounts-status`
  //       , {
  //         "instrument": 'mobile-wallet',
  //         "msisdn": `${accountNumber}`,
  //         "beneficiaryName": `${kycNumber}`,
  //         "provider": `${provider}`,
  //       },
  //       { headers: options.headers } 
  //     ).then((res) => {
  //       if(res.data.status === 'available') {
  //         setLei(res.data.lei)
  //         setStatus(res.data.status)
  //         setSubStatus(res.data.subStatus)
  //         setFeaturedInfo(true)
  //       } else {
  //         console.log("res.da",res.data)
  //         setErrorPopup(true)
  //         setErrorRes(res.data)
  //       }
  //     }).catch((err) => {
  //       setErrorPopup(true)
  //     })
  //   } else if(accountNumber && kycNumber){
  //     setBenificiaryErrorMsg('')
  //     setKycErrorMsg('')
  //     const options = {
  //       headers: {
  //         'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
  //         'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
  //         'actualdate': '2018-04-04 09:27:16',
  //         'origincountry': 'US'
  //       }
  //     }
  //     axios.post(`${apiUrl}/js/accounts-status`
  //       , {
  //         "instrument": 'mobile-wallet',
  //         "msisdn": `${accountNumber}`,
  //         "beneficiaryName": `${kycNumber}`,
  //       },
  //       { headers: options.headers } 
  //     ).then((res) => {
  //       if(res.data.status === 'available') {
  //         setLei(res.data.lei)
  //         setStatus(res.data.status)
  //         setSubStatus(res.data.subStatus)
  //         setFeaturedInfo(true)
  //       } else {
  //         console.log("res.da",res.data)
  //         setErrorPopup(true)
  //         setErrorRes(res.data)
  //       }
  //     }).catch((err) => {
  //       setErrorPopup(true)
  //     })
  //   }
  // }

  const setFeaturedInfoDetails = () => {
    

      const options = {
        headers: {
          'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
          'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
          'actualdate': '2018-04-04 09:27:16',
          'origincountry': 'US',
          'environment': localStorage.getItem('environment')
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
        if(res.data.status === 'available') {
          setLei(res.data.lei)
          setStatus(res.data.status)
          setSubStatus(res.data.subStatus)
          setFeaturedInfo(true)
        } else {
          console.log("res.da",res.data)
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
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Mobile Account Status</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
             Beneficiary MSISDN with country code <span style={{color:'#ea5c57'}}>*</span>
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
            Full KYC name of the beneficiary <span style={{color:'#ea5c57'}}>*</span>
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
        </Stack>
      </Paper>
      <AccountStatusPopup
        featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        // network={network}
        kycNumber={kycNumber}
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
