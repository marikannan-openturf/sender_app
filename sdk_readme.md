# Terrapay Library
​
The Terrapay Node library provides access to the Terrapay API from
applications written in server-side JavaScript.
## Documentation
​
See the [API docs](http://175.41.178.137/docs/#introduction).
​
## Requirements
​
Node 8, 10 or higher.
​
## Installation
​
Download and Install the package with:
​
```sh
npm install ..\terrapay-sdk-1.0.0.tgz --save
```
​
## Usage
​
The package needs to be configured with your partner's terrapay credentials 
provided
​
#### `View Account Status for wallet`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const viewAccountStatusWallet = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.accountStatus.viewAccountStatus({
        instrument: 'mobile-wallet',
        msisdn: '+9779840002320',
        beneficiaryName: 'David Robinson',
    })
​
    console.log(data);
};
​
viewAccountStatusWallet();
```
#### `View Account Status of a Mobile Wallet Parameters`
​
| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Data Type | Requirement |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| instrument      | "mobile-wallet" or "bank-account" are accepted values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String    | Mandatory   |
| msisdn          | Beneficiary MSISDN with country code. This corresponds to the mobile wallet to which funds are to be transferred. Eg. +91xxxxxxxxxx                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String    | Mandatory   |
| beneficiaryName | Full KYC name of the beneficiary as registered with the wallet provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String    | Mandatory   |
| senderName      | Full name of the sender as per KYC Id document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String    | Optional    |
| provider        | This is a code which indicates the mobile operator network to which the transaction is to be sent. <br /> This field is conditional. If not set, TerraPay will automatically find the mobile network that the beneficiary MSISDN belongs to and will validate the MSISDN.<br /> If set, then TerraPay will validate the MSISDN against the mobile network specified. In case the provider code does not match the mobile network the validation will be rejected. <br />NOTE:<br />● Mandatory for wallet transactions to China, Bangladesh, Indonesia, Nepal, Pakistan, Philippines, South Sudan, Togo, Vietnam, Cambodia, Columbia & Haiti.<br />● Optional for other countries. | Numeric   | Conditional |
​
#### `View Account Status for Bank`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const viewAccountStatusBank = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.accountStatus.viewAccountStatus({
        instrument: 'bank-account',
        accountId:'50100002965304',
        beneficiaryName:'Deepa Jain',
        bankcode:'HDFC0001626',
        bankname:'HDFC Bank',
        countryCode:'IN'
    })
​
    console.log(data);
};
​
viewAccountStatusBank();
```
​
#### `View Account Status of a Bank Parameters`
​
| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Data Type | Requirement |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| instrument      | "mobile-wallet" or "bank-account" are accepted values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String    | Mandatory   |
| msisdn          | Beneficiary MSISDN with country code. This corresponds to the mobile wallet to which funds are to be transferred. Eg. +91xxxxxxxxxx                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String    | Mandatory   |
| beneficiaryName | Full KYC name of the beneficiary as registered with the wallet provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String    | Mandatory   |
| senderName      | Full name of the sender as per KYC Id document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String    | Optional    |
| bankcode        | Bank Code as required in the destination Country. It can be one of <br /> IFSC Code<br />Routing Code<br />Swift BIC<br />This code is specific to bank integration in each country and may be mandatory in certain destination countries                                                                                                                                                                                                                                                                                                                                                                                                                                          | String    | Conditional |
| provider        | This is a code which indicates the mobile operator network to which the transaction is to be sent. <br /> This field is conditional. If not set, TerraPay will automatically find the mobile network that the beneficiary MSISDN belongs to and will validate the MSISDN.<br /> If set, then TerraPay will validate the MSISDN against the mobile network specified. In case the provider code does not match the mobile network the validation will be rejected. <br />NOTE:<br />● Mandatory for wallet transactions to China, Bangladesh, Indonesia, Nepal, Pakistan, Philippines, South Sudan, Togo, Vietnam, Cambodia, Columbia & Haiti.<br />● Optional for other countries. | Numeric   | Conditional |
| bankname        | Full name of the beneficiary bank                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | String    | Mandatory   |
| countryCode     | ISO Alpha 2 country code of the destination country. Eg. NG for Nigeria                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | String    | Mandatory   |
| banksubcode     | This is a code that indicates the branch code of the specific bank to which the transaction is to be sent.<br />NOTE:<br />● Mandatory for bank transactions to Brazil & Uruguay.<br />● If the transaction is to Bangladesh then partner can send rounting number in banksubcode and they do not have to send the provider code.<br />● Optional for other countries.                                                                                                                                                                                                                                                                                                             | String    | Conditional |
​
#### `Create a Quotation to Mobile Wallet`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const createQuotationWallet = async () => {
   let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    });
    let data = await terrapay.quotation.createQuotation({
        "requestDate": "2017-06-20 12:27:16",
        "creditParty": [
            {
                "key": "msisdn",
                "value": "+9779840002320"
            }
        ],
        "requestAmount": "500",
        "requestCurrency": "NPR",
        "quotes": [
            {
                "sendingCurrency": "USD",
                "receivingCurrency": "NPR"
            }
        ]
    })
    console.log(data)
};
createQuotationWallet();
```
​
#### `Create a Quotation to Bank`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const createQuotationWallet = async () => {
   let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    });
    let data = await terrapay.quotation.createQuotation({
        "requestDate": "2017-06-20 12:27:16",
        "creditParty": [
            {
            "key": "bankaccountno",
            "value": "50100002965304"
            },
            {
                "key": "receivingCountry",
                "value": "IN"
            }
        ],
        "requestAmount": "500",
        "requestCurrency": "INR",
        "quotes": [
            {
                "sendingCurrency": "USD",
                "receivingCurrency": "INR"
            }
        ]
    })
    console.log(data)
};
createQuotationWallet();
```
​
#### `Create a Quotation Parameters`
​
| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Data Type | Requirement |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| requestDate     | The creation date and time of the transaction as supplied by the client in YYYY-MM-DD HH:mm:ss                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | DateTime  | Mandatory   |
| requestAmount   | Requested quotation amount with precision of 2 decimal places                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | String    | Mandatory   |
| requestCurrency | Currency of the requestAmount provided in ISO 4217 format. Eg. EUR. <br /> If the requestCurrency is the source currency, then the requestAmount is taken as what the sender will pay and the quote is calculated in the destination currency and the quote amount returned will be what the beneficiary will receive.<br />If the requestCurrency is the destination currency, then the requestAmount is taken as what the beneficiary has to receive and the quote is calculated in source currency and the quote amount returned will be what the sender has to pay. (Reverse Quote). | String    | Mandatory   |
**debitParty**:				
key	| msisdn | String | Optional
value | Sender Mobile Number with country code. Eg.+91xxxxxxxxxx | String |Optional
**creditParty**:				
Key	| msisdn | String | Conditional
Value | Beneficiary Mobile Number with country code. Eg.+91xxxxxxxxxx. |String | Optional - For Bank Accounts<br/>Mandatory - For Mobile Wallet
Key	| bankaccountno |	String |	Conditional
Value|"Recieve Bank Account in the destination country for receiving funds. Eg. 2365417895. <br/>This key/value pair is optional if the transfer is to a mobile wallet.". | String | Mandatory - For Bank Accounts<br/>Optional - For Mobile Wallet
Key	| receivingCountry |	String |	Conditional
Value|Destination Country. Eg. NG.<br/>This key/value pair is optional if the transfer is to a mobile wallet. | String | Mandatory - For Bank Accounts<br/>Optional - For Mobile Wallet
**quotes**:				
sendingCurrency | Currency of the debitor in ISO 4217 format. Eg. EUR | String | Mandatory
receivingCurrency | Currency of the creditor in ISO 4217 format. Eg. NGN |String | Mandatory
​
#### `Create a transaction to a Mobile Wallet`
​
This API is used to create business transaction. This is similar to create a transaction with additional parameters required to conduct business transaction. Business transactions can be as follows:<br/>
* Business to Business (B2B)
* Business to Person (B2P)
* Person to Business (P2B)
  
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const createTransactionWallet = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.transaction.createTransaction({
        "amount": "500",
        "currency": "NPR",
        "type": "inttransfer",
        "descriptionText": "Gift for my brother",
        "requestDate": "2021-05-23 08:19:36",
        "requestingOrganisationTransactionReference": "SrcTxnId001",
        "debitParty": [
            {
            "key": "msisdn",
            "value": "+971810456234"
            }
        ],
        "creditParty": [
            {
            "key": "msisdn",
            "value": "+9779840002320"
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
            "lastName": "Sender",
            "fullName": "Test Sender"
            }
        },
            "recipientKyc": {
            "subjectName": {
            "firstName": "David",
            "lastName": "Robinson",
            "fullName": "David Robinson"
            }
        },
        "internationalTransferInformation": {
            "quoteId": "QT037C1NQ6BHMV59A3",
            "receivingCountry": "NP",
            "remittancePurpose": "Family Maintainance",
            "sourceOfFunds": "Salary",
            "relationshipSender": "Brother"
        }
    })
​
    console.log(data);
};
​
createTransactionWallet();
```
#### `Create a Transaction Parameters`
​
| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                   | Data Type | Requirement |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| requestDate                                | The creation date and time of the transaction as supplied by the sending partner in YYYY-MM-DD HH:mm:ss format                                                                                                                                                                                                                                                                | String    | Mandatory   |
| amount                                     | Destination amount payable to the beneficiary with precision of 2 decimal places.                                                                                                                                                                                                                                                                                             | String    | Mandatory   |
| currency                                   | Destination amount currency in ISO 4217 format. Eg. NGN                                                                                                                                                                                                                                                                                                                       | String    | Mandatory   |
| type                                       | The harmonized Transaction Type. Fixed default value "inttransfer"                                                                                                                                                                                                                                                                                                            | String    | Mandatory   |
| descriptionText                            | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on the SMS and on the account statement.                                                                                                                                                                                                         | String    | Optional    |
| requestingOrganisationTransactionReference | Unique Transaction reference generated by the sending partner.                                                                                                                                                                                                                                                                                                                | String    | Mandatory   |
| provider                                   | Provider value should be same as sent in the validation request. If a different value is sent then the transaction will be rejected. <br/>NOTE:<br/>● Mandatory for transactions to Bangladesh (bank & wallet), China (bank & wallet), Nepal (wallet), Pakistan (wallet), Philippines (wallet), South Sudan (wallet), Indonesia (wallet).<br/>● Optional for other countries. | Numeric   | Optional    |
**debitParty**:				
key	| msisdn	| String | Mandatory
value| Sender Mobile Number with country code. Eg. +91xxxxxxxxxx	| String | Mandatory
**creditParty**:				
Key	| msisdn	| String | Conditional
Value| Beneficiary Mobile Number with country code. Eg.+91xxxxxxxxxx.	| String | Optional - For Bank Accounts<br/>Mandatory - For Mobile Wallet
Key |	bankaccountno	| String | Conditional
Value | Beneficiary Bank Account or IBAN Number as applicable in the destination country for receiving funds. Eg. 2365417895.<br/>This key/value pair is optional if the transfer is to a mobile wallet.	| String | Mandatory - For Bank Accounts<br/>Optional - For Mobile Wallet
Key | sortcode	| String | Conditional
Value | Bank Code as required in the destination Country. It can be one of:<br/>● IFSC Code<br/>● Routing Code<br/>● Swift BIC<br/>● This code is specific to bank integration in each country.	| String | Mandatory - For bank accounts<br/>Optional - For mobile wallets
Key | organisationid | String | Conditional
Value | Full name of the beneficiary bank	| String | Mandatory - For bank accounts<br/>Optional - For mobile wallets
Key	| banksubcode	| String | Conditional
Value | This is a code that indicates the branch code of the specific bank to which the transaction is to be sent.<br/>NOTE:<br/>● Mandatory for bank transactions to Brazil & Uruguay.<br/>● Optional for other countries.<br/>● If the transaction is to Bangladesh then partner can send rounting number in banksubcode and they do not have to send the provider code.	| String | Mandatory - For bank accounts<br/>Optional - For mobile wallets
**senderKyc**:				
nationality	| Nationality of the customer in ISO Alpha-2 format. Eg. US	| String | Mandatory
dateOfBirth	| Customer's Date of Birth in YYYY-MM-DD format	| String | Mandatory
gender | Customer's Gender. Enumeration = (M)ale, (F)emale, (U)nspecified | String | Optional
**senderKyc:idDocument**:				
idType | Customer's Id document type:<br/>nationalidcard<br/>drivinglicense<br/>passport	| String | Mandatory
idNumber | Customer's Id number.<br/>For any other type, it should be Passport Number,Document number. Eg. M123456,123434567	| String | Mandatory
issueDate | Customer's Id document issue date in YYYY-MM-DD format.
| String | Optional
expiryDate | Customer's Id document expiry date in YYYY-MM-DD format.
| String | Mandatory
issuerCountry | Country where the identification type was issued in ISO Alpha-2 format.	| String | Optional
**senderKyc:postalAddress**:				
addressLine1 | First line of the address	| String | Mandatory
addressLine2 |	Second line of the address	| String | Optional
addressLine3 |	Third line of the address	| String | Optional
city |	City/Town of sender's address	| String | Mandatory
stateProvince |	State of sender's address	| String | Optional
postalCode	| Postal Code of sender's address	| String | Optional
country	| Country in ISO Alpha-2 format	| String | Mandatory
**senderKyc:subjectName**:
title | Title of the Sender	| String | Optional
firstName | First name of the Sender	| String | Mandatory
middleName | Middle name of the Sender	| String | Optional
lastName | Last name of the Sender	| String | Mandatory
fullName | Full name of the Sender	| String | Mandatory
**recipientKyc**:				
nationality	| Nationality of the customer in ISO Alpha-2 format. Eg. US	| String | Conditional
dateOfBirth	| Customer's Date of Birth in YYYY-MM-DD format	| String | Conditional
**recipientKyc:idDocument**:				
idType | Customer's Id document type: <br/>nationalidcard<br/>drivinglicense<br/>passport	| String | Conditional
idNumber | Customer's Id number. <br/> For any other type, it should be Passport Number,Document number. Eg. M123456,123434567	| String | Conditional
issueDate | Customer's Id document issue date in YYYY-MM-DD format.
| String | Optional
expiryDate | Customer's Id document expiry date in YYYY-MM-DD format.
| String | Conditional
issuerCountry | Country where the identification type was issued in ISO Alpha-2 format.	| String | Optional
**recipientKyc:postalAddress**:				
addressLine1 | First line of the address	| String | Conditional
addressLine2 | Second line of the address	| String | Optional
addressLine3 | Third line of the address	| String | Optional
city | City/Town of sender's address	| String | Conditional
stateProvince | State of sender's address	| String | Optional
postalCode | Postal Code of sender's address	| String | Optional
country	| Country in ISO Alpha-2 format	| String | Conditional
**recipientKyc:subjectName**:				
firstName | First name of the recipient	| String | Mandatory
lastName | Last name of the recipient	| String | Mandatory
fullName | Full name of the recipient	| String | Mandatory
**internationalTransferInformation**:				
quoteId | The specific quoteId to be used for the transaction.	| String | Mandatory
receivingCountry | Destination Country of international remittance in ISO Alpha 2 format. Eg. NG	| String | Mandatory
remittancePurpose |	Reason for the transfer.<br/> [Click here to find the accepted values.](#p2p-purpose-for-transaction) | String | Mandatory
sourceOfFunds | Source of funds.<br/> [Click here to find the accepted values.](#p2p-source-of-funds) | String | Mandatory
relationshipSender | The relation between the sender and the beneficiary.<br/> [Click here to find the accepted values.](#p2p-relationship) | String | Mandatory
​
#### `View A Transaction`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const viewTransaction = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.transaction.viewTransaction({
            transactionReference: 'SrcTxnId001'
    })
​
    console.log(data);
};
​
viewTransaction();
```
​
#### `View transaction request Parameters`
| Parameter name | Description | Data Type | Requirement |
| -------------- | ----------- | --------- | ----------- |
transactionReference | Unique reference for the transaction which was returned in the response of the createTransaction API or the unique reference generated by the partner's system and sent in the createTranactin API request. | String |Mandatory
​
#### `Ledger Balance all currencies`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const ledgerBalance = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.ledgerBalance.ledgerBalance()
​
    console.log(data);
};
​
ledgerBalance();
```
​
#### `Get Balance for a single currency ledger`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const ledgerBalanceByCurrency = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.ledgerBalance.ledgerBalance({
        currency: 'USD'
    })
​
    console.log(data);
};
​
ledgerBalanceByCurrency();
```
​
#### `Get All Corridor Quotation`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const corridorQuotationGetAll = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.quotation.getQuotation()
​
    console.log(data);
};
​
corridorQuotationGetAll();
```
#### `Get by currency Corridor Quotation`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const corridorQuotationGetByCurrency = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.quotation.getQuotation({
        currency: 'USD'
    })
​
    console.log(data);
};
​
corridorQuotationGetByCurrency();
```
​
#### `Cancel Transaction`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const cancelTransaction = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.cancelTransaction.cancelTransaction({
        txnId: 'SrcTxnId001',
        reason: "cancelling",
    })
​
    console.log(data);
};
​
cancelTransaction();
```
​
#### `Reverse Transaction`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const reverseTransaction = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.reverseTransaction.reverseTransaction({
        reversalReason: "reversalreason",
        txnId: "TPKM000000056269"
    })
​
    console.log(data);
};
​
reverseTransaction();
```
#### `Get Bank List`
<!-- prettier-ignore -->
```js
const Terrapay = require('terrapay');
​
const getBankList = async () => {
​
    let terrapay = Terrapay({
        username: 'TerrapayUser',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        date: '2017-06-28 09:02:16',
        originCountry: 'CH'
    })
​
    let data = await terrapay.bankList.getBankList({
        countryCode: 'NP'
    })
​
    console.log(data);
};
​
getBankList();
```
​
#### `P2P Purpose for Transaction`
| Sl. no. | Purpose                     |
| ------- | --------------------------- |
| 1       | Business Profits to Parents |
| 2       | Business Travel             |
| 3       | Family Maintenance          |
| 4       | Salary                      |
| 5       | Savings                     |
| 6       | Medical Expenses            |
| 7       | Tution Fees                 |
| 8       | Education Support           |
| 9       | Gift                        |
​
#### `P2P Source of Funds`
| Sl. no. | Source of Funds |
| ------- | --------------- |
| 1       | Salary          |
| 2       | Savings         |
| 3       | Lottery         |
| 4       | Loan            |
| 5       | Business Income |
| 6       | Others          |
​
#### `P2P Relationship`
| Sl. no. | Relationship |
| ------- | ------------ |
| 1       | Self         |
| 2       | Father       |
| 3       | Mother       |
| 4       | Spouse       |
| 5       | Son          |
| 6       | Daughter     |
| 7       | Brother      |
| 8       | Sister       |
| 9       | Friend       |
| 10      | Employer     |
| 11      | Colleague    |