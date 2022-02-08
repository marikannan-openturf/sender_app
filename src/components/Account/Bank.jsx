import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import MenuItem from '@mui/material/MenuItem';
import ErrorPopup from '../../pages/ErrorPopup';
import { styled } from '@mui/system'

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
  const [errorPopup, setErrorPopup] =useState(false)
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

  const setFeaturedInfoDetails = () => {
    if(accountNumber && kycNumber && bankCode){
      setFeaturedInfo(true)
      setErrorPopup(false)
    } else {
      setFeaturedInfo(false)
      setAccountNumber('')
      setKycNumber('')
      setBankCode('')
      setMobileNumber('')
      setCountry('')
      setProvider('')
      setSubCode('')
      setNetwork('')
      setErrorPopup(true)
    }
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
              : <CustomButtom sx={{ letterSpacing: 1}} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
            }
          </Stack>
        </Stack>
      </Paper>
      <AccountStatusPopup featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        network={network}
        kycNumber={kycNumber}
        setFeaturedInfoClose={setFeaturedInfoClose} />
        <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
