import { OutlinedInput, Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import TransactionMobileStatusPopup from './TransactionMobileStatusPopup';
import ErrorPopup from '../../../pages/ErrorPopup';
import axios from 'axios';
import { config } from '../../../assets/config/config';
const apiUrl = config.api.url

export default function PersonalMobile() {
  const [amount, setAmount] = useState('500')
  const [currency, setCurrency] = useState('INR')
  const [transactionType, setTransactionType] = useState('inttransfer')
  const [mobileNumber, setMobileNumber] = useState('+971810456234')
  const [reciverMobileNumber, setReciverMobileNumber] = useState('+9779840002320')
  const [accountNr, setAccountNr] = useState('50100002965304')
  const [kycName, setKycName] = useState('HDFC Bank')
  const [bankCode, setBankCode] = useState('HDFC0001626')
  const [network, setNetwork] = useState('')
  const [dob, setDob] = useState('1967-05-28')
  const [receiverDob, setReceiverDob] = useState('1967-05-28')
  const [nationality, setNationality] = useState('AE')
  const [receiverNationality, setReceiverNationality] = useState('FR')
  // const [genter, setGenter] = useState('')
  const [genderDetails, setGenderDetails] = useState('M')
  const [idType, setIdType] = useState('nationalidcard')
  const [receiveridType, setReceiverIdType] = useState('nationalidcard')
  const [idNumber, setIdNumber] = useState('13321115521')
  const [receiveridNumber, setReceiverIdNumber] = useState('123456789')
  const [expDate, setExpDate] = useState('2067-05-28')
  const [receiverExpDate, setReceiverExpDate] = useState('2067-05-28')
  const [mobile, setMobile] = useState('13321115521')
  const [fullName, setFullName] = useState('Test Sender2')
  const [senderAddress, setSenderAddress] = useState('')
  const [country, setCountry] = useState('US')
  const [receiverCountry, setReceiverCountry] = useState('US')
  const [city, setCity] = useState('Florida')
  const [receivercity, setReceiverCity] = useState('Florida')
  // const [accountKycName, setAccountKycName] = useState('Oyugi Randy Electric Sale Pvt. Ltd.')
  const [remitancePurpose, setRemitancePurpose] = useState('Gift')
  const [quoteId, setQuoteId] = useState('QR037C1NA6ZXBSQ88B')
  const [reciveCountry, setReciveCountry] = useState('NP')
  const [sourceFund, setSourceFund] = useState('Salary')
  const [senderRelation, setSenderRelation] = useState('Brother')
  const [address1, setAddress1] = useState('49 , park street')
  const [receiverAddress1, setReceiverAddress1] = useState('49 , park street')
  const [address2, setAddress2] = useState('12')
  const [receiverAddress2, setReceiverAddress2] = useState('12')
  const [stateProvince, setStateProvince] = useState('50000')
  const [receiverStateProvince, setReceiverStateProvince] = useState('50000')
  const [postalCode, setPostalCode] = useState('12')
  const [receiverPostalCode, setReceiverPostalCode] = useState('12')
  const [descriptionText, setDescriptionText] = useState('Gift for my brother')
  const [transactionRef, setTransactionRef] = useState('SrcTxnId001')
  const [issueDate, setIssueDate] = useState('1967-05-28')
  const [receiverIssueDate, setReceiverIssueDate] = useState('1967-05-28')
  const [issuerCountry, setIssuerCountry] = useState('AE')
  const [receiverIssuerCountry, setReceiverIssuerCountry] = useState('AE')
  const [recipientName, setRecipientName] = useState('David Robinson')
  const [errorPopup, setErrorPopup] = useState(false)
  const [featuredInfo, setFeaturedInfo] = useState(false)
  const [errorRes, setErrorRes] = useState({})
  const [providerCode, setProviderCode] = useState('23401')
  const [title, setTitle] = useState('Mr.')
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
        "type": "inttransfer",
        "descriptionText": `${descriptionText}`,
        "requestDate": "2021-05-23 08:19:36",
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
            "addressLine3": `${receiverAddress2}`,
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
            {/* <Stack alignItems='center' justifyContent='space-between' direction='row'>
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
            </Stack> */}
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
                {/* <MenuItem value='Jio'>Jio</MenuItem> */}
              </TextField>
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Nationality
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Nationality' value={nationality} onChange={({ target }) => setNationality(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Date of Birth
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
                Transaction Reference
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
                Expiry Date
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' value={expDate} onChange={({ target }) => setExpDate(target.value)} />
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Issuer Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' value={issuerCountry} onChange={({ target }) => setIssuerCountry(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={title} onChange={({ target }) => setTitle(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender First Name
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
                Sender Last Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' value={lastName} onChange={({ target }) => setLastName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Full Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={fullName} onChange={({ target }) => setFullName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Sender Address Line1
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
                Sender  Country
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Country' value={country} onChange={({ target }) => setCountry(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Nationality
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Nationality' value={receiverNationality} onChange={({ target }) => setReceiverNationality(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Date of Birth
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Date of Birth' value={receiverDob} onChange={({ target }) => setReceiverDob(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Description
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Description' value={descriptionText} onChange={({ target }) => setDescriptionText(target.value)} />
            </Stack>
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
              <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' value={receiverIssuerCountry} onChange={({ target }) => setReceiverIssuerCountry(target.value)} />
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
              <OutlinedInput sx={{ height: 40 }} placeholder='Country' value={receiverCountry} onChange={({ target }) => setReceiverCountry(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver  Title
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Full Name' value={receiverTitle} onChange={({ target }) => setReceiverTitle(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver First Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='First Name' value={receiverFirstName} onChange={({ target }) => setReceiverFirstname(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Middle Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Middle Name' value={receiverMiddleName} onChange={({ target }) => setReceiverMiddleName(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Receiver Last Name
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
              <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' value={remitancePurpose} onChange={({ target }) => setRemitancePurpose(target.value)} />
            </Stack>
            <Stack alignItems='center' justifyContent='space-between' direction='row'>
              <Typography color="#575757" fontWeight='500'>
                Recipient Name
              </Typography>
              <OutlinedInput sx={{ height: 40 }} placeholder='Recipient Name' value={recipientName} onChange={({ target }) => setRecipientName(target.value)} />
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
