# ext-bbm-transactions-details-ng


Version: **1.0.156**

Mobile extension for transactions details widget.

## Imports

* ui-bb-format-amount
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- transactions widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-transactions-details-ng</value>
</property>
```

## Table of Contents
- **ext-bbm-transactions-details-ng**<br/>    <a href="#ext-bbm-transactions-details-nggetSignedAmount">getSignedAmount(transaction)</a><br/>

---

### <a name="ext-bbm-transactions-details-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*
