# ext-bb-user-menu-ng


Version: **4.1.20**

Default extension for User Menu widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- User Menu widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-user-menu-ng</value>
</property>
```

## Table of Contents
- **Type Definitions**<br/>    <a href="#User">User</a><br/>    <a href="#Portal">Portal</a><br/>

---

## Type Definitions


### <a name="User"></a>*User*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Name that should be displayed on page |
| username | String (optional) | Internal user identifier |

### <a name="Portal"></a>*Portal*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| loggedInUserId | String | Internally used unique identification of the user |

---
