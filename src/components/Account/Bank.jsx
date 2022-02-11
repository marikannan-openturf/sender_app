import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusBankPopup from './AccountStatusBankPopup'
import MenuItem from '@mui/material/MenuItem';
import ErrorPopup from '../../pages/ErrorPopup';
import { styled } from '@mui/system'
import axios from 'axios'
import { config } from '../../assets/config/config';

const apiUrl = config.api.url
export default function Bank() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [kycNumber, setKycNumber] = useState('')
  const [bankCode, setBankCode] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [country, setCountry] = useState('')
  const [provider, setProvider] = useState('')
  const [subCode, setSubCode] = useState('')
  const [network, setNetwork] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
    setAccountNumber('')
    setKycNumber('')
    setBankCode('')
    setMobileNumber('')
    setCountry('')
    setProvider('')
    setSubCode('')
    setNetwork('')
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
          'username': 'OpenTurfDev',
          'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
          'actualdate': '2018-04-04 09:27:16',
          'origincountry': 'US'
        }
      }
      axios.post(`${apiUrl}/js/accounts-status`
        , {
          "instrument": "bank-account",
          "accountId": "50100002965304",
          "bankName": "HDFC Bank",
          "countryCode": "IN",
          "beneficiaryName": "Deepa Jain",
          "bankCode": "HDFC0001626"
      },
        { headers: options.headers } 
      ).then((res) => {
        if(res.data.error) {
          setErrorPopup(true)
          setFeaturedInfo(false)
        } else {
          setFeaturedInfo(true)
          setErrorPopup(false)
        }
      }).catch((err) => {
        setErrorPopup(true)
        setFeaturedInfo(false)
      })
    }

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography textAlign='center' pt={2} fontSize={20} variant='h6' color="#404040">Bank Account Status</Typography>
        <Stack width={600} spacing={5} sx={{ p: 4 }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account Number of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account KYC Number of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank name of the beneficiary
            </Typography>
            <TextField
              sx={{ width: 205 }}
              label="Mobile Network"
              value={network}
              onChange={({ target }) => setNetwork(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="" >
                Mobile Network
              </MenuItem>
              <MenuItem value='Airtel'>Airtel</MenuItem>
              <MenuItem value='Vodafone'>Vodafone</MenuItem>
              <MenuItem value='Jio'>Jio</MenuItem>
            </TextField>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank code-IFSC/Routing Code/Swift BIC
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setBankCode(target.value)} value={bankCode} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account Mobile number of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setMobileNumber(target.value)} value={mobileNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setCountry(target.value)} value={country} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Provider
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setProvider(target.value)} value={provider} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Bank Subcode
            </Typography>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setSubCode(target.value)} value={subCode} />
          </Stack>
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {accountNumber && kycNumber && network && bankCode && mobileNumber && country && provider
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      </Paper>
      <AccountStatusBankPopup featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        network={network}
        kycNumber={kycNumber}
        bankCode={bankCode}
        mobileNumber={mobileNumber}
        country={country}
        provider={provider}
        subCode={subCode}
        setFeaturedInfoClose={setFeaturedInfoClose} />
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
