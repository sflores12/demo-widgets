# lib-bb-permissions-ng


Version: **2.0.102**

Library to download and filter available user permissions by specified set of privileges.
By default permissions will be downloaded from the server for a check and chached.

## Imports

* data-bb-accessgroups-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import bbPermissionsModuleKey, { bbPermissionsKey } from 'lib-bb-permissions-ng';

// General usage:
angular
  .module('ExampleModule', [
    bbPermissionsModuleKey,
  ])
  .config([`${bbPermissionsKey}Provider`,
    (permissionsProvider) => {
      permissionsProvider.setCacheEnabled(false);
      permissionsProvider.setPermissionsCheckEnabled(true);
    }
  ])
  .controller('DemoController', [bbPermissionsKey,
    (permissions) => {
      const privileges = [{
        resource: 'Contacts',
        function: 'Contacts',
        privileges: ['read', 'delete'],
      }];

      // This is more general approach to get permissions for specified privileges
      permissions.getPermissions(privileges)
        .then(data => {
          this.permissions = data;
          this.canDeleteContacts = data.Contacts.Contacts.delete;
        });

      // This is simplified approach to get permission for a single privilege
      permissions.isPermitted('Contacts.Contacts.delete')
        .then(isPermitted => {
          this.canDeleteContacts = isPermitted;
        });
    }
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#bbPermissionsKey">bbPermissionsKey</a><br/>
- **lib-bb-permissions-ng**<br/>    <a href="#lib-bb-permissions-ngsetCacheEnabled">setCacheEnabled(value)</a><br/>    <a href="#lib-bb-permissions-ngsetPermissionsCheckEnabled">setPermissionsCheckEnabled(value)</a><br/>    <a href="#lib-bb-permissions-ngenableDownloadOnInit">enableDownloadOnInit(value)</a><br/>    <a href="#lib-bb-permissions-ngPermissionsLibrary">PermissionsLibrary()</a><br/>    <a href="#lib-bb-permissions-nggetPermissions">getPermissions(privileges=[])</a><br/>    <a href="#lib-bb-permissions-ngisPermitted">isPermitted(privilege)</a><br/>    <a href="#lib-bb-permissions-ngenabled">enabled</a><br/>    <a href="#lib-bb-permissions-ngloading">loading</a><br/>

## Exports

### <a name="bbPermissionsKey"></a>*bbPermissionsKey*

Injector name of [PermissionsLibrary](#PermissionsLibrary) instance

**Type:** *String*


---

### <a name="lib-bb-permissions-ngsetCacheEnabled"></a>*setCacheEnabled(value)*

Sets a flag to enable or disable library caching

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | Is cache enabled |

---

### <a name="lib-bb-permissions-ngsetPermissionsCheckEnabled"></a>*setPermissionsCheckEnabled(value)*

Sets a flag to enable or disable library permissions check at all.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | Is permissions checks enabled |

---

### <a name="lib-bb-permissions-ngenableDownloadOnInit"></a>*enableDownloadOnInit(value)*

Sets flag to enable or disable permissions download on library initialisation.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | Is permissions download on init enabled |

---

### <a name="lib-bb-permissions-ngPermissionsLibrary"></a>*PermissionsLibrary()*

Library responsible for downloading permissions for the widgets,
and caching them in the bbStorage.

---

### <a name="lib-bb-permissions-nggetPermissions"></a>*getPermissions(privileges=[])*

Retrieves available permissions and filters them by specified privileges set.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| privileges=[] | Array of Object | A set of requests privileges |

##### Returns

Promise of Object - *A Promise with permissions object*

---

### <a name="lib-bb-permissions-ngisPermitted"></a>*isPermitted(privilege)*

Checks user permissions for single privelege. Takes only one string parameter,
which have to be formatted in a special way – string should contain of three parts
separated with dot.
First part is Resource name, second part – Business Function name,
third part – privilege to check.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| privilege | String | String which describes single privilege to check. |

##### Returns

Promise of Boolean - *A Promise with boolean permission check result.*

## Example

```javascript
permissionsService.isPermitted('Contacts.Contacts.read')
  .then(isPermitted => { console.log(isPermitted) })
  .catch(error => { console.error('Unable to check permissions') });
```

---
### <a name="lib-bb-permissions-ngenabled"></a>*enabled*

Indicates is permissions check disabled.

**Type:** *Boolean*


---
### <a name="lib-bb-permissions-ngloading"></a>*loading*

Indicates is library currently loading permissions from the server.

**Type:** *Boolean*

