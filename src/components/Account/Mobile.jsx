import { Button, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ErrorPopup from '../../pages/ErrorPopup';


export default function Mobile() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [kycNumber, setKycNumber] = useState('')
  const [network, setNetwork] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)

  const CloseErrorPopup = () => {
    setErrorPopup(false)
  }

  const setFeaturedInfoClose = () => {
    setAccountNumber('')
    setKycNumber('')
    setNetwork('')
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {
    setFeaturedInfo(true)
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
              Account Number of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Account Number' onChange={({ target }) => setAccountNumber(target.value)} value={accountNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Account KYC Number of the beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='KYC Name' onChange={({ target }) => setKycNumber(target.value)} value={kycNumber} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Mobile network of the beneficiary
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
          <Stack direction='row'>
            <div style={{ width: '400px' }}>
            </div>
            {accountNumber && kycNumber && network
              ? <Button sx={{ letterSpacing: 1 }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
              : <CustomButtom sx={{ letterSpacing: 1}} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
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
      />
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
