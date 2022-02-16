import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';
import axios from 'axios'
import { config } from '../../assets/config/config';

const apiUrl = config.api.url

export default function Mobile() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [kycNumber, setKycNumber] = useState('')
  const [network, setNetwork] = useState('')
  const [status, setStatus] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [lei, setLei] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)

  const CloseErrorPopup = () => {
    setErrorPopup(false)
    setAccountNumber('')
    setKycNumber('')
    setNetwork('')
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    setAccountNumber('')
    setKycNumber('')
    setNetwork('')
  }

  const setFeaturedInfoDetails = () => {
    const options = {
      headers: {
        'username': 'OpenTurfDev',
        'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/accounts-status`
      , {
        "instrument": `${network}`,
        "msisdn": `${accountNumber}`,
        "beneficiaryName": `${kycNumber}`
    },
      { headers: options.headers } 
    ).then((res) => {
      console.log("res",res.data)
      if(res.data.status === 'available') {
        setLei(res.data.lei)
        setStatus(res.data.status)
        setSubStatus(res.data.subStatus)
        setFeaturedInfo(true)
      } else {
        setErrorPopup(true)
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
             Beneficiary MSISDN with country code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full KYC name of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Full KYC name' onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
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
          </Stack>
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {accountNumber && kycNumber && network
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      </Paper>
      <AccountStatusPopup
        featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        network={network}
        kycNumber={kycNumber}
        setFeaturedInfoClose={setFeaturedInfoClose}
        lei={lei}
        status={status}
        subStatus={subStatus}
      />
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
