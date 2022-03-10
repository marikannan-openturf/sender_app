import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionBusinessMobileStatusPopup from './TransactionBusinessMobileStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
const apiUrl = config.api.url

export default function BusinessMobile() {
  const [amount, setAmount] = useState('500')
  const [currency, setCurrency] = useState('INR')
  const [payingCurrency, setPayingCurrency] = useState('USD')
  const [transactionType, setTransactionType] = useState('b2p')
  const [mobileNumber, setMobileNumber] = useState('+971810456234')
  const [reciverMobileNumber, setReciverMobileNumber] = useState('+9779840002320')
  const [beneficiarySmsNotify, setBenificiarySmsNotify] = useState('test sms')
  const [accountNr, setAccountNr] = useState('50100002965304')
  const [kycName, setKycName] = useState('HDFC Bank')
  const [bankCode, setBankCode] = useState('HDFC0001626')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('1967-05-28')
  const [nationality, setNationality] = useState('AE')
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
  // const [accountKycName, setAccountKycName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [remitancePurpose, setRemitancePurpose] = useState('Business Travel')
  const [quoteId, setQuoteId] = useState('QR037C1NA6ZXBSQ88B')
  const [reciveCountry, setReciveCountry] = useState('IN')
  const [sourceFund, setSourceFund] = useState('Business Income')
  const [senderRelation, setSenderRelation] = useState('Employer')
  const [address1, setAddress1] = useState('49 , park street')
  const [address2, setAddress2] = useState('12')
  const [stateProvince, setStateProvince] = useState('50000')
  const [postalCode, setPostalCode] = useState('12')
  const [descriptionText, setDescriptionText] = useState('Gift for my brother')
  const [providerCode, setProviderCode] = useState('23401')
  const [transactionRef, setTransactionRef] = useState('SrcTxnId003435435')
  const [issueDate, setIssueDate] = useState('1967-05-28')
  const [issuerCountry, setIssuerCountry] = useState('AE')
  const [recipientName, setRecipientName] = useState('Deepa')
  const [lastName, setLastName] = useState('Jain')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [sendAmount, setSendAmount] = useState('35500.00')
  const [paymentMode, setpaymentMode] = useState('cash')
  const [authenticationPartnerCode, setAuthenticationPartnerCode] = useState('4534')
  const [sendingPartnerCode, setSendingPartnerCode] = useState('343432223')
  const [receivingPartnerCode, setReceivingPartnerCode] = useState('343432223')
  const [businessName, setBusinessName] = useState('sample business')
  const [businessAddress1, setBusinessAddress1] = useState(`alton's road`)
  const [businessAddressCity, setBusinessAddressCity] = useState('Lyon')
  const [businessAddressCountryCode, setBusinessAddressCountryCode] = useState('US')
  const [businessPrimaryContactCountryCode, setBusinessPrimaryContactCountryCode] = useState('US')
  const [businessPrimaryContactNo, setBusinessPrimaryContactNo] = useState('3472034605')
  const [businessDescription, setBusinessDescription] = useState('Electronics')
  const [businessCountryCode, setBusinessCountryCode] = useState('US')
  const [businessRegistrationType, setBusinessRegistrationType] = useState('Private Limited Company')
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('23123456789')
  const [businessRegistrationIssueDate, setBusinessRegistrationIssueDate] = useState('2001-09-26')
  const [businessIDValidThru, setBusinessIDValidThru] = useState('2033-09-26')
  const [businessEmail, setBusinessEmail] = useState('test@testemail.com')
  const [errorRes, setErrorRes] = useState({})

  const CustomButtom = styled(Button)`
  &.Mui-disabled{
     opacity:0.5;
     background-color : #1976d2;
     color:white
  }`

  const CloseErrorPopup = () => {
    setFeaturedInfo(false)
    setErrorPopup(false)
  }

  const setFeaturedInfoClose = () => {
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {
    const options = {
      headers: {
        'username': localStorage.getItem('username') ? localStorage.getItem('username') : 'OpenTurfDev',
        'password': localStorage.getItem('password') ? localStorage.getItem('password') : '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/transaction`
      , {
        "amount": `${amount}`,
        "currency": `${currency}`,
        "type": `${transactionType}`,
        "descriptionText": `${descriptionText}`,
        "requestDate": "2021-05-23 08:19:36",
        "requestingOrganisationTransactionReference": `${transactionRef}`,
        "debitParty": [
          {
            "key": "msisdn",
            "value": `${mobileNumber}`
          }
        ],
        "creditParty": [
          {
            "key": "bankaccountno",
            "value": `${accountNr}`
          },
          {
            "key": "organisationid",
            "value": `${kycName}`
          },
          {
            "key": "sortcode",
            "value": `${bankCode}`
          }],
        "senderKyc": {},
        "recipientKyc": {
          "subjectName": {
            "firstName": `${recipientName}`,
            "lastName": `${lastName}`,
            "fullName": `${recipientName} ${lastName}`
          }
        },
        "sendingAmount": `${sendAmount}`,
        "payinCcyCode": `${payingCurrency}`,
        "paymentMode": `${paymentMode}`,
        "authenticationPartnerCode": `${authenticationPartnerCode}`,
        "paymentOption": "Mobile Wallet",
        "sendingPartnerCode": `${sendingPartnerCode}`,
        "receivingPartnerCode": `${receivingPartnerCode}`,
        "business": {
          "senderKyc": {
            "businessName": `${businessName}`,
            "businessAddress1": `${businessAddress1}`,
            "businessAddressCity": `${businessAddressCity}`,
            "businessAddressCountryCode": `${businessAddressCountryCode}`,
            "businessPrimaryContactCountryCode": `${businessPrimaryContactCountryCode}`,
            "businessPrimaryContactNo": `${businessPrimaryContactNo}`,
            "businessDescription": `${businessDescription}`,
            "businessCountryCode": `${businessCountryCode}`,
            "businessRegistrationType": `${businessRegistrationType}`,
            "businessRegistrationNumber": `${businessRegistrationNumber}`,
            "businessRegistrationIssueDate": `${businessRegistrationIssueDate}`,
            "businessIDValidThru": `${businessIDValidThru}`,
            "businessEmail": `${businessEmail}`
          },
          "recepientKyc": {}
        },
        "internationalTransferInformation": {
          "quoteId": `${quoteId}`,
          "receivingCountry": `${reciveCountry}`,
          "remittancePurpose": `${remitancePurpose}`,
          "sourceOfFunds": `${sourceFund}`,
          "relationshipSender": `${senderRelation}`
        }
      },
      { headers: options.headers }
    ).then((res) => {
      setFeaturedInfo(true)

    }).catch((err) => {
      setErrorPopup(true)
    })
  }
  return (
    <>

      <Paper sx={{ p: 5 }}>
        <Stack alignItems='center' sx={{ pb: 4 }}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Business Mobile Status</Typography>

        </Stack>
        <Stack spacing={4} justifyContent='space-between' direction='row'>

          <Stack spacing={4} width={450}>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Amount
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Amount' value={amount} onChange={({ target }) => setAmount(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Currency
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Currency' value={currency} onChange={({ target }) => setCurrency(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Type
              </Typography>
              <TextField
                sx={{ width: 205 }}
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
                {/* <MenuItem value='inttransfer-wallet'>Wallet</MenuItem>
              <MenuItem value='inttransfer'>Bank</MenuItem> */}
                <MenuItem value='b2b'>B2B</MenuItem>
                <MenuItem value='b2p'>B2P</MenuItem>
                <MenuItem value='p2b'>P2B</MenuItem>

              </TextField>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={descriptionText} onChange={({ target }) => setDescriptionText(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Reference
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' value={transactionRef} onChange={({ target }) => setTransactionRef(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Provider Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Provider Code' value={providerCode} onChange={({ target }) => setProviderCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sending Amount
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Sending Amount' value={sendAmount} onChange={({ target }) => setSendAmount(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Paying Currency Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' value={payingCurrency} onChange={({ target }) => setPayingCurrency(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Payment Mode
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' value={paymentMode} onChange={({ target }) => setpaymentMode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' value={authenticationPartnerCode} onChange={({ target }) => setAuthenticationPartnerCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Send Partner Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Send Partner Code' value={sendingPartnerCode} onChange={({ target }) => setSendingPartnerCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receive Partner Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Receive Partner Code' value={receivingPartnerCode} onChange={({ target }) => setReceivingPartnerCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobileNumber} onChange={({ target }) => setMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={reciverMobileNumber} onChange={({ target }) => setReciverMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                SMS Notification
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='SMS Notification' value={beneficiarySmsNotify} onChange={({ target }) => setBenificiarySmsNotify(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Reciver Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={reciverMobileNumber} onChange={({ target }) => setReciverMobileNumber(target.value)} />
            </Stack>  */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Beneficiary Bank Account No
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account no' value={accountNr} onChange={({ target }) => setAccountNr(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Bank Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' value={bankCode} onChange={({ target }) => setBankCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full name of beneficiary bank
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={kycName} onChange={({ target }) => setKycName(target.value)} />
            </Stack>

            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <TextField
                sx={{ width: 205 }}
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
              </TextField>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business-Name' value={businessName} onChange={({ target }) => setBusinessName(target.value)} />
            </Stack>


            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Type
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={idType} onChange={({ target }) => setIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={idNumber} onChange={({ target }) => setIdNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issue Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={issueDate} onChange={({ target }) => setIssueDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({ target }) => setExpDate(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issuer Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' value={issuerCountry} onChange={({ target }) => setIssuerCountry(target.value)} />
            </Stack> */}
          </Stack>


          <Stack spacing={4} width={450}>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Address1' value={businessAddress1} onChange={({ target }) => setBusinessAddress1(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' value={businessAddressCity} onChange={({ target }) => setBusinessAddressCity(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder=' Business Address Country' value={businessAddressCountryCode} onChange={({ target }) => setBusinessAddressCountryCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Contact Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Code' value={businessPrimaryContactCountryCode} onChange={({ target }) => setBusinessPrimaryContactCountryCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Contact Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Number' value={businessPrimaryContactNo} onChange={({ target }) => setBusinessPrimaryContactNo(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' value={businessDescription} onChange={({ target }) => setBusinessDescription(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' value={businessCountryCode} onChange={({ target }) => setBusinessCountryCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Registration Type
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Type' value={businessRegistrationType} onChange={({ target }) => setBusinessRegistrationType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Registration Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Number' value={businessRegistrationNumber} onChange={({ target }) => setBusinessRegistrationNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Registration Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Date' value={businessRegistrationIssueDate} onChange={({ target }) => setBusinessRegistrationIssueDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Valid ID
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business ID Valid' value={businessIDValidThru} onChange={({ target }) => setBusinessIDValidThru(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Email
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' value={businessEmail} onChange={({ target }) => setBusinessEmail(target.value)} />
            </Stack>



            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Id Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobile} onChange={({ target }) => setMobile(target.value)} />
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({ target }) => setFullName(target.value)} />
            </Stack> */}
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
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Address Line1
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 1' value={address1} onChange={({ target }) => setAddress1(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Address Line2
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 2' value={address2} onChange={({ target }) => setAddress2(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='City' value={city} onChange={({ target }) => setCity(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                State Province
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='State Province' value={stateProvince} onChange={({ target }) => setStateProvince(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Postal Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' value={postalCode} onChange={({ target }) => setPostalCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Country' value={country} onChange={({ target }) => setCountry(target.value)} />
            </Stack> */}

            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account KYC Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={accountKycName} onChange={({target}) => setAccountKycName(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' value={remitancePurpose} onChange={({ target }) => setRemitancePurpose(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                First Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Recipient Name' value={recipientName} onChange={({ target }) => setRecipientName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Last Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Recipient Name' value={lastName} onChange={({ target }) => setLastName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Quote ID
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Quote ID' value={quoteId} onChange={({ target }) => setQuoteId(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiving Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' value={reciveCountry} onChange={({ target }) => setReciveCountry(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Source of Fund
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Source of Fund' value={sourceFund} onChange={({ target }) => setSourceFund(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Relationship
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Sender Relationship' value={senderRelation} onChange={({ target }) => setSenderRelation(target.value)} />
            </Stack>
          </Stack>
        </Stack>

        <Stack alignItems='center' mt={5}>
          {amount && 
          currency && 
          remitancePurpose && 
          quoteId && 
          reciveCountry && 
          businessRegistrationType && 
          businessAddressCountryCode && 
          businessDescription && 
          businessAddress1 && 
          businessAddressCity && 
          businessAddressCountryCode && 
          businessCountryCode && 
          businessPrimaryContactNo && 
          businessIDValidThru && 
          sourceFund && 
          senderRelation 
          ?
            <Button variant='contained' onClick={setFeaturedInfoDetails} >Submits</Button>
            :
            <CustomButtom variant='contained' disabled>Submit</CustomButtom>}

        </Stack>

      </Paper>
      <TransactionBusinessMobileStatusPopup
        featuredInfo={featuredInfo}
        amount={amount}
        currency={currency}
        transactionType={transactionType}
        mobileNumber={mobileNumber}
        businessName={businessName}
        businessEmail={businessEmail}
        businessRegistrationType={businessRegistrationType}
        descriptionText={descriptionText}
        setFeaturedInfoClose={setFeaturedInfoClose}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
