# data-bb-cxp-authentication-http-ng


Version: **1.5.3**

A data module for accessing the CXP Authentication REST API

## Imports

* lib-bb-challenge-ng
* vendor-bb-angular

---

## Example

```javascript
import cXPAuthenticationDataModuleKey, {
  cXPAuthenticationDataKey,
} from 'data-bb-cxp-authentication-http-ng';

For compatibility with CX 6 config-bb-provider is needed with these options

define('config-bb-providers-ng', function (require, exports) {
  exports.default = [
    ['data-bb-cxp-authentication-http-ng:cXPAuthenticationDataProvider', function(endpoint) {
      endpoint.setHeaders({
        Accept: '* /*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Requested-With': 'XMLHttpRequest',
      });
      endpoint.setApiRoot('/gateway/api')
      endpoint.setAuthUri('/auth');
      endpoint.setUsernameParamName('username');
      endpoint.setPasswordParamName('password');
    }],
  ];
});
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#cXPAuthenticationDataKey">cXPAuthenticationDataKey</a><br/>
- **CXPAuthenticationData**<br/>    <a href="#CXPAuthenticationData_getProfile">#getProfile(headers)</a><br/>    <a href="#CXPAuthenticationData_postLogin">#postLogin(data, headers)</a><br/>    <a href="#CXPAuthenticationData_postLogout">#postLogout(headers)</a><br/>
- **CXPAuthenticationDataProvider**<br/>    <a href="#CXPAuthenticationDataProvider_setHeaders">#setHeaders(headers)</a><br/>    <a href="#CXPAuthenticationDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#CXPAuthenticationDataProvider_setApiRoot">#setApiRoot(apiRoot)</a><br/>    <a href="#CXPAuthenticationDataProvider_setUsernameParamName">#setUsernameParamName(usernameParam)</a><br/>    <a href="#CXPAuthenticationDataProvider_setPasswordParamName">#setPasswordParamName(passwordParam)</a><br/>    <a href="#CXPAuthenticationDataProvider_authUri">#authUri(authUri)</a><br/>    <a href="#CXPAuthenticationDataProvider_$get">#$get()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="cXPAuthenticationDataKey"></a>*cXPAuthenticationDataKey*

Angular dependency injection key for the CXP Authentication data service

**Type:** *String*


---

## CXPAuthenticationData

Public api for service data-bb-cxp-authentication-http

### <a name="CXPAuthenticationData_getProfile"></a>*#getProfile(headers)*

Retrieves profile information from CX 6

| Parameter | Type | Description |
| :-- | :-- | :-- |
| headers | Object | custom headers |

##### Returns

Promise of Object - *A promise resolving to object with headers and data keys*

### <a name="CXPAuthenticationData_postLogin"></a>*#postLogin(data, headers)*

Perform a POST request to the URI.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | configuration object |
| headers | Object | custom headers |

##### Returns

Promise of Object - *A promise resolving to object with headers and data keys*

## Example

```javascript
cXPAuthenticationData
 .postLogin(data, headers)
 .then(function(result){
   console.log(result)
 });
```

### <a name="CXPAuthenticationData_postLogout"></a>*#postLogout(headers)*

Perform a POST request to the URI.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| headers | Object | custom headers |

##### Returns

Promise of Object - *A promise resolving to object with headers and data keys*

## Example

```javascript
cXPAuthenticationData
 .postLogout(headers)
 .then(function(result){
   console.log(result)
 });
```

---

## CXPAuthenticationDataProvider

Data service that can be configured with custom base URI.

### <a name="CXPAuthenticationDataProvider_setHeaders"></a>*#setHeaders(headers)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| headers | Object | Object with all headers that should be included for all HTTP requests |

### <a name="CXPAuthenticationDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="CXPAuthenticationDataProvider_setApiRoot"></a>*#setApiRoot(apiRoot)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| apiRoot | String | Root for API calls |

### <a name="CXPAuthenticationDataProvider_setUsernameParamName"></a>*#setUsernameParamName(usernameParam)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| usernameParam | String | New username param key |

### <a name="CXPAuthenticationDataProvider_setPasswordParamName"></a>*#setPasswordParamName(passwordParam)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| passwordParam | String | New password param key |

### <a name="CXPAuthenticationDataProvider_authUri"></a>*#authUri(authUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| authUri | String | Auth URI which will included in all HTTP requests |

### <a name="CXPAuthenticationDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
angular.module(...)
  .config(['data-bb-cxp-authentication-http-ng:cXPAuthenticationDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });
```
