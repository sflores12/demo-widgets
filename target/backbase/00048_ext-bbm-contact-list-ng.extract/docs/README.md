# ext-bbm-contact-list-ng


Version: **1.0.173**

Mobile extension for a contact list in the Contacts widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-contact-list-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_hasContacts">#hasContacts(ctrl)</a><br/>    <a href="#Helpers_hasSearchContacts">#hasSearchContacts(ctrl)</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState(ctrl)</a><br/>    <a href="#Helpers_showSearchLoadingState">#showSearchLoadingState(ctrl)</a><br/>    <a href="#Helpers_showSearchErrorState">#showSearchErrorState(ctrl)</a><br/>    <a href="#Helpers_showSearchEmptyState">#showSearchEmptyState(ctrl)</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState(ctrl)</a><br/>    <a href="#Helpers_showErrorState">#showErrorState(ctrl)</a><br/>    <a href="#Helpers_showSearchLoadMoreLoading">#showSearchLoadMoreLoading(ctrl)</a><br/>    <a href="#Helpers_showLoadMoreLoading">#showLoadMoreLoading(ctrl)</a><br/>    <a href="#Helpers_showSearchLoadMore">#showSearchLoadMore(ctrl)</a><br/>    <a href="#Helpers_showLoadMore">#showLoadMore(ctrl)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processContacts">#processContacts(contacts)</a><br/>
- **ext-bbm-contact-list-ng**<br/>    <a href="#ext-bbm-contact-list-ngselectPrevContact">selectPrevContact(contacts, index, contact)</a><br/>

---

## Helpers

Helpers for ext-bbm-contact-list-ng

### <a name="Helpers_hasContacts"></a>*#hasContacts(ctrl)*

Checks for the contacts presence.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_hasSearchContacts"></a>*#hasSearchContacts(ctrl)*

Checks for the searched contacts presence.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState(ctrl)*

Checks for the loading state of the contacts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadingState"></a>*#showSearchLoadingState(ctrl)*

Checks for the loading state of the contacts search.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showSearchErrorState"></a>*#showSearchErrorState(ctrl)*

Checks if the searching has been failed.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showSearchEmptyState"></a>*#showSearchEmptyState(ctrl)*

Checks if there are no search results.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState(ctrl)*

Checks if there are no contacts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState(ctrl)*

Checks if the loading request has been failed.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMoreLoading"></a>*#showSearchLoadMoreLoading(ctrl)*

Checks for the search load's more loading state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadMoreLoading"></a>*#showLoadMoreLoading(ctrl)*

Checks for the load's more loading state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMore"></a>*#showSearchLoadMore(ctrl)*

Checks for the search load more states.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadMore"></a>*#showLoadMore(ctrl)*

Checks for the load more states.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ContactController](widget-bb-contact-ng.html#ContactController) |  |

##### Returns

Boolean - **

---

## Hooks

Hooks for widget-bb-contact-ng

### <a name="Hooks_processContacts"></a>*#processContacts(contacts)*

Hook for processing the list of contacts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array of Object | Original list of contacts |

##### Returns

Array of Object - *Processed the list of contacts*

---

### <a name="ext-bbm-contact-list-ngselectPrevContact"></a>*selectPrevContact(contacts, index, contact)*

Returns previous (or the first) contact based
on the currently selected item id or item index (deprecated).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | [*](#*) | Processed contacts |
| index | Number | Currently selected contact index (deprecated) |
| contact | Object | Currently selected contact |

##### Returns

Object - *Previous or the first contact from the contacts*
