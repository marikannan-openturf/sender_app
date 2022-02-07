import './AccountStatusStyles.css'
import { Button,OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
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
  const [errorPopup, setErrorPopup] =useState(false)

  const CloseErrorPopup = () =>{
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
      <Paper sx={{ height: '100%', width: '100%' }}>
        <Typography py={5} textAlign='center' fontSize={20} variant='h6' color="#404040">Mobile Account Status</Typography>
        <Stack spacing={5} pl={10} direction='row' >
          <Stack spacing={8}>
            <Typography color="#404040">
              Account Number of the beneficiary
            </Typography>
            <Typography color="#404040">
              Account KYC Number of the beneficiary
            </Typography>
            <Typography color="#404040">
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
            <Stack pb={5} >
             {accountNumber && kycNumber && network 
             ?  <Button sx={{ letterSpacing: 1, alignSelf: 'start' }} onClick={setFeaturedInfoDetails} variant='contained'>Submit</Button>
             : <CustomButtom sx={{ letterSpacing: 1, alignSelf: 'start' }} onClick={setFeaturedInfoDetails} variant='contained' disabled>Submit</CustomButtom>
             }
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
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
