import { OutlinedInput, Paper, Stack, Typography, TextField,Button } from '@mui/material';
import React,{useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionMobileStatusPopup from './TransactionMobileStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
const apiUrl = config.api.url

export default function PersonalMobile() {
  const [amount,setAmount] = useState('500')
  const [currency,setCurrency] = useState('INR')
  const [transactionType,setTransactionType] = useState('inttransfer')
  const [mobileNumber,setMobileNumber] = useState('+971810456234')
  const [accountNr,setAccountNr] = useState('50100002965304')
  const [kycName,setKycName] = useState('HDFC Bank')
  const [bankCode,setBankCode] = useState('HDFC0001626')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('1967-05-28')
  const [nationality,setNationality] = useState('AE')
  // const [genter, setGenter] = useState('')
  const [genderDetails, setGenderDetails] = useState('M')
  const [idType, setIdType] = useState('VOTER_CARD')
  const [idNumber, setIdNumber] = useState('13321115521')
  const [expDate, setExpDate] = useState('2067-05-28')
  const [mobile, setMobile] = useState('13321115521')
  const [fullName, setFullName] = useState('Test Sender2')
  const [senderAddress, setSenderAddress] = useState('')
  const [country, setCountry] = useState('US')
  const [city, setCity] = useState('Florida')
  const [accountKycName, setAccountKycName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [remitancePurpose, setRemitancePurpose] = useState('Business Travel')
  const [quoteId, setQuoteId] = useState('QR037C1NA6ZXBSQ88B')
  const [reciveCountry, setReciveCountry] = useState('IN')
  const [sourceFund, setSourceFund] = useState('Business Income')
  const [senderRelation, setSenderRelation] = useState('Employer')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)

  const CustomButtom = styled(Button)`
  &.Mui-disabled{
     opacity:0.5;
     background-color : #1976d2;
     color:white
  }`

  const CloseErrorPopup = () => {
    setAmount('500')
    setCurrency('INR')
    setNetwork('')
    setTransactionType('inttransfer')
    setMobileNumber('+971810456234')
    setKycName('HDFC Bank')
    setDob('1967-05-28')
    setNationality('AE')
    // setGenter('')
    setGenderDetails('M')
    setIdType('VOTER_CARD')
    setIdNumber('13321115521')
    setExpDate('2067-05-28')
    setMobile('13321115521')
    setFullName('Test Sender2')
    setSenderAddress('')
    setCountry('US')
    setCity('Florida')
    setAccountKycName('Oyugi Randy Electric Sale Pvt. Ltd.')
    setRemitancePurpose('Business Travel')
    setQuoteId('QR037C1NA6ZXBSQ88B')
    setReciveCountry('IN')
    setSourceFund('Business Income')
    setSenderRelation('Employer')
    setFeaturedInfo(false)
    setErrorPopup(false)
  }

  const setFeaturedInfoClose = () => {
    setAmount('500')
    setCurrency('INR')
    setNetwork('')
    setTransactionType('inttransfer')
    setMobileNumber('+971810456234')
    setKycName('HDFC Bank')
    setDob('1967-05-28')
    setNationality('AE')
    // setGenter('')
    setGenderDetails('M')
    setIdType('VOTER_CARD')
    setIdNumber('13321115521')
    setExpDate('2067-05-28')
    setMobile('13321115521')
    setFullName('Test Sender2')
    setSenderAddress('')
    setCountry('US')
    setCity('Florida')
    setAccountKycName('Oyugi Randy Electric Sale Pvt. Ltd.')
    setRemitancePurpose('Business Travel')
    setQuoteId('QR037C1NA6ZXBSQ88B')
    setReciveCountry('IN')
    setSourceFund('Business Income')
    setSenderRelation('Employer')
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {

    // setFeaturedInfo(true)
    const options = {
      headers: {
        'username': 'OpenTurfDev',
        'password': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/transaction`
      , {
        "amount": "500",
        "currency": "INR",
        "type": "inttransfer",
        "descriptionText": "Gift for my brother",
        "requestDate": "2021-05-23 08:19:36",
        "requestingOrganisationTransactionReference": "SrcTxnId002",
        "debitParty": [
          {
            "key": "msisdn",
            "value": "+971810456234"
          }
        ],
        "creditParty": [
          {
            "key": "bankaccountno",
            "value": "50100002965304"
          },
          {
            "key": "organisationid",
            "value": "HDFC Bank"
          },
          {
            "key": "sortcode",
            "value": "HDFC0001626"
          }
        ],
        "senderKyc": {
          "nationality": "AE",
          "dateOfBirth": "1967-05-28",
          "gender": "M",
          "idDocument": [
            {
              "idType": "VOTER_CARD",
              "idNumber": "13321115521",
              "issueDate": "1967-05-28",
              "expiryDate": "2067-05-28",
              "issuerCountry": "AE"
            }
          ],
          "postalAddress": {
            "addressLine1": "49 , park street",
            "addressLine2": "12",
            "addressLine3": "12",
            "city": "12",
            "stateProvince": "12",
            "postalCode": "50000",
            "country": "US"
          },
          "subjectName": {
            "firstName": "Test",
            "middleName": "",
            "lastName": "Sender2",
            "fullName": "Test Sender2"
          }
        },
        "recipientKyc": {
          "subjectName": {
            "firstName": "Deepa",
            "lastName": "Jain",
            "fullName": "Deepa Jain"
          }
        },
        "internationalTransferInformation": {
          "quoteId": "QR037C1NA6ZXBSQ88B",
          "receivingCountry": "IN",
          "remittancePurpose": "Family Maintainance",
          "sourceOfFunds": "Salary",
          "relationshipSender": "Brother"
        }
      },
      { headers: options.headers } 
    ).then((res) => {
      setFeaturedInfo(true)

    }).catch((err) => {
      setErrorPopup(true)
    })
  }

console.log("dasd0",new Date())
  return (
    <>

      <Paper sx={{ p: 5 }}>
        <Stack alignItems='center' sx={{pb:4}}>
        <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Personal Mobile Status</Typography>

          </Stack>
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
            Transaction Type
              </Typography>
            <TextField
              sx={{width:205}}
              label="Transaction Type"
              value={transactionType}
              onChange={({ target }) => setTransactionType(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="" >
              Transaction Type
              </MenuItem>
              <MenuItem value='inttransfer-wallet'>Wallet</MenuItem>
              <MenuItem value='inttransfer'>Bank</MenuItem>
              <MenuItem value='b2p'>B2P</MenuItem>
              <MenuItem value='b2b'>B2B</MenuItem>
              <MenuItem value='p2b'>P2B</MenuItem>

            </TextField>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Sender Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobileNumber} onChange={({target}) => setMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Beneficiary Bank Account 
              </Typography>
              <OutlinedInput sx={{ height: 40 }}   placeholder='Account no' value={accountNr} onChange={({target}) => setAccountNr(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Full name of beneficiary bank
              </Typography>
              <OutlinedInput sx={{ height: 40 }}   placeholder='Account KYC Name' value={kycName} onChange={({target}) => setKycName(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Bank Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }}   placeholder='Bank Code' value={bankCode} onChange={({target}) => setBankCode(target.value)}/>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
            <Typography color="#575757" fontWeight='500'>
           Gender
              </Typography>
            <TextField
              sx={{width:205}}
              label="Gender"
              value={genderDetails}
              onChange={({ target }) => setGenderDetails(target.value)}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value="" >
                Gender
              </MenuItem>
              <MenuItem value='M'>Male</MenuItem>
              <MenuItem value='F'>Female</MenuItem>
              {/* <MenuItem value='Jio'>Jio</MenuItem> */}
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
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
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
           
          </Stack>


          <Stack spacing={4} width={450}>
          <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({target}) => setExpDate(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Id Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobile} onChange={({target}) => setMobile(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({target}) => setFullName(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
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
            </TextField>            </Stack> */}
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
        {/* {amount && currency && mobileNumber && kycName && network && dob && nationality && genderDetails && idType && expDate && idNumber  && fullName  && country && city && accountKycName && remitancePurpose && quoteId && reciveCountry && sourceFund && senderRelation ? */}
        <Button variant='contained' onClick={setFeaturedInfoDetails} >Submit</Button> 
        {/* :
        <CustomButtom variant='contained' disabled>Submit</CustomButtom> } */}

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
