# widget-bb-manage-payment-orders-ng


Version: **1.0.1**

Widget to manage payment orders

## Imports

* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **ManagePaymentOrderController**<br/>    <a href="#ManagePaymentOrderController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processPaymentOrders">#processPaymentOrders(paymentOrders)</a><br/>    <a href="#Hooks_processRequestParams">#processRequestParams(requestParams)</a><br/>
- **Type Definitions**<br/>    <a href="#PaymentOrdersResponse">PaymentOrdersResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>

---

## ManagePaymentOrderController

Controller for managing payment order

### <a name="ManagePaymentOrderController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

## Example

```javascript
<div ng-controller="ManagePaymentOrderController as $ctrl">
  <!-- ... -->
</div>
```

---

---

## Hooks

Hooks for widget-bb-manage-payment-orders-ng

### <a name="Hooks_processPaymentOrders"></a>*#processPaymentOrders(paymentOrders)*

Hook for processing payment orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrders | Array | Paument orders to process |

##### Returns

Array - *Processed payments orders*

### <a name="Hooks_processRequestParams"></a>*#processRequestParams(requestParams)*

Hook for processing payment orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestParams | Array | Request params |

##### Returns

Array - *Processed request params*

---

## Type Definitions


### <a name="PaymentOrdersResponse"></a>*PaymentOrdersResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| rawData | Array of Object | Loaded transactions array |
| totalCount | Number | Total number of transactions |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |

---

## Templates

* *template.ng.html*

---
