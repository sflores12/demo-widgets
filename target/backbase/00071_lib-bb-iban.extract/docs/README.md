# lib-bb-iban


Version: **1.1.107**

IBAN structure validation library

## Table of Contents
- **Exports**<br/>    <a href="#isValidIBAN">isValidIBAN(iban)</a><br/>    <a href="#isValidBBAN">isValidBBAN(iban)</a><br/>    <a href="#formatByGroups">formatByGroups(str, symbol, groupLen)</a><br/>
- **lib-bb-iban**<br/>    <a href="#lib-bb-ibanexplodeString">explodeString(str, symbol, groupLen)</a><br/>

## Exports


### <a name="isValidIBAN"></a>*isValidIBAN(iban)*

Validates IBAN structure defined in ISO 13616-1 and ISO/IEC 7064 (MOD97-10).


| Parameter | Type | Description |
| :-- | :-- | :-- |
| iban | String | International bank account number. |

##### Returns

Boolean - **

### <a name="isValidBBAN"></a>*isValidBBAN(iban)*

Validates BBAN structure defined in ISO 13616-1.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| iban | String | International bank account number. |

##### Returns

Boolean - **

### <a name="formatByGroups"></a>*formatByGroups(str, symbol, groupLen)*

Splits the string up with spaces by groups of 4.
"IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"

| Parameter | Type | Description |
| :-- | :-- | :-- |
| str | String |  |
| symbol | String |  |
| groupLen | Number |  |

##### Returns

String - **

---

### <a name="lib-bb-ibanexplodeString"></a>*explodeString(str, symbol, groupLen)*

Splits the string up with spaces (or other symbol)
by groups of 4 (or other number).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| str | String |  |
| symbol | String |  |
| groupLen | Number |  |

##### Returns

String - **
