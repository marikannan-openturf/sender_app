import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useState,useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionBusinessBankStatusPopup from './TransactionBusinessBankStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import {purposeTransaction} from '../../../Utils/purpose_transaction'
import { sourceFundList } from '../../../Utils/sourceFund'
const apiUrl = config.api.url

export default function BusinessMobile(props) {
  const [amount, setAmount] = useState('500')
  const [currency, setCurrency] = useState('INR')
  const [payingCurrency, setPayingCurrency] = useState('USD')
  const [transactionType, setTransactionType] = useState('b2p')
  const [mobileNumber, setMobileNumber] = useState('+9779840002320')
  const [reciverMobileNumber, setReciverMobileNumber] = useState('+9779840002320')
  const [beneficiarySmsNotify, setBenificiarySmsNotify] = useState('test sms')
  const [accountNr, setAccountNr] = useState('50100002965304')
  const [kycName, setKycName] = useState('HDFC Bank')
  const [bankCode, setBankCode] = useState('HDFC0001626')
  const [bankSubCode, setBankSubCode] = useState('0001')
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
  const [recipientName, setRecipientName] = useState('David')
  const [lastName, setLastName] = useState('Robinson')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [sendAmount, setSendAmount] = useState('35500.00')
  const [paymentMode, setpaymentMode] = useState('cash')
  const [authenticationPartnerCode, setAuthenticationPartnerCode] = useState('4534')
  const [sendingPartnerCode, setSendingPartnerCode] = useState('343432223')
  const [receivingPartnerCode, setReceivingPartnerCode] = useState('343432223')
  const [businessName, setBusinessName] = useState('sample business')
  const [receipientBusinessName, setReceipientBusinessName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [receipientBusinessPincode, setReceipientBusinessPincode] = useState('123456')
  const [businessAddress1, setBusinessAddress1] = useState(`alton's road`)
  const [receipientBusinessAddress1, setReceipientBusinessAddress1] = useState(`24`)
  const [receipientBusinessAddress2, setReceipientBusinessAddress2] = useState(`walton's road`)
  const [receipientBusinessCity, setReceipientBusinessCity] = useState(`newyork`)
  const [receipientBusinessState, setReceipientBusinessState] = useState(`NYC`)
  const [receipientBusinessAddressCountryCode, setReceipientBusinessAddressCountryCode] = useState('NG')
  const [receipientAddressZip, setReceipientAddressZip] = useState('123456')
  const [businessAddressCity, setBusinessAddressCity] = useState('Lyon')
  const [businessAddressCountryCode, setBusinessAddressCountryCode] = useState('US')
  const [businessPrimaryContactCountryCode, setBusinessPrimaryContactCountryCode] = useState('US')
  const [businessPrimaryContactNo, setBusinessPrimaryContactNo] = useState('3472034605')
  const [receipientBusinessPrimaryContactCountryCode, setReceipientBusinessPrimaryContactCountryCode] = useState('US')
  const [receipientBusinessPrimaryContactNo, setReceipientBusinessPrimaryContactNo] = useState('3472034605')
  const [receipientBusinessPrimaryContactNoType, setReceipientBusinessPrimaryContactNoType] = useState('3472034605')
  const [businessDescription, setBusinessDescription] = useState('Electronics')
  const [receipientBusinessDescription, setreceipientBusinessDescription] = useState('Electronics')
  const [businessCountryCode, setBusinessCountryCode] = useState('US')
  const [receipientBusinessCountryCode, setreceipientBusinessCountryCode] = useState('US')
  const [businessRegistrationType, setBusinessRegistrationType] = useState('Private Limited Company')
  const [receipientBusinessRegistrationType, setReceipientBusinessRegistrationType] = useState('Private Limited Company')
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('23123456789')
  const [recepientBusinessRegistrationNumber, setReceipientBusinessRegistrationNumber] = useState('2312345678912')
  const [recepientBusinessRegistrationIssuedBy, setReceipientBusinessRegistrationNumberIssuedBy] = useState('NYC_TRADE')
  const [recepientBusinessRegistrationIssuedAt, setReceipientBusinessRegistrationNumberIssuedAt] = useState('NYC')
  const [recepientBusinessRegistrationIssuedDate, setReceipientBusinessRegistrationNumberIssuedDate] = useState('2002-08-26')
  const [recepientBusinessRegistrationValidThru, setReceipientBusinessRegistrationNumberValidThru] = useState('2036-09-26')
  const [typeOfBusiness, setTypeOfBusiness] = useState('Electronics')
  const [businessPObox, setBusinessPOBox] = useState('12345')
  const [receipientBusinessMobile, setReceipientBusinessMobile] = useState('343234432')
  const [businessRegistrationIssueDate, setBusinessRegistrationIssueDate] = useState('2001-09-26')
  const [businessIDValidThru, setBusinessIDValidThru] = useState('2033-09-26')
  const [businessEmail, setBusinessEmail] = useState('rs.electronics@gmail.com')
  const [receipientBusinessEmail, setReceipientBusinessEmail] = useState('')
  const [primaryContactCountryCode, setPrimaryContactcountryCode] = useState('NG')
  const [primaryContactNo, setPrimaryContactNo] = useState('2349061114853')
  const [personalePrimaryContactNo, setPersonalPrimaryContactNo] = useState('2349061114853')
  const [personalePrimaryContactNoCode, setPersonalPrimaryContactNoCode] = useState('NG')
  const [primaryContactNoType, setPrimaryContactNoType] = useState('personal')
  const [errorRes, setErrorRes] = useState({})
  const [title, setTitle] = useState('Mr.')
  const [firstName, setFirstname] = useState('Einstein')
  const [middleName, setMiddleName] = useState('James')
  const [accountType, setAccountType] = useState('CHECKING')
  const [accountName, setAccountName] = useState('Rajesh')
  const [accountIBAN, setAccountIBAN] = useState('GB29NWBK60161331926819')
  const [accountAdditionalNo1, setAccountAdditionalNo1] = useState('2656915085434')

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

    let requestBodyData = {}
    if (transactionType === 'b2p') {
      requestBodyData = {
        "amount": `${amount}`,
        "currency": `${currency}`,
        "type": `${transactionType}`,
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
            "key": "accounttype",
            "value": `${accountType}`
          },
          {
            "key": "banksubcode",
            "value": `${bankSubCode}`
          },
          {
            "key": "organisationid",
            "value": `${kycName}`
          },
          {
            "key": "sortcode",
            "value": `${bankCode}`
          },
          {
            "key": "bankBranchName",
            "value": `${kycName}`
          },
          {
            "key": "accountName",
            "value": `${accountName}`
          },
          {
            "key": "accountIBAN",
            "value": `${accountIBAN}`
          },
          {
            "key": "accountAdditionalNo1",
            "value": `${accountAdditionalNo1}`
          }
        ],
        "senderKyc": {},
        "recipientKyc": {
          "primaryContactCountryCode": `${primaryContactCountryCode}`,
          "primaryContactNo": `${primaryContactNo}`,
          "primaryContactNoType": `${primaryContactNoType}`,
          "subjectName": {
            "firstName": `${recipientName}`,
            "lastName": `${lastName}`,
            "fullName": `${recipientName} ${lastName}`
          }
        },
        "sendingAmount": `${sendAmount}`,
        "payinCcyCode": `${payingCurrency}`,
        "provider": `${providerCode}`,
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
      }
    } else if (transactionType === 'b2b') {
      requestBodyData = {
        "currency": `${currency}`,
        "type": "b2b",
        "requestDate": new Date().toLocaleString("sv-SE"),
        "amount": `${amount}`,
        "descriptionText": `${descriptionText}`,
        "requestingOrganisationTransactionReference": `${transactionRef}`,
        "sendingAmount": `${amount}`,
        "payinCcyCode": `${payingCurrency}`,
        "provider": `${providerCode}`,
        "paymentMode": `${paymentMode}`,
        "authenticationPartnerCode": `${authenticationPartnerCode}`,
        "paymentOption": "Mobile Wallet",
        "sendingPartnerCode": `${sendingPartnerCode}`,
        "receivingPartnerCode": `${receivingPartnerCode}`,
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
            "key": "accounttype",
            "value": `${accountType}`
          },
          {
            "key": "banksubcode",
            "value": `${bankSubCode}`
          },
          {
            "key": "organisationid",
            "value": `${kycName}`
          },
          {
            "key": "sortcode",
            "value": `${bankCode}`
          },
          {
            "key": "bankBranchName",
            "value": `${kycName}`
          },
          {
            "key": "accountName",
            "value": `${accountName}`
          },
          {
            "key": "accountIBAN",
            "value": `${accountIBAN}`
          },
          {
            "key": "accountAdditionalNo1",
            "value": `${accountAdditionalNo1}`
          }
        ],
        "senderKyc": {

        },
        "recipientKyc": {
        },
        "internationalTransferInformation": {
          "quoteId": `${quoteId}`,
          "receivingCountry": `${reciveCountry}`,
          "remittancePurpose": `${remitancePurpose}`,
          "sourceOfFunds": `${sourceFund}`
        },
        "business": {
          "senderKyc": {
            "businessName": `${businessName}`,
            "businessAddress1": `${businessAddress1}`,
            "businessAddressCity": `${businessAddressCity}`,
            "businessAddressCountryCode": `${businessAddressCountryCode}`,
            "businessPrimaryContactCountryCode": `${businessPrimaryContactCountryCode}`,
            "businessPrimaryContactNo": `${businessPrimaryContactNo}`,
            "businessDescription": `${businessDescription}`,
            "businessEmail": `${businessEmail}`,
            "businessCountryCode": `${businessCountryCode}`,
            "businessRegistrationType": `${businessRegistrationType}`,
            "businessRegistrationNumber": `${businessRegistrationNumber}`,
            "businessRegistrationIssueDate": `${businessRegistrationIssueDate}`,
            "businessIDValidThru": `${businessIDValidThru}`
          },
          "recepientKyc": {
            "businessName": `${receipientBusinessName}`,
            "businessPINCode": `${receipientBusinessPincode}`,
            "businessAddress1": `${receipientBusinessAddress1}`,
            "businessAddress2": `${receipientBusinessAddress2}`,
            "businessAddressCity": `${receipientBusinessCity}`,
            "businessAddressState": `${receipientBusinessState}`,
            "businessAddressCountryCode": `${receipientBusinessCountryCode}`,
            "businessAddressZip": `${receipientAddressZip}`,
            "businessPrimaryContactCountryCode": `${receipientBusinessPrimaryContactCountryCode}`,
            "businessPrimaryContactNo": `${receipientBusinessPrimaryContactNo}`,
            "businessPrimaryContactNoType": `${receipientBusinessPrimaryContactNoType}`,
            "businessDescription": `${receipientBusinessDescription}`,
            "businessEmail": `${receipientBusinessEmail}`,
            "businessCountryCode": `${receipientBusinessCountryCode}`,
            "businessRegistrationType": `${receipientBusinessRegistrationType}`,
            "businessRegistrationNumber": `${recepientBusinessRegistrationNumber}`,
            "businessRegistrationIssuedBy": `${recepientBusinessRegistrationIssuedBy}`,
            "businessRegistrationIssuedAt": `${recepientBusinessRegistrationIssuedAt}`,
            "businessRegistrationIssueDate": `${recepientBusinessRegistrationIssuedDate}`,
            "businessIDValidThru": `${recepientBusinessRegistrationValidThru}`,
            "typeofbusiness": `${typeOfBusiness}`,
            "businessPObox": `${businessPObox}`,
            "businessMobile": `${receipientBusinessMobile}`
          }
        }
      }

    } else {
      requestBodyData = {
        "currency": `${currency}`,
        "type": "p2b",
        "requestDate": new Date().toLocaleString("sv-SE"),
        "amount": `${amount}`,
        "descriptionText": `${descriptionText}`,
        "requestingOrganisationTransactionReference": `${transactionRef}`,
        "sendingAmount": `${amount}`,
        "payinCcyCode": `${payingCurrency}`,
        "provider": `${providerCode}`,
        "paymentMode": `${paymentMode}`,
        "authenticationPartnerCode": `${authenticationPartnerCode}`,
        "paymentOption": "Mobile Wallet",
        "sendingPartnerCode": `${sendingPartnerCode}`,
        "receivingPartnerCode": `${receivingPartnerCode}`,
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
            "key": "accounttype",
            "value": `${accountType}`
          },
          {
            "key": "banksubcode",
            "value": `${bankSubCode}`
          },
          {
            "key": "organisationid",
            "value": `${kycName}`
          },
          {
            "key": "sortcode",
            "value": `${bankCode}`
          },
          {
            "key": "bankBranchName",
            "value": `${kycName}`
          },
          {
            "key": "accountName",
            "value": `${accountName}`
          },
          {
            "key": "accountIBAN",
            "value": `${accountIBAN}`
          },
          {
            "key": "accountAdditionalNo1",
            "value": `${accountAdditionalNo1}`
          }
        ],
        "senderKyc": {
          "nationality": `${nationality}`,
          "dateOfBirth": `${dob}`,
          "gender": `${genderDetails}`,
          "primaryContactCountryCode": `${personalePrimaryContactNoCode}`,
          "primaryContactNo": `${personalePrimaryContactNo}`,
          "primaryContactNoType": "personal",
          "idDocument": [
            {
              "idType": `${nationality}`,
              "idNumber": `${idNumber}`,
              "issueDate": `${issueDate}`,
              "expiryDate": `${expDate}`,
              "issuerCountry": `${issuerCountry}`
            }
          ],
          "postalAddress": {
            "addressLine1": `${address1}`,
            "addressLine2": `${address2}`,
            "addressLine3": `${address2}`,
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
            "fullName": `${fullName}`
          }
        },
        "recipientKyc": {

        },
        "internationalTransferInformation": {
          "quoteId": `${quoteId}`,
          "receivingCountry": `${reciveCountry}`,
          "remittancePurpose": `${remitancePurpose}`,
          "sourceOfFunds": `${sourceFund}`,
          "relationshipSender": `${senderRelation}`
        },
        "business": {
          "senderKyc": {

          },
          "recepientKyc": {
            "businessName": `${receipientBusinessName}`,
            "businessPINCode": `${receipientBusinessPincode}`,
            "businessAddress1": `${receipientBusinessAddress1}`,
            "businessAddress2": `${receipientBusinessAddress2}`,
            "businessAddressCity": `${receipientBusinessCity}`,
            "businessAddressState": `${receipientBusinessState}`,
            "businessAddressCountryCode": `${receipientBusinessCountryCode}`,
            "businessAddressZip": `${receipientAddressZip}`,
            "businessPrimaryContactCountryCode": `${receipientBusinessPrimaryContactCountryCode}`,
            "businessPrimaryContactNo": `${receipientBusinessPrimaryContactNo}`,
            "businessPrimaryContactNoType": `${receipientBusinessPrimaryContactNoType}`,
            "businessDescription": `${receipientBusinessDescription}`,
            "businessEmail": `${receipientBusinessEmail}`,
            "businessCountryCode": `${receipientBusinessCountryCode}`,
            "businessRegistrationType": `${receipientBusinessRegistrationType}`,
            "businessRegistrationNumber": `${recepientBusinessRegistrationNumber}`,
            "businessRegistrationIssuedBy": `${recepientBusinessRegistrationIssuedBy}`,
            "businessRegistrationIssuedAt": `${recepientBusinessRegistrationIssuedAt}`,
            "businessRegistrationIssueDate": `${recepientBusinessRegistrationIssuedDate}`,
            "businessIDValidThru": `${recepientBusinessRegistrationValidThru}`,
            "typeofbusiness": `${typeOfBusiness}`,
            "businessPObox": `${businessPObox}`,
            "businessMobile": `${receipientBusinessMobile}`
          }
        }
      }
    }
    const options = {
      headers: {
        'username': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('username') : localStorage.getItem('prodUsername') ? localStorage.getItem('prodUsername') : '',
        'password': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('password') : localStorage.getItem('prodPassword') ? localStorage.getItem('prodPassword') : '',
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': localStorage.getItem('environment') === 'sandbox' ? localStorage.getItem('country') : localStorage.getItem('prodCountry') ? localStorage.getItem('prodCountry') : '',
        'environment': localStorage.getItem('environment') === 'uat' ? 'uat' : 'sandbox' 
      }
    }
    axios.post(`${apiUrl}/js/transaction`
      , requestBodyData,
      { headers: options.headers }
    ).then((res) => {
      setFeaturedInfo(true)

    }).catch((err) => {
      setErrorPopup(true)
    })
  }

  useEffect(() => {
    if (props.accountNumber) {
      setAccountNr(props.accountNumber)
    }
    if (props.quoteIdInfo) {
    if (props.quoteIdInfo.quotationReference) {
      setQuoteId(props.quoteIdInfo.quotationReference)
    }
    if (props.quoteIdInfo && props.quoteIdInfo.creditParty && props.quoteIdInfo.creditParty.length > 0) {
      setReciverMobileNumber(props.quoteIdInfo.creditParty[0].value)
    }
    if (props.quoteIdInfo && props.quoteIdInfo.debitParty && props.quoteIdInfo.debitParty.length > 0) {
      setMobileNumber(props.quoteIdInfo.debitParty[0].value)
    }
    if (props.quoteIdInfo && props.quoteIdInfo.requestAmount) {
      setAmount(props.quoteIdInfo.requestAmount)
    }
    if (props.quoteIdInfo && props.quoteIdInfo.requestAmount) {
      setCurrency(props.quoteIdInfo.requestCurrency)
    }
  }
  }, [props])
  return (
    <>

      {/* <Paper sx={{ p: 5 }}> */}
        <Stack alignItems='center' sx={{ pb: 4 }}>
          <Typography variant='h6' fontFamily='Poppins' fontWeight='600'> Transaction Business Bank Status</Typography>

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
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Transaction Type <span style={{color:'#ea5c57'}}>*</span>
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
                Transaction Reference <span style={{color:'#ea5c57'}}>*</span>
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
                Sending Amount <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Sending Amount' value={sendAmount} onChange={({ target }) => setSendAmount(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Paying Currency Code <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Paying Currency Code"
                value={payingCurrency}
                onChange={({ target }) => setPayingCurrency(target.value)}
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
              {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' value={payingCurrency} onChange={({ target }) => setPayingCurrency(target.value)} /> */}
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Payment Mode
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' value={paymentMode} onChange={({ target }) => setpaymentMode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' value={authenticationPartnerCode} onChange={({ target }) => setAuthenticationPartnerCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Send Partner Code <span style={{color:'#ea5c57'}}>*</span>
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
            {/* {transactionType === 'b2b' && <>  <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                SMS Notification
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='SMS Notification' value={beneficiarySmsNotify} onChange={({ target }) => setBenificiarySmsNotify(target.value)} />
            </Stack> </>} */}


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
                Sort Code <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' value={bankCode} onChange={({ target }) => setBankCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Bank Sub-Code 
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Bank Sub-Code' value={bankSubCode} onChange={({ target }) => setBankSubCode(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Full name of beneficiary bank
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account KYC Name' value={kycName} onChange={({ target }) => setKycName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account Name' value={accountName} onChange={({ target }) => setAccountName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account IBAN Number <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account IBAN Number' value={accountIBAN} onChange={({ target }) => setAccountIBAN(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Account Additional No1
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Account Additional No1' value={accountAdditionalNo1} onChange={({ target }) => setAccountAdditionalNo1(target.value)} />
            </Stack>

            {transactionType === 'p2b' && <>

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
                  {/* <MenuItem value='Jio'>Jio</MenuItem> */}
                </TextField>
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Primary Contact Number Code <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Primary Contact Number"
                value={personalePrimaryContactNoCode}
                onChange={({ target }) => setPersonalPrimaryContactNoCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Primary Contact Number' value={personalePrimaryContactNoCode} onChange={({ target }) => setPersonalPrimaryContactNoCode(target.value)} /> */}
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Primary Contact Number <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Primary Contact Number' value={personalePrimaryContactNo} onChange={({ target }) => setPersonalPrimaryContactNo(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Sender ID Type
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' value={idType} onChange={({ target }) => setIdType(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Sender ID Number
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
                  Issuer Country <span style={{color:'#ea5c57'}}>*</span>
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

            </>}
            {transactionType === 'b2b' && <> <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address Country <span style={{color:'#ea5c57'}}>*</span>
              </Typography>
              <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Business Address Country"
                value={businessAddressCountryCode}
                onChange={({ target }) => setBusinessAddressCountryCode(target.value)}
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
              {/* <OutlinedInput sx={{ height: 40 }} placeholder=' Business Address Country' value={businessAddressCountryCode} onChange={({ target }) => setBusinessAddressCountryCode(target.value)} /> */}
            </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Contact Code <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Contact Code"
                  value={businessPrimaryContactCountryCode}
                  onChange={({ target }) => setBusinessPrimaryContactCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Code' value={businessPrimaryContactCountryCode} onChange={({ target }) => setBusinessPrimaryContactCountryCode(target.value)} /> */}
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Contact Number <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Number' value={businessPrimaryContactNo} onChange={({ target }) => setBusinessPrimaryContactNo(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Description <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' value={businessDescription} onChange={({ target }) => setBusinessDescription(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Country <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Country Code"
                  value={businessCountryCode}
                  onChange={({ target }) => setBusinessCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' value={businessCountryCode} onChange={({ target }) => setBusinessCountryCode(target.value)} /> */}
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Registration Type <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Type' value={businessRegistrationType} onChange={({ target }) => setBusinessRegistrationType(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Registration Number <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Number' value={businessRegistrationNumber} onChange={({ target }) => setBusinessRegistrationNumber(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Registration Date <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Date' value={businessRegistrationIssueDate} onChange={({ target }) => setBusinessRegistrationIssueDate(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Name <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business-Name' value={businessName} onChange={({ target }) => setBusinessName(target.value)} />
              </Stack>
            </>}
          </Stack>


          <Stack spacing={4} width={450}>
            {transactionType === 'b2p' && <>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Name <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business-Name' value={businessName} onChange={({ target }) => setBusinessName(target.value)} />
              </Stack>


            </>}
            {transactionType !== 'p2b' && <>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Address <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Address1' value={businessAddress1} onChange={({ target }) => setBusinessAddress1(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Address City
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' value={businessAddressCity} onChange={({ target }) => setBusinessAddressCity(target.value)} />
              </Stack> </>}

            {transactionType === 'p2b' && <>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Sender Last Name
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
                  Sender City
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='City' value={city} onChange={({ target }) => setCity(target.value)} />
              </Stack>
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
                  Sender Country <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <TextField
                alignItems='center'
                sx={{ width: 205 }}
                label="Country"
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
            </>}

            {transactionType === 'b2p' && <>  <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address Country
              </Typography>
              <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Country Code"
                  value={businessCountryCode}
                  onChange={({ target }) => setBusinessCountryCode(target.value)}
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
              {/* <OutlinedInput sx={{ height: 40 }} placeholder=' Business Address Country' value={businessAddressCountryCode} onChange={({ target }) => setBusinessAddressCountryCode(target.value)} /> */}
            </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Business Contact Code
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Contact Code"
                  value={businessPrimaryContactCountryCode}
                  onChange={({ target }) => setBusinessPrimaryContactCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Code' value={businessPrimaryContactCountryCode} onChange={({ target }) => setBusinessPrimaryContactCountryCode(target.value)} /> */}
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
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Country Code"
                  value={businessCountryCode}
                  onChange={({ target }) => setBusinessCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' value={businessCountryCode} onChange={({ target }) => setBusinessCountryCode(target.value)} /> */}
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
                  Business Email <span style={{color:'#ea5c57'}}>*</span>
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' value={businessEmail} onChange={({ target }) => setBusinessEmail(target.value)} />
              </Stack> </>
            }
            {transactionType === 'b2b' && <>
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
              </Stack> </>}
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
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

            {transactionType === 'b2p' ?
              <>
                <Stack alignItems='center' justifyContent='space-between' direction='row'>
                  <Typography color="#575757" fontWeight='500'>
                    Recipient Contact Country Code              </Typography>
                  <TextField
                    alignItems='center'
                    sx={{ width: 205 }}
                    label="Contact Country Code"
                    value={primaryContactCountryCode}
                    onChange={({ target }) => setPrimaryContactcountryCode(target.value)}
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
                  {/* <OutlinedInput sx={{ height: 40 }} placeholder='Primary Contact Country Code' value={primaryContactCountryCode} onChange={({ target }) => setPrimaryContactcountryCode(target.value)} /> */}
                </Stack>
                <Stack alignItems='center' justifyContent='space-between' direction='row'>
                  <Typography color="#575757" fontWeight='500'>
                    Recipient Primary Contact No
                  </Typography>
                  <OutlinedInput sx={{ height: 40 }} placeholder='Primary Contact Country No' value={primaryContactNo} onChange={({ target }) => setPrimaryContactNo(target.value)} />
                </Stack>
                <Stack alignItems='center' justifyContent='space-between' direction='row'>
                  <Typography color="#575757" fontWeight='500'>
                    Recipient Primary Contact No Type
                  </Typography>
                  <OutlinedInput sx={{ height: 40 }} placeholder='Primary Contact Country No Type' value={primaryContactNoType} onChange={({ target }) => setPrimaryContactNoType(target.value)} />
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
              </>
              : ''}
            {(transactionType === 'b2b' || transactionType === 'p2b') && <> <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receipient Business Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business-Name' value={receipientBusinessName} onChange={({ target }) => setReceipientBusinessName(target.value)} />
            </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Pincode
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Pincode' value={receipientBusinessPincode} onChange={({ target }) => setReceipientBusinessPincode(target.value)} />
              </Stack>

              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Address1
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Address1' value={receipientBusinessAddress1} onChange={({ target }) => setReceipientBusinessAddress1(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Address2
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Address2' value={receipientBusinessAddress2} onChange={({ target }) => setReceipientBusinessAddress2(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business City
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business City' value={receipientBusinessCity} onChange={({ target }) => setReceipientBusinessCity(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business State
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business State' value={receipientBusinessState} onChange={({ target }) => setReceipientBusinessState(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Country
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Country"
                  value={receipientBusinessAddressCountryCode}
                  onChange={({ target }) => setReceipientBusinessAddressCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Country' value={receipientBusinessAddressCountryCode} onChange={({ target }) => setReceipientBusinessAddressCountryCode(target.value)} /> */}
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business ZIP
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business 575757' value={receipientAddressZip} onChange={({ target }) => setReceipientAddressZip(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Contact Code
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Contact Code"
                  value={receipientBusinessPrimaryContactCountryCode}
                  onChange={({ target }) => setReceipientBusinessPrimaryContactCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Code' value={receipientBusinessPrimaryContactCountryCode} onChange={({ target }) => setReceipientBusinessPrimaryContactCountryCode(target.value)} /> */}
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient  Contact Number
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Number' value={receipientBusinessPrimaryContactNo} onChange={({ target }) => setReceipientBusinessPrimaryContactNo(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient  Contact Number Type
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Contact Number' value={receipientBusinessPrimaryContactNoType} onChange={({ target }) => setReceipientBusinessPrimaryContactNoType(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Description
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' value={receipientBusinessDescription} onChange={({ target }) => setreceipientBusinessDescription(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Email
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' value={receipientBusinessEmail} onChange={({ target }) => setReceipientBusinessEmail(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Country
                </Typography>
                <TextField
                  alignItems='center'
                  sx={{ width: 205 }}
                  label="Business Country"
                  value={receipientBusinessAddressCountryCode}
                  onChange={({ target }) => setReceipientBusinessAddressCountryCode(target.value)}
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
                {/* <OutlinedInput sx={{ height: 40 }} placeholder='Business Country' value={receipientBusinessCountryCode} onChange={({ target }) => setreceipientBusinessCountryCode(target.value)} /> */}
              </Stack>

              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient  Registration Type
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Type' value={receipientBusinessRegistrationType} onChange={({ target }) => setReceipientBusinessRegistrationType(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient  Registration Number
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Number' value={recepientBusinessRegistrationNumber} onChange={({ target }) => setReceipientBusinessRegistrationNumber(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Registration Issued By
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued By' value={recepientBusinessRegistrationIssuedBy} onChange={({ target }) => setReceipientBusinessRegistrationNumberIssuedBy(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Registration Issued At
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued At' value={recepientBusinessRegistrationIssuedAt} onChange={({ target }) => setReceipientBusinessRegistrationNumberIssuedAt(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Registration Issued Date
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued Date' value={recepientBusinessRegistrationIssuedDate} onChange={({ target }) => setReceipientBusinessRegistrationNumberIssuedDate(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Valid Thru
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Valid Thru' value={recepientBusinessRegistrationValidThru} onChange={({ target }) => setReceipientBusinessRegistrationNumberValidThru(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Type of Business
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Receipient Type of Business' value={typeOfBusiness} onChange={({ target }) => setTypeOfBusiness(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business PO Box
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Receipient Business PO Box' value={businessPObox} onChange={({ target }) => setBusinessPOBox(target.value)} />
              </Stack>
              <Stack alignItems='center' justifyContent='space-between' direction='row'>
                <Typography color="#575757" fontWeight='500'>
                  Receipient Business Mobile
                </Typography>
                <OutlinedInput sx={{ height: 40 }} placeholder='Receipient Business Mobile' value={receipientBusinessMobile} onChange={({ target }) => setReceipientBusinessMobile(target.value)} />
              </Stack> </>}
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Business Address City
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' value={businessAddressCity} onChange={({ target }) => setBusinessAddressCity(target.value)} />
            </Stack> */}
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
                Source of Fund
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
            {transactionType === 'b2p' || transactionType === 'b2p' && <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Relationship
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Sender Relationship' value={senderRelation} onChange={({ target }) => setSenderRelation(target.value)} />
            </Stack>}
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
            <Button variant='contained' onClick={setFeaturedInfoDetails} >Submit</Button>
            :
            <CustomButtom variant='contained' disabled>Submit</CustomButtom>}

        </Stack>

      {/* </Paper> */}
      <TransactionBusinessBankStatusPopup
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
