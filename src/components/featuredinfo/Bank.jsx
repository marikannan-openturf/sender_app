import { Button, Container, Dialog, DialogTitle, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountStatusPopup from './AccountStatusPopup'
import { CloseRounded } from '@mui/icons-material'
export default function Bank() {
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {
    setFeaturedInfo(true)
  }
  return (
    <>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <Typography py={5} textAlign='center' fontSize={24} fontFamily='Poppins-SemiBold' color="#404040">Bank Account Status</Typography>
        <Stack spacing={5} pl={10} direction='row' >
          <Stack spacing={8}>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Account Number of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Account KYC Number of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Bank name of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Bank code-IFSC/Routing Code/Swift BIC
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Account Mobile number of the beneficiary
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Country
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Provider
            </Typography>
            <Typography fontFamily='Poppins-SemiBold' color="#404040">
              Bank Subcode
            </Typography>
          </Stack>
          <Stack spacing={5}>
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <OutlinedInput sx={{ height: 40 }} />
            <Stack pb={5}>
              <Button sx={{ letterSpacing: 1, alignSelf: 'start' }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <AccountStatusPopup featuredInfo={featuredInfo} setFeaturedInfoClose={setFeaturedInfoClose} />
    </>
  )
}
