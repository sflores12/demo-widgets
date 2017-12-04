# ext-bb-messages-ng


Version: **1.1.42**

Message center default extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-conversation-list-ng
* ui-bb-conversation-view-ng
* ui-bb-draft-edit-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-tabs

---

## Example

```javascript
<!-- messages widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-messages-ng</value>
</property>
```

## Table of Contents
- **Hooks**<br/>    <a href="#Hooks_transformConversations">#transformConversations(itemsWrapper, currentItems)</a><br/>

---

## Hooks

Hook extensions for ext-bb-messages-ng extension

### <a name="Hooks_transformConversations"></a>*#transformConversations(itemsWrapper, currentItems)*

Hook extension function which appends newly loaded items to already existing
             items. Such functionality is used together with ui-bb-load-more-ng component
             in order to have a "Load more" button.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| itemsWrapper | [itemsWrapper](#itemsWrapper) | a wrapper for newly loaded page items. The object will have the following structure: {items: [], totalCount: 0} |
| currentItems | Object | list of current items displayed in the folder |

##### Returns

Object - *a wrapper object of items which contains newly loaded items appended to
                  current items. Wrapper structure is as follow: {items: [], totalCount: 0}*
