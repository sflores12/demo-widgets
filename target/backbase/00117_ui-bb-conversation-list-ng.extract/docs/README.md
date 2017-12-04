# ui-bb-conversation-list-ng


Version: **1.1.16**

Conversation list view component

## Imports

* vendor-bb-angular

---

## Example

```javascript
<ui-bb-conversation-list-ng conversations="$ctrl.state.currentFolder.items"
                               on-select="$ctrl.onItemSelected(conversation)"
                               on-deselect="$ctrl.onItemDeselected(conversation)"
                               on-click="$ctrl.openItem(conversation)">
   </ui-bb-conversation-list-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **Type Definitions**<br/>    <a href="#Conversation">Conversation</a><br/>    <a href="#Topic">Topic</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## uiBbConversationListNg


| Property | Type | Description |
| :-- | :-- | :-- |
| conversations | Array of [Conversation](#Conversation) | list of conversations to display |
| list | Array of [Topic](#Topic) | of topics |
| onSelect | Function | function to be called when a conversation is selected |
| onDeselect | Function | function to be called when a conversation is deselected |
| onClick | Function | function to be called when a conversation is clicked |

## Type Definitions


### <a name="Conversation"></a>*Conversation*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| containsUnread | Boolean | flag indicating whether conversation has unread messages |
| selected | Boolean |  |
| subject | String |  |
| sender | String | name of the conversation sender |
| body | String |  |
| category | String |  |
| numberOfMessages | Number | number of messages in the conversation |
| timestamp | String | timestamp of last message in conversation |

### <a name="Topic"></a>*Topic*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| code | String |  |
| name | String |  |

---
