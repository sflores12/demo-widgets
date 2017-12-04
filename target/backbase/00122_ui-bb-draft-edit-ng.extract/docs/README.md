# ui-bb-draft-edit-ng


Version: **2.1.14**


## Imports

* ui-bb-rich-text-editor-ng
* vendor-bb-angular

---

## Table of Contents
- **Type Definitions**<br/>    <a href="#Topic">Topic</a><br/>    <a href="#UiBbDraftEditNgConfig">UiBbDraftEditNgConfig</a><br/>    <a href="#UiBbDraftEditNgMessages">UiBbDraftEditNgMessages</a><br/>

---

## uiBbDraftEditNg


| Property | Type | Description |
| :-- | :-- | :-- |
| list | Array of [Topic](#Topic) | of topics |
| config | [UiBbDraftEditNgConfig](#UiBbDraftEditNgConfig) | config object |
| onClose | Function | function to call when user closes component |
| onSend | Function | function to call to send the draft |
| messages | [UiBbDraftEditNgMessages](#UiBbDraftEditNgMessages) | object containing localized labels |

## Example

```javascript
<ui-bb-draft-edit-ng
   data-topics="$ctrl.topics"
   data-config="$draftCtrl.config"
   data-on-close="$draftCtrl.dismiss()"
   data-on-send="$draftCtrl.send(draft)"
   data-messages="{
     labelClose: ('ui-bb-draft-ng.label.close' | i18n),
     labelSend: ('ui-bb-draft-ng.label.send' | i18n),
     labelRemove: ('ui-bb-draft-ng.label.remove' | i18n),
     labelToggleImportance: ('ui-bb-draft-ng.label.toggleImportance' | i18n),
     formHeader: ('ui-bb-draft-ng.form.header' | i18n),
     formSubject: ('ui-bb-draft-ng.form.subject' | i18n),
     formTopic: ('ui-bb-draft-ng.form.topic' | i18n),
     formMessage: ('ui-bb-draft-ng.form.message' | i18n),
     formSend: ('ui-bb-draft-ng.form.send' | i18n),
     errorSend: ('ui-bb-draft-ng.error.send' | i18n),
   }"></ui-bb-draft-edit-ng>
```

## Type Definitions


### <a name="Topic"></a>*Topic*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| code | String |  |
| name | String |  |

### <a name="UiBbDraftEditNgConfig"></a>*UiBbDraftEditNgConfig*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| subjectMaxLength | Number | Max allowed length for new draft subject. |

### <a name="UiBbDraftEditNgMessages"></a>*UiBbDraftEditNgMessages*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| formHeader | String | text for form heading |
| formTopic | String | label for topic/category/recipient field |
| formSubject | String | label for subject field |
| formMessage | String | label for message body text area |
| formSend | String | label for send button |
| errorSend | String | error to be shown if draft sending fails |

---
