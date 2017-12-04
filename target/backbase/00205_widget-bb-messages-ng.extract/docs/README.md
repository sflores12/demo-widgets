# widget-bb-messages-ng


Version: **3.0.1**

Message Center Widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-user-data-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-messages-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-messages-ng**<br/>    <a href="#widget-bb-messages-ngViews">Views</a><br/>
- **MessagesController**<br/>    <a href="#MessagesController_logGlobalError">#logGlobalError(modelError)</a><br/>    <a href="#MessagesController_logError">#logError(error)</a><br/>    <a href="#MessagesController_loadPage">#loadPage(view, pageNo, finallyCallback)</a><br/>    <a href="#MessagesController_fetchUnreadMessagesCount">#fetchUnreadMessagesCount()</a><br/>    <a href="#MessagesController_openFolder">#openFolder(view)</a><br/>    <a href="#MessagesController_countUnreadItems">#countUnreadItems()</a><br/>    <a href="#MessagesController_onItemSelected">#onItemSelected(conversation)</a><br/>    <a href="#MessagesController_onItemDeselected">#onItemDeselected(conversation)</a><br/>    <a href="#MessagesController_removeSelectedItems">#removeSelectedItems()</a><br/>    <a href="#MessagesController_openItem">#openItem(conversation)</a><br/>    <a href="#MessagesController_config">#config</a><br/>    <a href="#MessagesController_statics">#statics</a><br/>    <a href="#MessagesController_state">#state</a><br/>
- **ConversationController**<br/>    <a href="#ConversationController_conversation">#conversation</a><br/>    <a href="#ConversationController_messages">#messages</a><br/>    <a href="#ConversationController_draft">#draft</a><br/>    <a href="#ConversationController_viewConversation">#viewConversation(conversation)</a><br/>    <a href="#ConversationController_close">#close()</a><br/>    <a href="#ConversationController_sendReply">#sendReply(conversationId, draft)</a><br/>    <a href="#ConversationController_state">#state</a><br/>
- **Hooks**<br/>    <a href="#Hooks_transformConversations">#transformConversations(itemsWrapper, currentItems)</a><br/>
- **DraftController**<br/>    <a href="#DraftController_send">#send(pDraft)</a><br/>    <a href="#DraftController_dismiss">#dismiss()</a><br/>    <a href="#DraftController_open">#open()</a><br/>    <a href="#DraftController_config">#config</a><br/>    <a href="#DraftController_state">#state</a><br/>
- **Events**<br/>    <a href="#bb.event.messaging.error">bb.event.messaging.error</a><br/>    <a href="#bb.event.messaging.conversation.close">bb.event.messaging.conversation.close</a><br/>    <a href="#bb.event.messaging.draft.sent">bb.event.messaging.draft.sent</a><br/>    <a href="#bb.event.messaging.draft.dismiss">bb.event.messaging.draft.dismiss</a><br/>    <a href="#bb.event.messaging.draft.create">bb.event.messaging.draft.create</a><br/>
- **Type Definitions**<br/>    <a href="#Views">Views</a><br/>    <a href="#ConversationData">ConversationData</a><br/>    <a href="#MessagesControllerConfig">MessagesControllerConfig</a><br/>    <a href="#MessagesControllerState">MessagesControllerState</a><br/>    <a href="#Conversation">Conversation</a><br/>    <a href="#MessagesControllerStatics">MessagesControllerStatics</a><br/>    <a href="#ConversationControllerState">ConversationControllerState</a><br/>    <a href="#Message">Message</a><br/>    <a href="#DraftControllerState">DraftControllerState</a><br/>    <a href="#DraftControllerConfig">DraftControllerConfig</a><br/>    <a href="#Draft">Draft</a><br/>

---
### <a name="widget-bb-messages-ngViews"></a>*Views*

Different views the user can toggle between

**Type:** *[Views](#Views)*


---

## Text

Widget static texts for the template

---

## IntentsKeys

Widget intents to be handled

---

## MessagesController

Controller for message conversations list.

| Injector Key |
| :-- |
| *MessagesController* |


### <a name="MessagesController_logGlobalError"></a>*#logGlobalError(modelError)*

Registers global error.
This blocks from using the widget.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modelError | Object | Error retuned from Data module |

### <a name="MessagesController_logError"></a>*#logError(error)*

Registers error.
This does not block the user form using other parts of the widget.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | String | Error code |

### <a name="MessagesController_loadPage"></a>*#loadPage(view, pageNo, finallyCallback)*

Loads a page of items for given view. Pages are counted starting with 1.
This method can both be used with "ui-bb-load-more-ng" and "uib-pagination" components.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| view | String | view for which the page should be loaded |
| pageNo | Number | Optional page number to load. Numbering starts to 1. Defaults to 1. |
| finallyCallback | Function | optional callback function to be executed after page is loaded. It will be executed both on successful and failing loads. |

### <a name="MessagesController_fetchUnreadMessagesCount"></a>*#fetchUnreadMessagesCount()*

Counts user's unread messages and updates the model value

##### Returns

Promise of [{unreadMessagesCount: number}](#{unreadMessagesCount: number}) - *a promise holding user's unread messages count*

### <a name="MessagesController_openFolder"></a>*#openFolder(view)*

Switches mailbox view between different conversation lists.
E.g. from Drafts to Archived.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| view | String | View for which folder should be revealed |

### <a name="MessagesController_countUnreadItems"></a>*#countUnreadItems()*

Returns unread item count for user Inbox.
Returns 0, if inbox is loading.

##### Returns

Number - **

### <a name="MessagesController_onItemSelected"></a>*#onItemSelected(conversation)*

Handles conversation selection

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversation | [Conversation](#Conversation) | Conversation to be selected |

### <a name="MessagesController_onItemDeselected"></a>*#onItemDeselected(conversation)*

Handles conversation de-selection

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversation | [Conversation](#Conversation) | Conversation to be de-selected |

### <a name="MessagesController_removeSelectedItems"></a>*#removeSelectedItems()*

Removes selected conversations.
<p>Selected conversations are tracked in "selectedConversations" property in controller's
state object.</p>

##### Returns

Promise - *succesful promise if removal of all selected conversations succeeded*

### <a name="MessagesController_openItem"></a>*#openItem(conversation)*

Opens given conversation item. Hides currently viewed mailbox and
publishes event to open conversation.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversation | [Conversation](#Conversation) | conversation to open |

##### Fires Events:

> bb.event.messaging.conversation.open

### <a name="MessagesController_config"></a>*#config*

Config mapped from widget's preferences.

<p>"showUnreadConversationsCount" is mapped from "showUnreadConversationsCount" preference
</p>

**Type:** *[MessagesControllerConfig](#MessagesControllerConfig)*

### <a name="MessagesController_statics"></a>*#statics*

Holds static data of controller.

**Type:** *[MessagesControllerStatics](#MessagesControllerStatics)*

### <a name="MessagesController_state"></a>*#state*

Keeps state related data

**Type:** *[MessagesControllerState](#MessagesControllerState)*


---

## ConversationController

Conversation controller handles logic of viewing and operating a list of
messages in a single conversation.

| Injector Key |
| :-- |
| *ConversationController* |

### <a name="ConversationController_conversation"></a>*#conversation*

The currently opened conversation

**Type:** *[Conversation](#Conversation)*

### <a name="ConversationController_messages"></a>*#messages*

Messages of currently opened conversation.

**Type:** *Array of [Message](#Message)*

### <a name="ConversationController_draft"></a>*#draft*

Reply draft.

**Type:** *[Draft](#Draft)*


### <a name="ConversationController_viewConversation"></a>*#viewConversation(conversation)*

Presents messages of the conversation for viewing. Also, marks unread messages of
conversation as read.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversation | [Conversation](#Conversation) | conversation to view |

##### Returns

Promise - *a succesful promise when all data has been loaded*

### <a name="ConversationController_close"></a>*#close()*

Closes conversation view.

##### Fires Events:

> bb.event.messaging.conversation.close


### <a name="ConversationController_sendReply"></a>*#sendReply(conversationId, draft)*

Sends out a draft as reply to the given conversation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | ID of the conversation to which the draft should be sent as a reply |
| draft | [Draft](#Draft) | the draft to send |

##### Returns

Promise - *a successful promise of reply draft has been sent successfully*

##### Fires Events:

> bb.event.messaging.error

### <a name="ConversationController_state"></a>*#state*

Holds state of controller.

**Type:** *[ConversationControllerState](#ConversationControllerState)*


---

## Hooks

Hooks for widget-bb-messages-ng

### <a name="Hooks_transformConversations"></a>*#transformConversations(itemsWrapper, currentItems)*

A hook which will be called when a page of items is loaded.
This hook can be used to customize how the new page is displayed.
For example, if "Show more" functionality used for paging,
then this hook should just append new items to current items.
As another example, if pagination component is used,
this hook should just return the new items.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| itemsWrapper | [itemsWrapper](#itemsWrapper) | a wrapper for newly loaded page items. The object will have the following structures: {items: [], totalCount: 0} |
| currentItems | Object | list of current items displayed in the folder |

##### Returns

Object - *a wrapper object of items which will be used as items to display in current
                  folder. Object structure should be as follow: {items: [], totalCount: 0}*

---

## DraftController

Draft Controller is responsible for draft creation and sending.

| Injector Key |
| :-- |
| *DraftController* |


### <a name="DraftController_send"></a>*#send(pDraft)*

Sends out given draft letter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pDraft | [Draft](#Draft) | Draft letter to send |

##### Returns

Promise - *succesful promise if draft has been sent successfully*

##### Fires Events:

> bb.event.messaging.draft.sent

> bb.event.messaging.error


### <a name="DraftController_dismiss"></a>*#dismiss()*

Cancel draft editing

##### Fires Events:

> bb.event.messaging.draft.dismiss


### <a name="DraftController_open"></a>*#open()*

Initiate draft creation/editing

##### Fires Events:

> bb.event.messaging.draft.create

### <a name="DraftController_config"></a>*#config*

Config mapped from widget's preferences.

<p>"subjectMaxLength" is mapped from "subjectMaxLength" preference</p>

**Type:** *[DraftControllerConfig](#DraftControllerConfig)*

### <a name="DraftController_state"></a>*#state*

Holds controller's state

**Type:** *[DraftControllerState](#DraftControllerState)*


---

## Events

### <a name="bb.event.messaging.error"></a>*bb.event.messaging.error*

Event payload is a string with error code.

### <a name="bb.event.messaging.conversation.close"></a>*bb.event.messaging.conversation.close*

Event is fired when user closes single conversation view. Event carries no payload.

### <a name="bb.event.messaging.draft.sent"></a>*bb.event.messaging.draft.sent*

Event fired when draft has been sent. Event carries no payload.

### <a name="bb.event.messaging.draft.dismiss"></a>*bb.event.messaging.draft.dismiss*

Event fired when user dismisses draft creation. Event carries no payload.

### <a name="bb.event.messaging.draft.create"></a>*bb.event.messaging.draft.create*

Event fired when user opens draft creation. Event carries no payload.


---

## Type Definitions


### <a name="Views"></a>*Views*

Contains dynamic properties with view names. Example: {inbox: "inbox"}.

**Type:** *Object*


### <a name="ConversationData"></a>*ConversationData*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| items | Array of [Conversation](#Conversation) | List of conversations. Null value means that conversations haven't been loaded yet. |
| totalCount | Number | total count of items in the backend. Used to determine if there are more pages to load. |
| currentPage | Number | current page. Numbering starts at 1. |
| loading | Boolean | Flag indicating whether conversation data is currently being loaded |

### <a name="MessagesControllerConfig"></a>*MessagesControllerConfig*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| subjectMaxLength | Number | Max allowed length for new draft subject. |
| pageSize | Number | Number of items to be displayed in a single page load |

### <a name="MessagesControllerState"></a>*MessagesControllerState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| showMailbox | Boolean | Mailbox show/hide flag |
| currentView | String | Tracks the state of which Folder the user has active |
| currentFolder | [ConversationData](#ConversationData) | Data of currently opened folder |
| folders | Object of String, [ConversationData](#ConversationData) | Holds users mailbox data. Keys as folders |
| selectedConversations | Array of [Conversation](#Conversation) | An array of currently selected conversations |
| error | String | Recent error code, if any. |
| globalError | String | Global error, if any. |
| unreadMessagesCount | Number | Unread messages count, undefined if the call to backend failed. |

### <a name="Conversation"></a>*Conversation*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | ID of the conversation |
| category | String | category of the conversation |
| otherUser | String | other user's LDAP user string |
| otherUserName | String | other user's name |
| sender | String | name of the conversation sender |
| body | String | body of last message in the conversation |
| subject | String | conversation subject |
| containsUnread | Boolean | flag indicating whether the conversation has unread messages |
| important | Boolean | importance flag |
| numberOfMessages | Number | count of number of messages in the conversation |
| timestamp | String | last modification time |

### <a name="MessagesControllerStatics"></a>*MessagesControllerStatics*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| views | [Views](#Views) | views supported by controller |

### <a name="ConversationControllerState"></a>*ConversationControllerState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| open | Boolean | flag inidicating whether single conversation view is open |

### <a name="Message"></a>*Message*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | ID of the message |
| subject | String | subject of the conversation the message belongs to |
| body | String | message body |
| category | String | category of the conversation the message belongs to |
| status | String | message status (READ, DELIVERED, etc) |
| sender | String | message sender's X500Principle string representation |
| senderName | String | message sender's name |
| deliveredOn | String | message's delivery timestamp |
| important | Boolean | flag indicating importance of conversation the message belongs to |

### <a name="DraftControllerState"></a>*DraftControllerState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| opened | Boolean | indicates whether draft editing is currently opened |

### <a name="DraftControllerConfig"></a>*DraftControllerConfig*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| subjectMaxLength | Number | Max allowed length for new draft subject. |

### <a name="Draft"></a>*Draft*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| body | String |  |
| subject | String |  |
| recipient | String | LDAP X500Principle representation of recipient |
| category | String | category of the draft |
| important | Boolean | flag indicating importance of the message |
| additions | Object | API extension additions |

---

## Templates

* *template.ng.html*

---
