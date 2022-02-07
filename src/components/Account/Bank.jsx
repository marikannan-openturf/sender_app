import { Button, Container, Dialog, DialogTitle, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import { CloseRounded } from '@mui/icons-material'
import MenuItem from '@mui/material/MenuItem';

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
    setFeaturedInfo(true)
  }
  return (
    <>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <Typography py={5} textAlign='center' fontSize={20} variant='h6' color="#404040">Bank Account Status</Typography>
        <Stack spacing={5} pl={10} direction='row' >
          <Stack spacing={8}>
            <Typography color="#404040">
              Account Number of the beneficiary
            </Typography>
            <Typography color="#404040">
              Account KYC Number of the beneficiary
            </Typography>
            <Typography color="#404040">
              Bank name of the beneficiary
            </Typography>
            <Typography color="#404040">
              Bank code-IFSC/Routing Code/Swift BIC
            </Typography>
            <Typography  color="#404040">
              Account Mobile number of the beneficiary
            </Typography>
            <Typography color="#404040">
              Country
            </Typography>
            <Typography color="#404040">
              Provider
            </Typography>
            <Typography color="#404040">
              Bank Subcode
            </Typography>
          </Stack>
          <Stack spacing={5}>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
            <TextField
              label="Mobile Network"
              value={network}
              onChange={({ target }) => setNetwork(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="">
                <en>Mobile Network</en>
              </MenuItem>
              <MenuItem value='Airtel'>Airtel</MenuItem>
              <MenuItem value='Vodafone'>Vodafone</MenuItem>
              <MenuItem value='Jio'>Jio</MenuItem>
            </TextField>
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setBankCode(target.value)} value={bankCode} />
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setMobileNumber(target.value)} value={mobileNumber} />
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setCountry(target.value)} value={country} />
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setProvider(target.value)} value={provider} />
            <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => setSubCode(target.value)} value={subCode} />
            <Stack pb={5}>
              <Button sx={{ letterSpacing: 1, alignSelf: 'start' }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <AccountStatusPopup featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        network={network}
        kycNumber={kycNumber}
        setFeaturedInfoClose={setFeaturedInfoClose} />
    </>
  )
}
