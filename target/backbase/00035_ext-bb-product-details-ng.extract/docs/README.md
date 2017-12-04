# ext-bb-product-details-ng


Version: **1.0.2**

Extension used for displaying product details
in a certain format per product kind

## Imports

* ui-bb-empty-state-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-popover

---

## Example

```javascript
<!-- Product summary widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-product-details-ng</value>
</property>
```

## Table of Contents
- **ext-bb-product-details-ng**<br/>    <a href="#ext-bb-product-details-ngmaskCardNumber">maskCardNumber(number)</a><br/>    <a href="#ext-bb-product-details-ngprocessExtendedProduct">processExtendedProduct(product)</a><br/>    <a href="#ext-bb-product-details-nggetInterestPaymentFrequency">getInterestPaymentFrequency(product)</a><br/>    <a href="#ext-bb-product-details-nggetTermUnitFrequency">getTermUnitFrequency(product)</a><br/>    <a href="#ext-bb-product-details-nggetAutoRenewalIndicator">getAutoRenewalIndicator(product)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKindView">ProductKindView</a><br/>

---

### <a name="ext-bb-product-details-ngmaskCardNumber"></a>*maskCardNumber(number)*

Sets a prefix for a number property which contains last
4 characters for a card number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | String |  |

##### Returns

String - *prefix + number*

---

### <a name="ext-bb-product-details-ngprocessExtendedProduct"></a>*processExtendedProduct(product)*

Hook for processing product kinds in an abstracted format
ready to be displayed to the user.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | product to process |

##### Returns

Object - **

---

### <a name="ext-bb-product-details-nggetInterestPaymentFrequency"></a>*getInterestPaymentFrequency(product)*

Get the translation key for an interest payment frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object |  |

##### Returns

String - *Translation key label*

---

### <a name="ext-bb-product-details-nggetTermUnitFrequency"></a>*getTermUnitFrequency(product)*

Get the translation key for a term unit frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object |  |

##### Returns

String - *Translation key label*

---

### <a name="ext-bb-product-details-nggetAutoRenewalIndicator"></a>*getAutoRenewalIndicator(product)*

Get the translation key auto renewal indicator

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object |  |

##### Returns

String - *Translation key label*

## Type Definitions


### <a name="ProductKindView"></a>*ProductKindView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internal Product identifier |
| currency | String | ISO currency code |
| generalDetails | Object | section for general details of the product |
| name | String | Product name value to be displayed |
| valueOne | [any](#any) (optional) | First value to be displayed for this section |
| valueOneLabel | String | Label to describe the first value |
| valueTwo | [any](#any) (optional) | Second value to be displayed |
| valueTwoLabel | String | Label to describe the second value |
| valueTwoType | [any](#any) (optional) | Type of the second value |
| valueThree | [any](#any) (optional) | Third value to be displayed |
| valueThreeLabel | String (optional) | Label to describe the third value |
| valueThreeType | [any](#any) (optional) | Type of the third value |
| valueFour | [any](#any) (optional) | Fourth value to be displayed |
| valueFourLabel | String (optional) | Label to describe the fourth value |
| valueFourType | [any](#any) (optional) | Type of the fourth value |
| interestDetails | Object | section for interest details of the product |
| headerLabel | String | Label to describe the section |
| valueOne | [any](#any) (optional) | First value to be displayed for this section |
| valueOneLabel | String | Label to describe the first value |
| valueTwo | [any](#any) (optional) | Second value to be displayed |
| valueTwoLabel | String | Label to describe the second value |
| valueTwoType | [any](#any) (optional) | Type of the second value |
| valueThree | [any](#any) (optional) | Third value to be displayed |
| valueThreeLabel | String (optional) | Label to describe the third value |
| valueThreeType | [any](#any) (optional) | Type of the third value |
| valueFour | [any](#any) (optional) | Fourth value to be displayed |
| valueFourLabel | String (optional) | Label to describe the fourth value |
| valueFourType | [any](#any) (optional) | Type of the fourth value |
| maturityDetails | Object | section for maturity details of the product |
| headerLabel | String | Label to describe the section |
| valueOne | [any](#any) (optional) | First value to be displayed for this section |
| valueOneLabel | String | Label to describe the first value |
| valueTwo | [any](#any) (optional) | Second value to be displayed |
| valueTwoLabel | String | Label to describe the second value |
| valueTwoType | [any](#any) (optional) | Type of the second value |
| valueThree | [any](#any) (optional) | Third value to be displayed |
| valueThreeLabel | String (optional) | Label to describe the third value |
| valueThreeType | [any](#any) (optional) | Type of the third value |
| valueFour | [any](#any) (optional) | Fourth value to be displayed |
| valueFourLabel | String (optional) | Label to describe the fourth value |
| valueFourType | [any](#any) (optional) | Type of the fourth value |
| associatedCards | Object | section for listing associated cards of the product |
| headerLabel | String | Label to describe the section |
| sectionType | [any](#any) (optional) | Type of the section |
| debitCards | Object | List of debit cards associated to the product |
| debitCardLabel | String | Label to describe the debit card |
| debitCardExpiryDateLabel | String | Expiry date of the debit card |
| accountLabel | String | Label to describe the account associated to the product |
| account | String | Associated account to the product |
| activityDetails | Object | section for listing activity details of the product |
| accountOpeningDateValue | Date | Date when the account was created |
| accountOpeningDateLabel | String | Label to describe the account opening date |
| lastUpdateDateValue | Date | Date when the account was last updated |
| lastUpdateDateLabel | String | Label to describe the last update date |

---
