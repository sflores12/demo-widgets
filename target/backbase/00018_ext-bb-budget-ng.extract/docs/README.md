# ext-bb-budget-ng


Version: **1.2.4**


## Imports

* ui-bb-budget-card-ng
* ui-bb-currency-input-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-stepper-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **Exports**<br/>    <a href="#intents">intents</a><br/>    <a href="#helpers">helpers</a><br/>    <a href="#events">events</a><br/>
- **ext-bb-budget-ng**<br/>    <a href="#ext-bb-budget-ngDEFAULT_PERIOD_START">DEFAULT_PERIOD_START</a><br/>    <a href="#ext-bb-budget-ngDEFAULT_PERIOD_END">DEFAULT_PERIOD_END</a><br/>    <a href="#ext-bb-budget-nggetIconClass">getIconClass(iconName)</a><br/>    <a href="#ext-bb-budget-ngcurrentBudgets">currentBudgets()</a><br/>    <a href="#ext-bb-budget-ngbudgetSchema">budgetSchema()</a><br/>    <a href="#ext-bb-budget-ngcategoryNamesOutOfSchema">categoryNamesOutOfSchema()</a><br/>    <a href="#ext-bb-budget-nggetNotifications">getNotifications()</a><br/>    <a href="#ext-bb-budget-ngupdateNotifications">updateNotifications(notifications)</a><br/>    <a href="#ext-bb-budget-nghandleExtensionError">handleExtensionError(err)</a><br/>    <a href="#ext-bb-budget-ngcreateModelHandlers">createModelHandlers(schema)</a><br/>    <a href="#ext-bb-budget-ngid">id(formObj)</a><br/>    <a href="#ext-bb-budget-ngbudgetName">budgetName(formObj)</a><br/>    <a href="#ext-bb-budget-ngperiod">period(formObj)</a><br/>    <a href="#ext-bb-budget-ngspendingLimit">spendingLimit(formObj)</a><br/>    <a href="#ext-bb-budget-nginitEditingForm">initEditingForm(formObj)</a><br/>    <a href="#ext-bb-budget-ngcancelConfirmation">cancelConfirmation()</a><br/>    <a href="#ext-bb-budget-ngcancelEdit">cancelEdit(force)</a><br/>    <a href="#ext-bb-budget-ngonStepChange">onStepChange(formObj)</a><br/>    <a href="#ext-bb-budget-ngallowUpdate">allowUpdate(formObj)</a><br/>    <a href="#ext-bb-budget-ngallowNext">allowNext(formObj)</a><br/>    <a href="#ext-bb-budget-ngbudgets">budgets()</a><br/>    <a href="#ext-bb-budget-ngisEmpty">isEmpty()</a><br/>    <a href="#ext-bb-budget-ngdefaultCurrency">defaultCurrency()</a><br/>    <a href="#ext-bb-budget-ngsafeZoneLimit">safeZoneLimit()</a><br/>    <a href="#ext-bb-budget-ngisClockwisefillDirection">isClockwisefillDirection()</a><br/>    <a href="#ext-bb-budget-ngdefaultPeriod">defaultPeriod()</a><br/>    <a href="#ext-bb-budget-nglistTemplate">listTemplate()</a><br/>    <a href="#ext-bb-budget-ngformCreateTemplate">formCreateTemplate()</a><br/>    <a href="#ext-bb-budget-ngformLimitTemplate">formLimitTemplate()</a><br/>    <a href="#ext-bb-budget-ngisFormActive">isFormActive(value)</a><br/>    <a href="#ext-bb-budget-ngisFormDirty">isFormDirty()</a><br/>    <a href="#ext-bb-budget-ngisConfirmationActive">isConfirmationActive(value)</a><br/>    <a href="#ext-bb-budget-ngselectedBudget">selectedBudget()</a><br/>    <a href="#ext-bb-budget-ngisDeleteConfirmationActive">isDeleteConfirmationActive(value)</a><br/>    <a href="#ext-bb-budget-nghandleChanging">handleChanging(changeMethod, item)</a><br/>    <a href="#ext-bb-budget-nghandleSaving">handleSaving(saveMethod, formObj)</a><br/>    <a href="#ext-bb-budget-ngstartDelete">startDelete(method, item)</a><br/>    <a href="#ext-bb-budget-nghandleDelete">handleDelete()</a><br/>    <a href="#ext-bb-budget-ngtransactionsCategoryNames">transactionsCategoryNames()</a><br/>    <a href="#ext-bb-budget-ngisPersentageUsed">isPersentageUsed()</a><br/>    <a href="#ext-bb-budget-ngcurrentDate">currentDate()</a><br/>    <a href="#ext-bb-budget-ngnotificationDismissTime">notificationDismissTime()</a><br/>    <a href="#ext-bb-budget-ngsetChartColor">setChartColor(percentage)</a><br/>    <a href="#ext-bb-budget-ngcategorySelectHandler">categorySelectHandler(category, formObj)</a><br/>    <a href="#ext-bb-budget-ngformToModelFields">formToModelFields(form)</a><br/>    <a href="#ext-bb-budget-ngshiftNotification">shiftNotification(notification, notificationsList)</a><br/>    <a href="#ext-bb-budget-nggetSymbol">getSymbol(code)</a><br/>

## Exports

### <a name="intents"></a>*intents*


**Type:** *[ExtensionIntents](lib-bb-extension-intents-ng.html#ExtensionIntents)*

### <a name="helpers"></a>*helpers*


**Type:** *[ExtensionHelpers](lib-bb-extension-helpers-ng.html#ExtensionHelpers)*

### <a name="events"></a>*events*


**Type:** *[ExtensionEvents](lib-bb-extension-events-ng.html#ExtensionEvents)*


---

## Properties

Set of extension specific properties constants which contains
pairs of key and default values where key is the property
name and the defaultValue is it's value by default

---

## BUDGET_CARD_FILL_DIRECTION

Property which defines a direction of filling the budgets
ui component (is it clockwise or anti-clockwise)

---

## BUDGET_CARD_VALUES_DISPLAY_TYPE

Property which defines if for spent value persentage
or actual monetary amount is used

---

## BUDGET_CARD_SAFE_ZONE_LIMIT

Property defines a percentage (0-100) from which the bar of a
budget card changes color (goes out of safe zone and e.g. color
is changed from green to yellow)

---

## BUDGETS_DEFAULT_CURRENCY_CODE

Temporary created property to store default currency for budgets create.
Will be replaced by more suitable way of getting it.

---

## BUDGETS_DEFAULT_CURRENCIES_LIST

Temporary created property to store avaliable currencies list.
Will be replaced by more suitable way of getting them.

---

## NOTIFICATION_DISMISS_TIME

notifications timeout in seconds

---

## TemplateIds

A set of constants to define used template id`s

---

## ClassNames

A set of constants which defines class names used
within the extension

---

## DefaultPeriod

A set of constants for default budgeting period

---
### <a name="ext-bb-budget-ngDEFAULT_PERIOD_START"></a>*DEFAULT_PERIOD_START*

First day in the current month

**Type:** *Number*


---
### <a name="ext-bb-budget-ngDEFAULT_PERIOD_END"></a>*DEFAULT_PERIOD_END*

Last day in the current month

**Type:** *Number*


---

## BudgetStatus

A set of constants which defines the color level
of the chart

---

## ErrorCodes

A set of constants which defines ui error codes
of the extension

---

## Events

Event subscribtions object for the extension

---

### <a name="ext-bb-budget-nggetIconClass"></a>*getIconClass(iconName)*

A helper to transform icon's name
to an actual class name, which is going to be used to show a transactions

| Parameter | Type | Description |
| :-- | :-- | :-- |
| iconName | String | name of the icon |

##### Returns

[stirng](#stirng) - *className to be used within a template*

---

### <a name="ext-bb-budget-ngcurrentBudgets"></a>*currentBudgets()*

State selector for current budgets

##### Returns

Array - *budgets transformed for the view*

---

### <a name="ext-bb-budget-ngbudgetSchema"></a>*budgetSchema()*

State selector for budget schema

---

### <a name="ext-bb-budget-ngcategoryNamesOutOfSchema"></a>*categoryNamesOutOfSchema()*

State selector for budget categories enum

---

### <a name="ext-bb-budget-nggetNotifications"></a>*getNotifications()*

Selector for notifications from the widget state

---

### <a name="ext-bb-budget-ngupdateNotifications"></a>*updateNotifications(notifications)*

Function to set notifications in the state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notifications | Object | notifications object |

---

### <a name="ext-bb-budget-nghandleExtensionError"></a>*handleExtensionError(err)*

Internal for extension UI errors handler

| Parameter | Type | Description |
| :-- | :-- | :-- |
| err | Error | error code to be transformed to the message |

---

### <a name="ext-bb-budget-ngcreateModelHandlers"></a>*createModelHandlers(schema)*

Method to create a set of handlers for saving function
This method can be used to add extra fields

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schema | Object | budgetSchema to be used for validation if necessary |

##### Returns

Object - *set of handlers for form fields
to be transformed and passed to the model*

---

### <a name="ext-bb-budget-ngid"></a>*id(formObj)*

Handler for id property of the model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

String - *id if it's defined*

---

### <a name="ext-bb-budget-ngbudgetName"></a>*budgetName(formObj)*

Handler for categoryName property of the model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

String - *category name from the form state*

---

### <a name="ext-bb-budget-ngperiod"></a>*period(formObj)*

Handler for period property of the model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Object - *period from the form state or
defaultPeriod constant defined in the extension*

---

### <a name="ext-bb-budget-ngspendingLimit"></a>*spendingLimit(formObj)*

Handler for spenidng limit

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Object - *limit object with an amount and currency
if currecy is not defined default one is used.*

---

### <a name="ext-bb-budget-nginitEditingForm"></a>*initEditingForm(formObj)*

Sets initial step on form init

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

---

### <a name="ext-bb-budget-ngcancelConfirmation"></a>*cancelConfirmation()*

Cancels confirmation dialog

---

### <a name="ext-bb-budget-ngcancelEdit"></a>*cancelEdit(force)*

Cancels editing form

| Parameter | Type | Description |
| :-- | :-- | :-- |
| force | Boolean (optional) | If set to true, check if there were some changes will be skipped. Default false, which means that, in case there were some changes, another dialog with cancel confirmation will appear |

---

### <a name="ext-bb-budget-ngonStepChange"></a>*onStepChange(formObj)*

Updates for state object on step change in the view

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

---

### <a name="ext-bb-budget-ngallowUpdate"></a>*allowUpdate(formObj)*

Checks if the form is ready (valid) for update

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Boolean - **

---

### <a name="ext-bb-budget-ngallowNext"></a>*allowNext(formObj)*

Checks validity of current step

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Boolean - **

---

### <a name="ext-bb-budget-ngbudgets"></a>*budgets()*

Returns budgets array

##### Returns

Array - *budget items array*

---

### <a name="ext-bb-budget-ngisEmpty"></a>*isEmpty()*

A getter to define if budgets array is empty

##### Returns

Boolean - *true if budgets array is empty*

---

### <a name="ext-bb-budget-ngdefaultCurrency"></a>*defaultCurrency()*

Returns extension specific preference which
defines default currency

##### Returns

String - *Default currency code*

---

### <a name="ext-bb-budget-ngsafeZoneLimit"></a>*safeZoneLimit()*

Returns extension specific preference which
defines at which point budgetCard bar should change a color

##### Returns

Number - *0-100 number defining breakpoint for budget items*

---

### <a name="ext-bb-budget-ngisClockwisefillDirection"></a>*isClockwisefillDirection()*

Returns extension specific preference which
defines if a budget ui component should be filled in or emptied out

##### Returns

Boolean - *true in case it's a clockwise direction*

---

### <a name="ext-bb-budget-ngdefaultPeriod"></a>*defaultPeriod()*

Returns default budget period

##### Returns

[{startDate: Date](#{startDate: Date), [endDate:Date}](#endDate:Date}) - **

---

### <a name="ext-bb-budget-nglistTemplate"></a>*listTemplate()*

Returns listTemplate id

##### Returns

String - *returns list template id*

---

### <a name="ext-bb-budget-ngformCreateTemplate"></a>*formCreateTemplate()*

Returns formCreate id

##### Returns

String - *Create form template id*

---

### <a name="ext-bb-budget-ngformLimitTemplate"></a>*formLimitTemplate()*

Returns formUpdate template id

##### Returns

String - *Update form template id*

---

### <a name="ext-bb-budget-ngisFormActive"></a>*isFormActive(value)*

A setter for form state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, being used to define if the form data has been changed |

##### Returns

Boolean - *true if form is active*

---

### <a name="ext-bb-budget-ngisFormDirty"></a>*isFormDirty()*

A getter of the state of the form

##### Returns

Boolean - *true if form is changed*

---

### <a name="ext-bb-budget-ngisConfirmationActive"></a>*isConfirmationActive(value)*

A setter for the confirmation modal window state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, which will change confirmation modal apperance |

##### Returns

Boolean - *true if confirmation modal is active*

---

### <a name="ext-bb-budget-ngselectedBudget"></a>*selectedBudget()*

A getter of the budget item selected to be deleted

##### Returns

Object - **

---

### <a name="ext-bb-budget-ngisDeleteConfirmationActive"></a>*isDeleteConfirmationActive(value)*

A setter for the delete confirmation modal window state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, which will change delete confirmation modal apperance |

##### Returns

Boolean - *true if delete confirmation modal is active*

---

### <a name="ext-bb-budget-nghandleChanging"></a>*handleChanging(changeMethod, item)*

Function to initiate create/edit action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| changeMethod | Function | function to be called |
| item | [any](#any) | to be passed to the saving function |

##### Returns

[any](#any) - *changing method result*

---

### <a name="ext-bb-budget-nghandleSaving"></a>*handleSaving(saveMethod, formObj)*

Handler for saving an item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| saveMethod | Function | save method to be called |
| formObj | Object | an item to be transformed and saved |

##### Returns

[any](#any) - *saving method result*

---

### <a name="ext-bb-budget-ngstartDelete"></a>*startDelete(method, item)*

Function that prepares everything for budget deletion
and triggers confirmation dialog

| Parameter | Type | Description |
| :-- | :-- | :-- |
| method | Function | function to be called if delete is confirmed |
| item | [any](#any) | to be passed to the delete function |

---

### <a name="ext-bb-budget-nghandleDelete"></a>*handleDelete()*

Function to initiate delete action

##### Returns

[any](#any) - *delete method result*

---

### <a name="ext-bb-budget-ngtransactionsCategoryNames"></a>*transactionsCategoryNames()*

Returns categories names being provided by data module schema

##### Returns

Array of String - *categories array*

---

### <a name="ext-bb-budget-ngisPersentageUsed"></a>*isPersentageUsed()*

Returns extension specific preference which
defines if a percentage is used to show spent amount

##### Returns

Boolean - *true if percentage value is shown*

---

### <a name="ext-bb-budget-ngcurrentDate"></a>*currentDate()*

Returns the current date

##### Returns

Object - *new Date object*

---

### <a name="ext-bb-budget-ngnotificationDismissTime"></a>*notificationDismissTime()*

Returns notifications dismissing time preference value

##### Returns

Number - *time to dismiss notification*

---

### <a name="ext-bb-budget-ngsetChartColor"></a>*setChartColor(percentage)*

A helper method used to map the chart percentage to the
chart color level

| Parameter | Type | Description |
| :-- | :-- | :-- |
| percentage | Number | percentage of the chart |

##### Returns

String - *chart color level*

---

### <a name="ext-bb-budget-ngcategorySelectHandler"></a>*categorySelectHandler(category, formObj)*

A helper method used to handle category selection
by clicking on surrounding wrapper

| Parameter | Type | Description |
| :-- | :-- | :-- |
| category | String | New category |
| formObj | Object | form state object |

---

### <a name="ext-bb-budget-ngformToModelFields"></a>*formToModelFields(form)*

A function to process form object before it gets passed to the model.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | item to be transformed |

##### Returns

Object - *modelItem*

---

### <a name="ext-bb-budget-ngshiftNotification"></a>*shiftNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

---

### <a name="ext-bb-budget-nggetSymbol"></a>*getSymbol(code)*

Converts currency code into currency symbol

| Parameter | Type | Description |
| :-- | :-- | :-- |
| code | String |  |

##### Returns

String - **
