import './featuredInfo.css'
import { Button, Container, Dialog, DialogTitle, FormControl, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import { CloseRounded } from '@mui/icons-material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Mobile() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [kycNumber, setKycNumber] = useState('')
  const [network, setNetwork] = useState('')

  const setFeaturedInfoClose = () => {
    setAccountNumber('')
    setKycNumber('')
    setNetwork('')
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {
    setFeaturedInfo(true)
  }

  return (
    <>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <Typography py={5} textAlign='center' fontSize={24} fontFamily='Poppins-SemiBold' color="#404040">Mobile Account Status</Typography>
        <Stack spacing={5} pl={10} direction='row' >
          <Stack spacing={8}>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Account Number of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Account KYC Number of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Mobile network of the beneficiary
            </Typography>
          </Stack>
          <Stack spacing={5}>

            <OutlinedInput sx={{ height: 40 }} placeholder='Account Number' onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
            <OutlinedInput sx={{ height: 40 }} placeholder='KYC Name' onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />


            <TextField
              label="Mobile Network"
              value={network}
              onChange={({ target }) => setNetwork(target.value)}
              select
            >
              <MenuItem value="">
                Mobile Network
              </MenuItem>
              <MenuItem value='Airtel'>Airtel</MenuItem>
              <MenuItem value='Vodafone'>Vodafone</MenuItem>
              <MenuItem value='Jio'>Jio</MenuItem>
            </TextField>
            <Stack pb={5}>
              <Button sx={{ letterSpacing: 1, alignSelf: 'start' }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>

            </Stack>
          </Stack>

        </Stack>




      </Paper>
      <AccountStatusPopup
        featuredInfo={featuredInfo}
        accountNumber={accountNumber}
        network={network}
        kycNumber={kycNumber}
        setFeaturedInfoClose={setFeaturedInfoClose}
      />
    </>
  )
}
