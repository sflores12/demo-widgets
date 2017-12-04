# ui-bb-conversation-view-ng


Version: **1.2.14**


## Imports

* ui-bb-rich-text-editor-ng
* vendor-bb-angular
* vendor-bb-angular-sanitize

---

## Table of Contents
- **Type Definitions**<br/>    <a href="#Topic">Topic</a><br/>

---

## uiBbConversationViewNg

Conversation view directive which can be used to display a list of messages in conversation.

| Property | Type | Description |
| :-- | :-- | :-- |
| conversation | Object | conversation to show |
| messages | Object | messages belonging to the conversation. |
| list | Array of [Topic](#Topic) | of topics |
| draft | Object | optional draft object to be displayed in response field |
| on-close | Function | function to be called when the view is closed |
| on-reply-send | Function | function to be called to send a response draft |

## Example

```javascript
<ui-bb-conversation-view-ng
  data-on-click="$conversationViewCtrl.viewConversation(conversation)"
  data-conversation="$conversationViewCtrl.conversation"
  data-messages="$conversationViewCtrl.messages"
  data-topics="$ctrl.topics"
  data-draft="$conversationViewCtrl.draft"
  data-on-close="$conversationViewCtrl.close()"
  data-on-reply-send="$conversationViewCtrl.sendReply(draft)"
  data-labels="{
    labelClose: ('ui-bb-conversation-view-ng.label.close' | i18n),
    labelSend: ('ui-bb-conversation-view-ng.label.send' | i18n),
  }"></ui-bb-conversation-view-ng>
```

## Type Definitions


### <a name="Topic"></a>*Topic*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| code | String |  |
| name | String |  |

---
