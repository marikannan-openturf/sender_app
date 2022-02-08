import { OutlinedInput, Paper, Stack, Typography, TextField,Button } from '@mui/material';
import React,{useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionMobileStatusPopup from './TransactionMobileStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';

export default function PersonalMobile() {
  const [amount,setAmount] = useState('')
  const [currency,setCurrency] = useState('')
  const [mobileNumber,setMobileNumber] = useState('')
  const [kycName,setKycName] = useState('')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('')
  const [nationality,setNationality] = useState('')
  const [genter, setGenter] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [expDate, setExpDate] = useState('')
  const [mobile, setMobile] = useState('')
  const [fullName, setFullName] = useState('')
  const [senderAddress, setSenderAddress] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [accountKycName, setAccountKycName] = useState('')
  const [remitancePurpose, setRemitancePurpose] = useState('')
  const [quoteId, setQuoteId] = useState('')
  const [reciveCountry, setReciveCountry] = useState('')
  const [sourceFund, setSourceFund] = useState('')
  const [senderRelation, setSenderRelation] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)

  const CustomButtom = styled(Button)`
  &.Mui-disabled{
     opacity:0.5;
     background-color : #1976d2;
     color:white
  }`

  const CloseErrorPopup = () => {
    setErrorPopup(false)
  }

  const setFeaturedInfoClose = () => {
    setAmount('')
    setCurrency('')
    setNetwork('')
    setMobileNumber('')
    setKycName('')
    setDob('')
    setNationality('')
    setGenter('')
    setIdType('')
    setIdNumber('')
    setExpDate('')
    setMobile('')
    setFullName('')
    setSenderAddress('')
    setCountry('')
    setCity('')
    setAccountKycName('')
    setRemitancePurpose('')
    setQuoteId('')
    setReciveCountry('')
    setSourceFund('')
    setSenderRelation('')
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {
    setFeaturedInfo(true)
  }


  return (
    <>

      <Paper sx={{ p: 5 }}>
        <Stack spacing={4} justifyContent='space-between' direction='row'>

          <Stack spacing={4} width={450}>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Amount
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Amount' value={amount} onChange={({target}) => setAmount(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Currency
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Currency' value={currency} onChange={({target}) => setCurrency(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobileNumber} onChange={({target}) => setMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account KYC Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }}   placeholder='Account KYC Name' value={kycName} onChange={({target}) => setKycName(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
            <Typography color="#575757" fontWeight='500'>
            Mobile Network
              </Typography>
            <TextField
              sx={{width:205}}
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
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Nationality
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Nationality' value={nationality} onChange={({target}) => setNationality(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Date of Birth
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth'  value={dob} onChange={({target}) => setDob(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack><Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Type
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={idType} onChange={({target}) => setIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={idNumber} onChange={({target}) => setIdNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({target}) => setExpDate(target.value)} />
            </Stack>
          </Stack>


          <Stack spacing={4} width={450}>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobile} onChange={({target}) => setMobile(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({target}) => setFullName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Address
              </Typography>
              <TextField
              sx={{width:205}}
              label="Mobile Network"
              value={senderAddress}
              onChange={({ target }) => setSenderAddress(target.value)}
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
            </TextField>            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }}  placeholder='Country' value={country} onChange={({target}) => setCountry(target.value)} />
            </Stack> 
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='City' value={city} onChange={({target}) => setCity(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account KYC Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={accountKycName} onChange={({target}) => setAccountKycName(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' value={remitancePurpose} onChange={({target}) => setRemitancePurpose(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Quote ID
              </Typography>
              <OutlinedInput sx={{ height: 40 }}  placeholder='Quote ID' value={quoteId} onChange={({target}) => setQuoteId(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiving Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' value={reciveCountry} onChange={({target}) => setReciveCountry(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Source of Fund
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Source of Fund' value={sourceFund} onChange={({target}) => setSourceFund(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Relationship
              </Typography>
              <OutlinedInput sx={{ height: 40 }}  placeholder='Sender Relationship' value={senderRelation} onChange={({target}) => setSenderRelation(target.value)} />
            </Stack>
          </Stack>
        </Stack>

        <Stack alignItems='center' mt={5}>
        {amount && currency && mobileNumber && kycName && network && dob && nationality && genter && idType && expDate && idNumber && mobile && fullName && senderAddress && country && city && accountKycName && remitancePurpose && quoteId && reciveCountry && sourceFund && senderRelation ?
        <Button variant='contained' onClick={setFeaturedInfoDetails} >Submit</Button> :
        <CustomButtom variant='contained' disabled>Submit</CustomButtom> }

        </Stack>

      </Paper>
      <TransactionMobileStatusPopup
      featuredInfo={featuredInfo}
        amount={amount}
        currency={currency}
        network={network}
        kycName={kycName}
        setFeaturedInfoClose={setFeaturedInfoClose}
      />
      <ErrorPopup errorPopup={errorPopup}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
