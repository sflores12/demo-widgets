# undefined


Version: **3.2.5**


## Table of Contents
- **MessagingModel**<br/>    <a href="#MessagingModel_getTopics">#getTopics()</a><br/>    <a href="#MessagingModel_loadConversations">#loadConversations(params)</a><br/>    <a href="#MessagingModel_loadArchivedConversations">#loadArchivedConversations(params)</a><br/>    <a href="#MessagingModel_loadSentConversations">#loadSentConversations(params)</a><br/>    <a href="#MessagingModel_loadMessages">#loadMessages(conversationId)</a><br/>    <a href="#MessagingModel_getUnreadMessagesCount">#getUnreadMessagesCount(params)</a><br/>    <a href="#MessagingModel_removeConversations">#removeConversations(conversationId)</a><br/>    <a href="#MessagingModel_loadDrafts">#loadDrafts(params)</a><br/>    <a href="#MessagingModel_createDraft">#createDraft(pDraft)</a><br/>    <a href="#MessagingModel_sendDraftWithRetry">#sendDraftWithRetry(draftId, messageBody)</a><br/>    <a href="#MessagingModel_sendDraft">#sendDraft(draftId, messageBody)</a><br/>    <a href="#MessagingModel_createReplyDraft">#createReplyDraft(conversationId, draft)</a><br/>    <a href="#MessagingModel_updateReplyDraft">#updateReplyDraft(conversationId, draft)</a><br/>    <a href="#MessagingModel_getLatestConversationDraft">#getLatestConversationDraft(conversationId)</a><br/>    <a href="#MessagingModel_saveConversationDraft">#saveConversationDraft(conversationId, draft)</a><br/>    <a href="#MessagingModel_markUnreadMessagesAsRead">#markUnreadMessagesAsRead(conversation, messages)</a><br/>

---

## MessageState

Message states

---

## MessagingModel

Model factory for widget-bb-messaging-ng

### <a name="MessagingModel_getTopics"></a>*#getTopics()*

Fetches available topics

##### Returns

Promise of Array - *A Promise with a list of topics
                           [{id: 'id123', code: 'ln', name: 'Loans'}]*

### <a name="MessagingModel_loadConversations"></a>*#loadConversations(params)*

Loads users conversation threads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | query parameters to pass to backend |

##### Returns

Promise of Object - *A wrapper of conversations in the following format:
                            {conversations: [], totalCount: 0}*

### <a name="MessagingModel_loadArchivedConversations"></a>*#loadArchivedConversations(params)*

Loads archived users conversation threads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | query parameters to pass to backend |

##### Returns

Promise of Object - *A wrapper of conversations in the following format:
                            {conversations: [], totalCount: 0}*

### <a name="MessagingModel_loadSentConversations"></a>*#loadSentConversations(params)*

Loads sent users conversation threads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | query parameters to pass to backend |

##### Returns

Promise of Object - *A wrapper of conversations in the following format:
                            {conversations: [], totalCount: 0}*

### <a name="MessagingModel_loadMessages"></a>*#loadMessages(conversationId)*

Loads messages of a given conversation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | conversation identifier |

##### Returns

Promise - *An array of messages*

### <a name="MessagingModel_getUnreadMessagesCount"></a>*#getUnreadMessagesCount(params)*

Gets user's unread messages count

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | query parameters to pass to backend |

##### Returns

Promise of [{unreadMessagesCount: number}](#{unreadMessagesCount: number}) - *a promise holding user's unread messages count*

### <a name="MessagingModel_removeConversations"></a>*#removeConversations(conversationId)*

Removes given conversation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | Conversation Id to be removed |

##### Returns

Promise of Object - *An array of conversations*

### <a name="MessagingModel_loadDrafts"></a>*#loadDrafts(params)*

Loads users drafts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | query parameters to pass to backend |

##### Returns

Promise of Object - *A wrapper of draft items: {"drafts": []}*

### <a name="MessagingModel_createDraft"></a>*#createDraft(pDraft)*

Saves draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pDraft | [any](#any) | Draft to save |

##### Returns

Promise of [{id: string}](#{id: string}) - *a promise holding created draft ID*

### <a name="MessagingModel_sendDraftWithRetry"></a>*#sendDraftWithRetry(draftId, messageBody)*

Sends draft, if it fails, it will retry sending for 3 times

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftId | String | draft ID which will be sent |
| messageBody | String | updated message body which will be applied to draft before sending |

##### Returns

Promise - *a promise which is resolved when draft is successfully sent*

### <a name="MessagingModel_sendDraft"></a>*#sendDraft(draftId, messageBody)*

Sends given draft.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftId | String | Draft ID to be sent |
| messageBody | String | with which message will be sent |

##### Returns

Promise - *an empty promise*

### <a name="MessagingModel_createReplyDraft"></a>*#createReplyDraft(conversationId, draft)*

Creates a draft for replying to a conversation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | the conversation ID for which reply draft will be created |
| draft | Object | object with "body" property in it |

##### Returns

Promise of [{id: string}](#{id: string}) - *a promise holding created draft ID*

### <a name="MessagingModel_updateReplyDraft"></a>*#updateReplyDraft(conversationId, draft)*

Updates the response draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | the conversation ID for which response draft will be updated |
| draft | Object | object to be updated |

##### Returns

Promise - *an empty promise*

### <a name="MessagingModel_getLatestConversationDraft"></a>*#getLatestConversationDraft(conversationId)*

Gets latest (i.e. last updated) draft belonging to the specified conversation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | the conversation ID for which draft will be fetched |

##### Returns

Promise of Object - *a promise containing latest conversation*

### <a name="MessagingModel_saveConversationDraft"></a>*#saveConversationDraft(conversationId, draft)*

Saves (creates or updates) conversation draft.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversationId | String | the conversation ID for which draft will be saved |
| draft | Object | draft to be saved. |

##### Returns

Promise - *promise object. If draft has been updated, then the Promise will be empty.
If draft was created, then the promise will hold object with an ID of created draft.*

### <a name="MessagingModel_markUnreadMessagesAsRead"></a>*#markUnreadMessagesAsRead(conversation, messages)*

Marks messages whose recipient is current user as read.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| conversation | Object | conversation object for which messages need to be marked as read |
| messages | Array | array of messages. The array will be filtered and only messages whose recipient is current user will be marked as read. |

##### Returns

Promise - *promise object, which is resolved once all the
passed messages are marked as read.*
