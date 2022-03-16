import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionMobileStatusPopup from './TransactionMobileStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { purposeTransaction } from '../../../Utils/purpose_transaction'
import { sourceFundList } from '../../../Utils/sourceFund'
import { relationship } from '../../../Utils/relationship'
import { requestBodyData } from '../../../Utils/common';
const apiUrl = config.api.url

export default function PersonalMobile() {
  const [amount, setAmount] = useState('100000')
  const [currency, setCurrency] = useState('NGN')
  const [transactionType, setTransactionType] = useState('inttransfer')
  const [mobileNumber, setMobileNumber] = useState('+33472034605')
  const [reciverMobileNumber, setReciverMobileNumber] = useState('+23410706056')
  const [accountNr, setAccountNr] = useState('')
  const [kycName, setKycName] = useState('')
  const [bankCode, setBankCode] = useState('')
  const [branchCode, setBranchCode] = useState('')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('1986-06-28')
  const [receiverDob, setReceiverDob] = useState('1967-05-28')
  const [nationality, setNationality] = useState('FR')
  const [receiverNationality, setReceiverNationality] = useState('FR')
  // const [genter, setGenter] = useState('')
  const [genderDetails, setGenderDetails] = useState('M')
  const [idType, setIdType] = useState('nationalidcard')
  const [receiveridType, setReceiverIdType] = useState('nationalidcard')
  const [idNumber, setIdNumber] = useState('13321115521')
  const [receiveridNumber, setReceiverIdNumber] = useState('123456789')
  const [expDate, setExpDate] = useState('2033-09-26')
  const [receiverExpDate, setReceiverExpDate] = useState('2033-09-26')
  const [mobile, setMobile] = useState('13321115521')
  const [fullName, setFullName] = useState('Test Sender2')
  const [senderAddress, setSenderAddress] = useState('')
  const [country, setCountry] = useState('FR')
  const [receiverCountry, setReceiverCountry] = useState('FR')
  const [city, setCity] = useState('Lyon')
  const [receivercity, setReceiverCity] = useState('Lyon')
  // const [accountKycName, setAccountKycName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [remitancePurpose, setRemitancePurpose] = useState('Gift')
  const [quoteId, setQuoteId] = useState('QR037C1NA6ZXBSQ88B')
  const [reciveCountry, setReciveCountry] = useState('NP')
  const [sourceFund, setSourceFund] = useState('Salary')
  const [senderRelation, setSenderRelation] = useState('Brother')
  const [address1, setAddress1] = useState('49')
  const [receiverAddress1, setReceiverAddress1] = useState('49')
  const [address2, setAddress2] = useState('park street')
  const [address3, setAddress3] = useState('waltons road')
  const [receiverAddress2, setReceiverAddress2] = useState('park street')
  const [receiverAddress3, setReceiverAddress3] = useState('walton`s road')
  const [stateProvince, setStateProvince] = useState('Lyon')
  const [receiverStateProvince, setReceiverStateProvince] = useState('Lyon')
  const [postalCode, setPostalCode] = useState('123456')
  const [receiverPostalCode, setReceiverPostalCode] = useState('123456')
  const [descriptionText, setDescriptionText] = useState('Gift for my brother')
  const [transactionRef, setTransactionRef] = useState('partnerRefId1234')
  const [issueDate, setIssueDate] = useState('2003-09-26')
  const [receiverIssueDate, setReceiverIssueDate] = useState('2003-09-26')
  const [issuerCountry, setIssuerCountry] = useState('FR')
  const [receiverIssuerCountry, setReceiverIssuerCountry] = useState('AE')
  const [recipientName, setRecipientName] = useState('David Robinson')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  const [providerCode, setProviderCode] = useState('23401')
  const [title, setTitle] = useState('')
  const [receiverTitle, setReceiverTitle] = useState('Mr.')
  const [firstName, setFirstname] = useState('Einstein')
  const [receiverFirstName, setReceiverFirstname] = useState('Einstein')
  const [middleName, setMiddleName] = useState('James')
  const [receiverMiddleName, setReceiverMiddleName] = useState('Einstein')
  const [lastName, setLastName] = useState('Bela')
  const [receiverLastName, setReceiverLastName] = useState('Einstein')

  const CustomButtom = styled(Button)`
  &.Mui-disabled{
     opacity:0.5;
     background-color : #1976d2;
     color:white
  }`

  const CloseErrorPopup = () => {
    /* setAmount('500')
    setCurrency('INR')
    setNetwork('')
    setTransactionType('inttransfer')
    setMobileNumber('+971810456234')
    setKycName('HDFC Bank')
    setDob('1967-05-28')
    setNationality('AE') */
    // setGenter('')
    /* setGenderDetails('M')
    setIdType('VOTER_CARD')
    setIdNumber('13321115521')
    setExpDate('2067-05-28')
    setMobile('13321115521')
    setFullName('Test Sender2')
    setSenderAddress('')
    setCountry('US')
    setCity('Florida') */
    // setAccountKycName('Oyugi Randy Electric Sale Pvt. Ltd.')
    /* setRemitancePurpose('Gift')
    setQuoteId('QR037C1NA6ZXBSQ88B')
    setReciveCountry('IN')
    setSourceFund('Business Income')
    setSenderRelation('Employer')
    setReciverMobileNumber('+9779840002320')
    setAddress1('49 , park street')
    setAddress2('park main street')
    setStateProvince('12')
    setPostalCode('60000')
    setDescriptionText('Gift for my brother')
    setTransactionRef('SrcTxnId001')
    setIssueDate('1967-05-28')
    setIssuerCountry('AE')
    setRecipientName('David Robinson') */
    setFeaturedInfo(false)
    setErrorPopup(false)
  }

  const setFeaturedInfoClose = () => {
    /* setAmount('500')
    setCurrency('INR')
    setNetwork('')
    setTransactionType('inttransfer')
    setMobileNumber('+971810456234')
    setKycName('HDFC Bank')
    setDob('1967-05-28')
    setNationality('AE') */
    // setGenter('')
    /* setGenderDetails('M')
    setIdType('VOTER_CARD')
    setIdNumber('13321115521')
    setExpDate('2067-05-28')
    setMobile('13321115521')
    setFullName('Test Sender2')
    setSenderAddress('')
    setCountry('US')
    setCity('Florida') */
    // setAccountKycName('Oyugi Randy Electric Sale Pvt. Ltd.')
    /* setRemitancePurpose('Gift')
    setQuoteId('QR037C1NA6ZXBSQ88B')
    setReciveCountry('IN')
    setSourceFund('Salary')
    setSenderRelation('Employer')
    setReciverMobileNumber('+9779840002320')
    setAddress1('49 , park street')
    setAddress2('park main street')
    setStateProvince('12')
    setPostalCode('60000')
    setDescriptionText('Gift for my brother')
    setTransactionRef('SrcTxnId001')
    setIssueDate('1967-05-28')
    setIssuerCountry('AE')
    setRecipientName('David Robinson') */
    setFeaturedInfo(false)
  }

  const setFeaturedInfoDetails = () => {

    // setFeaturedInfo(true)
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername'),
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword'),
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US',
        'environment': localStorage.getItem('environment')
      }
    }
    // const requestBody = requestBodyData(requestBodyDataInfo)
    axios.post(`${apiUrl}/js/transaction`
      , {
        "amount": `${amount}`,
        "currency": `${currency}`,
        "type": "inttransfer",
        "descriptionText": `${descriptionText}`,
        "requestDate": new Date().toLocaleString("sv-SE"),
        "requestingOrganisationTransactionReference": `${transactionRef}`,
        "provider": `${providerCode}`,
        "debitParty": [
          {
            "key": "msisdn",
            "value": `${mobileNumber}`
          }
        ],
        "creditParty": [
          {
            "key": "msisdn",
            "value": `${reciverMobileNumber}`
          }
        ],
        "senderKyc": {
          "nationality": `${nationality}`,
          "dateOfBirth": `${dob}`,
          "gender": `${genderDetails}`,
          "idDocument": [
            {
              "idType": `${idType}`,
              "idNumber": `${idNumber}`,
              "issueDate": `${issueDate}`,
              "expiryDate": `${expDate}`,
              "issuerCountry": `${issuerCountry}`
            }
          ],
          "postalAddress": {
            "addressLine1": `${address1}`,
            "addressLine2": `${address2}`,
            "addressLine3": `${address3}`,
            "city": `${city}`,
            "stateProvince": `${stateProvince}`,
            "postalCode": `${postalCode}`,
            "country": `${country}`
          },
          "subjectName": {
            "title": `${title}`,
            "firstName": `${firstName}`,
            "middleName": `${middleName}`,
            "lastName": `${lastName}`,
            "fullName": `${firstName} ${middleName} ${lastName}`
          }
        },
        "recipientKyc": {
          "nationality": `${receiverNationality}`,
          "dateOfBirth": `${receiverDob}`,
          "idDocument": [
            {
              "idType": `${receiveridType}`,
              "idNumber": `${receiveridNumber}`,
              "issueDate": `${receiverIssueDate}`,
              "expiryDate": `${receiverExpDate}`,
              "issuerCountry": `${receiverIssuerCountry}`
            }
          ],
          "postalAddress": {
            "addressLine1": `${receiverAddress1}`,
            "addressLine2": `${receiverAddress2}`,
            "addressLine3": `${receiverAddress3}`,
            "city": `${receivercity}`,
            "stateProvince": `${receiverStateProvince}`,
            "postalCode": `${receiverPostalCode}`,
            "country": `${receiverCountry}`
          },
          "subjectName": {
            "title": `${receiverTitle}`,
            "firstName": `${receiverFirstName}`,
            "middleName": `${receiverMiddleName}`,
            "lastName": `${receiverLastName}`,
            "fullName": `${receiverFirstName} ${receiverMiddleName} ${receiverLastName} `
          }
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
      console.log("res", res.data)
      setFeaturedInfo(true)

    })
      .catch((err) => {
        console.log("CATCH", err.response.data)
        setErrorRes(err.response.data)
        setErrorPopup(true)
      })
  }

  return (
    <>

      <Paper sx={{ p: 5 }}>
        <Stack alignItems='center' sx={{ pb: 4 }}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Personal Mobile Status</Typography>

        </Stack>
        <Stack spacing={4} justifyContent='space-between' direction='row'>

          <Stack spacing={4} width={450}>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Amount <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Amount' value={amount} onChange={({ target }) => setAmount(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Currency <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Currency"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Currency' value={currency} onChange={({ target }) => setCurrency(target.value)} /> */}
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
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
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Mobile Number <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobileNumber} onChange={({ target }) => setMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Mobile Number <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={reciverMobileNumber} onChange={({ target }) => setReciverMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Beneficiary Bank Account
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account no' value={accountNr} onChange={({ target }) => setAccountNr(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full name of beneficiary bank
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={kycName} onChange={({ target }) => setKycName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Bank Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' value={bankCode} onChange={({ target }) => setBankCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Branch Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Branch Code' value={branchCode} onChange={({ target }) => setBranchCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Gender
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
                <MenuItem value='U'>Unspecified</MenuItem>
              </TextField>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Nationality <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Nationality"
                value={nationality}
                onChange={({ target }) => setNationality(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Nationality' value={nationality} onChange={({ target }) => setNationality(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Date of Birth <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth' value={dob} onChange={({ target }) => setDob(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={descriptionText} onChange={({ target }) => setDescriptionText(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Reference <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' value={transactionRef} onChange={({ target }) => setTransactionRef(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Provider
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Provider' value={providerCode} onChange={({ target }) => providerCode(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender ID Type <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={idType} onChange={({ target }) => setIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender ID Number <span style={{color:'#ea5c57'}}>*</span>
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
                Expiry Date <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({ target }) => setExpDate(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issuer Country
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Issuer Country"
                value={issuerCountry}
                onChange={({ target }) => setIssuerCountry(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' value={issuerCountry} onChange={({ target }) => setIssuerCountry(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={title} onChange={({ target }) => setTitle(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender First Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='First Name' value={firstName} onChange={({ target }) => setFirstname(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Middle Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Middle Name' value={middleName} onChange={({ target }) => setMiddleName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Last Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' value={lastName} onChange={({ target }) => setLastName(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({ target }) => setFullName(target.value)} />
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Address Line1 <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 1' value={address1} onChange={({ target }) => setAddress1(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Address Line2
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 2' value={address2} onChange={({ target }) => setAddress2(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Address Line3
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 3' value={address3} onChange={({ target }) => setAddress3(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender City <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='City' value={city} onChange={({ target }) => setCity(target.value)} />
            </Stack>

          </Stack>


          <Stack spacing={4} width={450}>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Id Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobile} onChange={({ target }) => setMobile(target.value)} />
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Gender
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
                Sender State Province
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='State Province' value={stateProvince} onChange={({ target }) => setStateProvince(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender  Postal Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' value={postalCode} onChange={({ target }) => setPostalCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender  Country <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Sender Country"
                value={country}
                onChange={({ target }) => setCountry(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Country' value={country} onChange={({ target }) => setCountry(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Nationality
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Receiver Nationality"
                value={receiverNationality}
                onChange={({ target }) => setReceiverNationality(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Nationality' value={receiverNationality} onChange={({ target }) => setReceiverNationality(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Date of Birth
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth' value={receiverDob} onChange={({ target }) => setReceiverDob(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={descriptionText} onChange={({ target }) => setDescriptionText(target.value)} />
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Reference
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' value={transactionRef} onChange={({ target }) => setTransactionRef(target.value)} />
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Provider
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Provider' value={providerCode} onChange={({ target }) => providerCode(target.value)} />
            </Stack> */}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Type
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={receiveridType} onChange={({ target }) => setReceiverIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={receiveridNumber} onChange={({ target }) => setReceiverIdNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issue Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={receiverIssueDate} onChange={({ target }) => setReceiverIssueDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={receiverExpDate} onChange={({ target }) => setReceiverExpDate(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issuer Country
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Receiver Issuer Country"
                value={receiverIssuerCountry}
                onChange={({ target }) => setReceiverIssuerCountry(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' value={receiverIssuerCountry} onChange={({ target }) => setReceiverIssuerCountry(target.value)} /> */}
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
                Receiver Address Line1
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 1' value={receiverAddress1} onChange={({ target }) => setReceiverAddress1(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Address Line2
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 2' value={receiverAddress2} onChange={({ target }) => setReceiverAddress2(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Address Line3
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 3' value={receiverAddress3} onChange={({ target }) => setReceiverAddress3(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='City' value={receivercity} onChange={({ target }) => setReceiverCity(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver State Province
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='State Province' value={receiverStateProvince} onChange={({ target }) => setReceiverStateProvince(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver  Postal Code
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' value={receiverPostalCode} onChange={({ target }) => setReceiverPostalCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Country
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Receiver Country"
                value={receiverCountry}
                onChange={({ target }) => setReceiverCountry(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Country' value={receiverCountry} onChange={({ target }) => setReceiverCountry(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver  Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={receiverTitle} onChange={({ target }) => setReceiverTitle(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver First Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='First Name' value={receiverFirstName} onChange={({ target }) => setReceiverFirstname(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Middle Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Middle Name' value={receiverMiddleName} onChange={({ target }) => setReceiverMiddleName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Last Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' value={receiverLastName} onChange={({ target }) => setReceiverLastName(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({ target }) => setFullName(target.value)} />
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
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Remittance Purpose"
                value={remitancePurpose}
                onChange={({ target }) => setRemitancePurpose(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {purposeTransaction && purposeTransaction.length > 0 && purposeTransaction.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' value={remitancePurpose} onChange={({ target }) => setRemitancePurpose(target.value)} /> */}
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Recipient Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Recipient Name' value={recipientName} onChange={({ target }) => setRecipientName(target.value)} />
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Quote ID <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Quote ID' value={quoteId} onChange={({ target }) => setQuoteId(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiving Country <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Receiving Country"
                value={reciveCountry}
                onChange={({ target }) => setReciveCountry(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {countryList && countryList.length > 0 && countryList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' value={reciveCountry} onChange={({ target }) => setReciveCountry(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Source of Fund <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Source of Fund"
                value={sourceFund}
                onChange={({ target }) => setSourceFund(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {sourceFundList && sourceFundList.length > 0 && sourceFundList.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Source of Fund' value={sourceFund} onChange={({ target }) => setSourceFund(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Relationship <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Sender Relationship"
                value={senderRelation}
                onChange={({ target }) => setSenderRelation(target.value)}
                select
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={{ style: { height: 40 } }}
              >


                {relationship && relationship.length > 0 && relationship.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value.id}>{value.name}</MenuItem>
                  )
                })}
              </TextField>
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Sender Relationship' value={senderRelation} onChange={({ target }) => setSenderRelation(target.value)} /> */}
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
        transactionType={transactionType}
        mobileNumber={mobileNumber}
        reciverMobileNumber={reciverMobileNumber}
        genderDetails={genderDetails}
        nationality={nationality}
        dob={dob}
        descriptionText={descriptionText}
        setFeaturedInfoClose={setFeaturedInfoClose}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
