# data-bb-arrangements-http-ng


Version: **0.1.1**

A data module for accessing the Arrangements REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import arrangementsDataModuleKey, {
  arrangementsDataKey,
} from 'data-bb-arrangements-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#arrangementsDataKey">arrangementsDataKey</a><br/>
- **ArrangementsData**<br/>    <a href="#ArrangementsData#postArrangementsRecord">#postArrangementsRecord(data)</a><br/>    <a href="#ArrangementsData#putArrangementsRecord">#putArrangementsRecord(data)</a><br/>    <a href="#ArrangementsData#patchArrangementsRecord">#patchArrangementsRecord(data)</a><br/>    <a href="#ArrangementsData#getArrangementsInternalRecord">#getArrangementsInternalRecord(externalId, params)</a><br/>    <a href="#ArrangementsData#getArrangementsRecord">#getArrangementsRecord(id, params)</a><br/>    <a href="#ArrangementsData#getAccountsBalance">#getAccountsBalance(params)</a><br/>    <a href="#ArrangementsData#schemas">#schemas</a><br/>    <a href="#ArrangementsData#schemas.postArrangementsRecord">#schemas.postArrangementsRecord</a><br/>    <a href="#ArrangementsData#schemas.putArrangementsRecord">#schemas.putArrangementsRecord</a><br/>
- **ArrangementsDataProvider**<br/>    <a href="#ArrangementsDataProvider#setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#ArrangementsDataProvider#$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#ArrangementsData.ArrangemenItemUpdateBank">ArrangementsData.ArrangemenItemUpdateBank</a><br/>    <a href="#ArrangementsData.ArrangementAddedResponse">ArrangementsData.ArrangementAddedResponse</a><br/>    <a href="#ArrangementsData.ArrangementItemPost">ArrangementsData.ArrangementItemPost</a><br/>    <a href="#ArrangementsData.ArrangementItemWithDetails">ArrangementsData.ArrangementItemWithDetails</a><br/>    <a href="#ArrangementsData.ArrangementPatch">ArrangementsData.ArrangementPatch</a><br/>    <a href="#ArrangementsData.BalanceItem">ArrangementsData.BalanceItem</a><br/>    <a href="#ArrangementsData.DebitCardItem">ArrangementsData.DebitCardItem</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="arrangementsDataKey"></a>*arrangementsDataKey*

Angular dependency injection key for the ArrangementsData service

**Type:** *String*


---

## ArrangementsData

Public api for data-bb-arrangements-http-ng service

### <a name="ArrangementsData#postArrangementsRecord"></a>*#postArrangementsRecord(data)*

Create arrangement

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | <a href="#ArrangementsData.ArrangementItemPost">ArrangementsData.ArrangementItemPost</a> | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *Resolves data value as <a href="#ArrangementsData.ArrangementAddedResponse">ArrangementsData.ArrangementAddedResponse</a> on success*

## Example

```javascript
arrangementsData
 .postArrangementsRecord(data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ArrangementsData#putArrangementsRecord"></a>*#putArrangementsRecord(data)*

Update arrangement by an arrangement id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | <a href="#ArrangementsData.ArrangemenItemUpdateBank">ArrangementsData.ArrangemenItemUpdateBank</a> | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - **

## Example

```javascript
arrangementsData
 .putArrangementsRecord(data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ArrangementsData#patchArrangementsRecord"></a>*#patchArrangementsRecord(data)*

Updates limited set of fields for an arrangement by an arrangement id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | <a href="#ArrangementsData.ArrangementPatch">ArrangementsData.ArrangementPatch</a> | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - **

## Example

```javascript
arrangementsData
 .patchArrangementsRecord(data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ArrangementsData#getArrangementsInternalRecord"></a>*#getArrangementsInternalRecord(externalId, params)*

Retrieve Internal Arrangement Id for External Id.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| params | Object | Map of query parameters. |

##### Returns

Promise of <a href="#Response">Response</a> - **

## Example

```javascript
arrangementsData
 .getArrangementsInternalRecord(externalId, params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ArrangementsData#getArrangementsRecord"></a>*#getArrangementsRecord(id, params)*

Retrieve a single arrangement with details.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object | Map of query parameters. |

##### Returns

Promise of <a href="#Response">Response</a> - *Resolves data value as <a href="#ArrangementsData.ArrangementItemWithDetails">ArrangementsData.ArrangementItemWithDetails</a> on success*

## Example

```javascript
arrangementsData
 .getArrangementsRecord(id, params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ArrangementsData#getAccountsBalance"></a>*#getAccountsBalance(params)*

Retrieve balance by ArrangementIds

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.arrangementIds | String | arrangementIds. |

##### Returns

Promise of <a href="#Response">Response</a> - *Resolves data value as <a href="#ArrangementsData.BalanceItem">ArrangementsData.BalanceItem</a> on success*

## Example

```javascript
arrangementsData
 .getAccountsBalance(params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="ArrangementsData#schemas"></a>*#schemas*

Schema data. Keys of the object are names of the POST and PUT methods

Note: The schema is not strictly a JSON schema. It is a whitelisted set of
keys for each object property. The keys that are exposed are meant for validation
purposes.

The full list of *possible* keys for each property is:
type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
properties, items, minItems, maxItems, uniqueItems and required.

See http://json-schema.org/latest/json-schema-validation.html for more details
on the meaning of these keys.

The "required" array from JSON schema is tranformed into a "required" boolean
on each property. This is for ease of use.

**Type:** *Object*

### <a name="ArrangementsData#schemas.postArrangementsRecord"></a>*#schemas.postArrangementsRecord*

An object describing the JSON schema for the postArrangementsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalLegalEntityId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_.-]*$",
      "required": true
    },
    "externalProductId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_.-]*$",
      "required": true
    },
    "alias": {
      "type": "string",
      "maxLength": 64,
      "required": false
    },
    "legalEntityId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_.-]*$",
      "required": true
    },
    "productId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_.-]*$",
      "required": false
    }
  }
}
```
### <a name="ArrangementsData#schemas.putArrangementsRecord"></a>*#schemas.putArrangementsRecord*

An object describing the JSON schema for the putArrangementsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9 _.-]*$",
      "required": false
    },
    "bookedBalance": {
      "type": "number",
      "required": false
    },
    "availableBalance": {
      "type": "number",
      "required": false
    },
    "creditLimit": {
      "type": "number",
      "required": false
    },
    "IBAN": {
      "type": "string",
      "maxLength": 34,
      "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[a-zA-Z0-9_.-]*",
      "required": false
    },
    "BBAN": {
      "type": "string",
      "maxLength": 30,
      "required": false
    },
    "currency": {
      "enum": [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BOV",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHE",
        "CHW",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "COU",
        "CRC",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRO",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MXV",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STD",
        "SVC",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "USN",
        "UYI",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL"
      ],
      "required": true
    },
    "externalTransferAllowed": {
      "type": "boolean",
      "required": false
    },
    "urgentTransferAllowed": {
      "type": "boolean",
      "required": false
    },
    "accruedInterest": {
      "type": "number",
      "required": false
    },
    "number": {
      "type": "string",
      "maxLength": 4,
      "required": false
    },
    "principalAmount": {
      "type": "number",
      "required": false
    },
    "currentInvestmentValue": {
      "type": "number",
      "minimum": 0,
      "required": false
    },
    "productNumber": {
      "type": "string",
      "required": false
    },
    "BIC": {
      "type": "string",
      "required": false
    },
    "bankBranchCode": {
      "type": "string",
      "required": false
    },
    "externalArrangementId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_.-]*$",
      "required": true
    }
  }
}
```

---

## ArrangementsDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-arrangements-http-ng:arrangementsDataProvider* |


### <a name="ArrangementsDataProvider#setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="ArrangementsDataProvider#$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-arrangements-http-ng:arrangementsDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-arrangements-http-ng:arrangementsDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="ArrangementsData.ArrangemenItemUpdateBank"></a>*ArrangementsData.ArrangemenItemUpdateBank*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| bookedBalance | Number (optional) |  |
| availableBalance | Number (optional) |  |
| creditLimit | Number (optional) |  |
| IBAN | String (optional) |  |
| BBAN | String (optional) |  |
| currency | String |  |
| externalTransferAllowed | Boolean (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| accruedInterest | Number (optional) |  |
| number | String (optional) |  |
| principalAmount | Number (optional) |  |
| currentInvestmentValue | Number (optional) |  |
| productNumber | String (optional) |  |
| BIC | String (optional) |  |
| bankBranchCode | String (optional) |  |
| externalArrangementId | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ArrangementsData.ArrangementAddedResponse"></a>*ArrangementsData.ArrangementAddedResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ArrangementsData.ArrangementItemPost"></a>*ArrangementsData.ArrangementItemPost*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalLegalEntityId | String |  |
| externalProductId | String |  |
| alias | String (optional) |  |
| legalEntityId | String |  |
| productId | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ArrangementsData.ArrangementItemWithDetails"></a>*ArrangementsData.ArrangementItemWithDetails*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalArrangementId | String |  |
| externalLegalEntityId | String |  |
| externalProductId | String |  |
| name | String (optional) |  |
| alias | String (optional) |  |
| bookedBalance | Number (optional) |  |
| availableBalance | Number (optional) |  |
| creditLimit | Number (optional) |  |
| IBAN | String (optional) |  |
| BBAN | String (optional) |  |
| currency | String (optional) |  |
| externalTransferAllowed | Boolean (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| accruedInterest | Number (optional) |  |
| number | String (optional) |  |
| principalAmount | Number (optional) |  |
| currentInvestmentValue | Number (optional) |  |
| legalEntityId | String |  |
| productId | String |  |
| productNumber | String (optional) |  |
| accountOpeningDate | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| valueDateBalance | Number (optional) |  |
| overdraftAmount | Number (optional) |  |
| overdraftInterestRate | Number (optional) |  |
| overdraftExpiryDate | String (optional) |  |
| overdraftLimit | Number (optional) |  |
| BIC | String (optional) |  |
| bankBranchCode | String (optional) |  |
| startDate | String (optional) |  |
| term | String (optional) |  |
| maturityDate | String (optional) |  |
| maturityAmount | Number (optional) |  |
| autoRenevalIndicator | Boolean (optional) |  |
| interestPaymentFrequency | Number (optional) |  |
| interestSettlementAccount | String (optional) |  |
| outstandingPrincipal | Number (optional) |  |
| monthlyInstalmentAmount | Number (optional) |  |
| amountInArrear | Number (optional) |  |
| minimumRequiredBalance | Number (optional) |  |
| creditCardAccountNumber | String (optional) |  |
| validThru | String (optional) |  |
| applicableInterestRate | Number (optional) |  |
| remainingCredit | Number (optional) |  |
| outstandingPayment | Number (optional) |  |
| minimumPayment | Number (optional) |  |
| minimumPaymentDueDate | String (optional) |  |
| totalInvestmentValue | Number (optional) |  |
| debitCard | Array (optional) of <a href="#ArrangementsData.DebitCardItem">ArrangementsData.DebitCardItem</a> |  |
| visible | Boolean (optional) | User specific visibility for an arrangement |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ArrangementsData.ArrangementPatch"></a>*ArrangementsData.ArrangementPatch*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification of arrangement |
| alias | String (optional) | User specific naming for an arrangement |
| visible | Boolean (optional) | User specific visibility for an arrangement |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ArrangementsData.BalanceItem"></a>*ArrangementsData.BalanceItem*


**Type:** *Array of <a href="#ArrangementsData.BalanceItem">ArrangementsData.BalanceItem</a>*


### <a name="ArrangementsData.DebitCardItem"></a>*ArrangementsData.DebitCardItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| number | String (optional) |  |
| expiryDate | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
