# ext-bb-messages-inbox-ng


Version: **1.2.30**

Message center inbox extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-conversation-list-ng
* ui-bb-conversation-view-ng
* ui-bb-i18n-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-pagination

---

## Example

```javascript
<!-- messages widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-messages-inbox-ng</value>
</property>
```

## Table of Contents
- **ext-bb-messages-inbox-ng**<br/>    <a href="#ext-bb-messages-inbox-ngremoveSelectedConversations">removeSelectedConversations($ctrl)</a><br/>    <a href="#ext-bb-messages-inbox-nginit">init($ctrl)</a><br/>

---

### <a name="ext-bb-messages-inbox-ngremoveSelectedConversations"></a>*removeSelectedConversations($ctrl)*

Removes selected conversations and updates conversation list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | The extension controller |

##### Returns

Promise - *Promise to be fulfilled after loading list*

---

### <a name="ext-bb-messages-inbox-nginit"></a>*init($ctrl)*

Function, which should be called with ng-init at the extension's
root element. This function opens the inbox folder and fetches
the total unread messages count

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | The extension controller |
