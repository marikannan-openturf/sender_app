import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionBankStatusPopup from './TransactionBankStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import { TitleSharp } from '@mui/icons-material';
import {currencyList} from '../../../Utils/currency'
import {countryList} from '../../../Utils/country'
import {purposeTransaction} from '../../../Utils/purpose_transaction'
import { sourceFundList } from '../../../Utils/sourceFund'
import { relationship } from '../../../Utils/relationship'
import { requestBodyData } from '../../../Utils/common'
const apiUrl = config.api.url

export default function PersonalBank() {
  const [amount, setAmount] = useState('100000')
  const [currency, setCurrency] = useState('NGN')
  const [transactionType, setTransactionType] = useState('inttransfer')
  const [mobileNumber, setMobileNumber] = useState('')
  const [reciverMobileNumber, setReciverMobileNumber] = useState('+9779840002320')
  const [accountNr, setAccountNr] = useState('50100002965304')
  const [kycName, setKycName] = useState('HDFC Bank')
  const [accountType, setAccountType] = useState('Savings')
  const [bankCode, setBankCode] = useState('HDFC0001626')
  const [sortCode, setSortCode] = useState('0002')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('1967-05-28')
  const [receiverDob, setReceiverDob] = useState('')
  const [nationality, setNationality] = useState('AE')
  const [receiverNationality, setReceiverNationality] = useState('AE')
  // const [genter, setGenter] = useState('')
  const [genderDetails, setGenderDetails] = useState('M')
  const [receiverGenderDetails, setReceiverGenderDetails] = useState('M')
  const [idType, setIdType] = useState('VOTER_CARD')
  const [receiverIdType, setReceiverIdType] = useState('')
  const [idNumber, setIdNumber] = useState('13321115521')
  const [receiverIdNumber, setReceiverIdNumber] = useState('')
  const [expDate, setExpDate] = useState('2067-05-28')
  const [receiverExpDate, setReceiverExpDate] = useState('')

  const [mobile, setMobile] = useState('13321115521')
  const [fullName, setFullName] = useState('Test Sender2')
  const [senderAddress, setSenderAddress] = useState('')
  const [country, setCountry] = useState('US')
  const [receiverCountry, setReceiverCountry] = useState('US')
  const [city, setCity] = useState('Florida')
  const [receiverCity, setReceiverCity] = useState('')
  // const [accountKycName, setAccountKycName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [remitancePurpose, setRemitancePurpose] = useState('Family Maintenance')
  const [quoteId, setQuoteId] = useState('QR037C1NA6ZXBSQ88B')
  const [reciveCountry, setReciveCountry] = useState('NP')
  const [sourceFund, setSourceFund] = useState('Salary')
  const [senderRelation, setSenderRelation] = useState('Brother')
  const [address1, setAddress1] = useState('49 , park street')
  const [receiverAddress1, setReceiverAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [address3, setAddress3] = useState('')
  const [receiverAddress2, setReceiverAddress2] = useState('')
  const [stateProvince, setStateProvince] = useState('')
  const [receiverStateProvince, setReceiverStateProvince] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [receiverPostalCode, setReceiverPostalCode] = useState('')
  const [descriptionText, setDescriptionText] = useState('')
  const [providerCode, setProviderCode] = useState('')
  const [transactionRef, setTransactionRef] = useState('SrcTxnId001')
  const [issueDate, setIssueDate] = useState('')
  const [receiverIssueDate, setReceiverIssueDate] = useState('')
  const [issuerCountry, setIssuerCountry] = useState('AE')
  const [receiverIssuerCountry, setReceiverIssuerCountry] = useState('AE')
  const [recipientName, setRecipientName] = useState('David Robinson')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  const [title, setTitle] = useState('')
  const [receiverTitle, setReceiverTitle] = useState('Mr.')
  const [firstName, setFirstName] = useState('Einstein')
  const [receiverFirstName, setReceiverFirstName] = useState('John')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('Bela')
  const [receiverLastName, setReceiverLastName] = useState('Smith')

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
    /* setRemitancePurpose('Family Maintainance')
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
    /* setRemitancePurpose('Family Maintainance')
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
    axios.post(`${apiUrl}/js/transaction`
      ,  {
        "amount": `${amount}`,
        "currency": `${currency}`,
        "type": "inttransfer",
        "descriptionText": `${descriptionText}`,
        "requestDate": new Date().toLocaleString("sv-SE"),
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
            "key": "accounttype",
            "value": `${accountType}`
          },
          {
            "key": "sortcode",
            "value": `${sortCode}`
          },
          {
            "key": "banksubcode",
            "value": `${bankCode}`
          },
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
          // "gender": `${receiverGenderDetails}`,
          "idDocument": [
            {
              "idType": `${receiverIdType}`,
              "idNumber": `${receiverIdNumber}`,
              "issueDate": `${receiverIssueDate}`,
              "expiryDate": `${receiverExpDate}`,
              "issuerCountry": `${receiverIssuerCountry}`
            }
          ],
          "postalAddress": {
            "addressLine1": `${receiverAddress1}`,
            "addressLine2": `${receiverAddress2}`,
            "addressLine3": `${receiverAddress2}`,
            "city": `${receiverCity}`,
            "stateProvince": `${receiverStateProvince}`,
            "postalCode": `${receiverPostalCode}`,
            "country": `${receiverCountry}`
          },
          "subjectName": {
            "firstName": `${receiverFirstName}`,
            // "middleName": `${middleName}`,
            "lastName": `${receiverLastName}`,
            "fullName": `${receiverFirstName} ${receiverLastName}`
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
      setFeaturedInfo(true)

    }).catch((err) => {
      setErrorRes(err.response.data)
      setErrorPopup(true)
    })
  }

  return (
    <>

      <Paper sx={{ p: 5 }}>
        <Stack alignItems='center' sx={{ pb: 4 }}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Personal Bank Status</Typography>

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
              sx={{ width: 205}}
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

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Reference <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' value={transactionRef} onChange={({ target }) => setTransactionRef(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={descriptionText} onChange={({ target }) => setDescriptionText(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Provider
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={providerCode} onChange={({ target }) => setProviderCode(target.value)} />
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
                Receiver Mobile Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={reciverMobileNumber} onChange={({ target }) => setReciverMobileNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Beneficiary Bank Account No <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account no' value={accountNr} onChange={({ target }) => setAccountNr(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account Type 
              </Typography> 
              <OutlinedInput sx={{ height: 40 }} placeholder='Account Type' value={accountType} onChange={({ target }) => setAccountType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Bank Code <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' value={bankCode} onChange={({ target }) => setBankCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full name of beneficiary bank <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={kycName} onChange={({ target }) => setKycName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sort Code <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' value={sortCode} onChange={({ target }) => setSortCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Nationality <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
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
                Date of Birth <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth' value={dob} onChange={({ target }) => setDob(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
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
                <MenuItem value='U'>Unspecified</MenuItem>

                {/* <MenuItem value='Jio'>Jio</MenuItem> */}
              </TextField>
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Gender
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Gender' value={genter} onChange={({target}) => setGenter(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Document Type <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={idType} onChange={({ target }) => setIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Number <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={idNumber} onChange={({ target }) => setIdNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Issue Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={issueDate} onChange={({ target }) => setIssueDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Expiry Date <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({ target }) => setExpDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                ID Issuer Country
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
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
                Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='MR.' value={title} onChange={({ target }) => setTitle(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                First Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='First Name' value={firstName} onChange={({ target }) => setFirstName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Middle Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Middle Name' value={middleName} onChange={({ target }) => setMiddleName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Last Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' value={lastName} onChange={({ target }) => setLastName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Address Line1 <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 1' value={address1} onChange={({ target }) => setAddress1(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Address Line2
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 2' value={address2} onChange={({ target }) => setAddress2(target.value)} />
            </Stack>

          </Stack>


          <Stack spacing={4} width={450}>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Address Line3
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Address line 3' value={address3} onChange={({ target }) => setAddress3(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                City <span style={{color:'#ea5c57'}}>*</span>
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
                Country <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
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
              sx={{ width: 205}}
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
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Nationality' value={receiverNationality} onChange={({ target }) => setReceiverNationality(target.value)} /> */}
            </Stack>


            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Date of Birth
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth' value={receiverDob} onChange={({ target }) => setReceiverDob(target.value)} />
            </Stack>

            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Receiver Gender
              </Typography>
              <TextField
                sx={{ width: 205 }}
                label="Gender"
                value={receiverGenderDetails}
                onChange={({ target }) => setReceiverGenderDetails(target.value)}
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
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Id Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Mobile Number' value={mobile} onChange={({ target }) => setMobile(target.value)} />
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Document Type
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={receiverIdType} onChange={({ target }) => setReceiverIdType(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver  ID Number
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={receiverIdNumber} onChange={({ target }) => setReceiverIdNumber(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Issue Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' value={receiverIssueDate} onChange={({ target }) => setReceiverIssueDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={receiverExpDate} onChange={({ target }) => setReceiverExpDate(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver ID Issuer Country
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
              label="Receiver ID Issuer Country"
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
                Receiver Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='MR.' value={receiverTitle} onChange={({ target }) => setReceiverTitle(target.value)} />
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver First Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='First Name' value={receiverFirstName} onChange={({ target }) => setReceiverFirstName(target.value)} />
            </Stack>
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
              Receiver Middle Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Middle Name' value={middleName} onChange={({ target }) => setMiddleName(target.value)} />
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Last Name <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' value={receiverLastName} onChange={({ target }) => setReceiverLastName(target.value)} />
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
                Receiver City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='City' value={receiverCity} onChange={({ target }) => setReceiverCity(target.value)} />
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
                Receiver  Country
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
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

            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account KYC Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={accountKycName} onChange={({target}) => setAccountKycName(target.value)}/>
            </Stack> */}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Remittance Purpose <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
            alignItems='center'
              sx={{ width: 205}}
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
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Recipient Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Recipient Name' value={recipientName} onChange={({ target }) => setRecipientName(target.value)} />
            </Stack>
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
              sx={{ width: 205}}
              label="Receive Country"
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
      <TransactionBankStatusPopup
        featuredInfo={featuredInfo}
        amount={amount}
        currency={currency}
        network={network}
        kycName={kycName}
        setFeaturedInfoClose={setFeaturedInfoClose}
        dob={dob}
        mobileNumber={mobileNumber}
        bankCode={bankCode}
        accountNr={accountNr}
        genderDetails={genderDetails}
        nationality={nationality}
        descriptionText={descriptionText}
      />
      <ErrorPopup errorPopup={errorPopup} errorRes={errorRes}
        CloseErrorPopup={CloseErrorPopup} />
    </>
  )
}
