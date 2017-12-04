# lib-bbm-plugins


Version: **1.0.106**

Provides access to the mobile native plugins with a Promise interface, rather than

## Table of Contents
- **ActivityIndicator**<br/>    <a href="#ActivityIndicator#show">#show(message)</a><br/>    <a href="#ActivityIndicator#hide">#hide()</a><br/>
- **AlertDialog**<br/>    <a href="#AlertDialog#show">#show(options)</a><br/>
- **Camera**<br/>    <a href="#Camera#getImageFromCamera">#getImageFromCamera(maxWidth, maxHeight)</a><br/>    <a href="#Camera#getImageFromGallery">#getImageFromGallery(maxWidth, maxHeight)</a><br/>
- **DatePicker**<br/>    <a href="#DatePicker#show">#show(options)</a><br/>    <a href="#DatePicker#hide">#hide()</a><br/>
- **DropdownAccounts**<br/>    <a href="#DropdownAccounts#show">#show(options)</a><br/>
- **Dropdown**<br/>    <a href="#Dropdown#show">#show(options)</a><br/>
- **Snackbar**<br/>    <a href="#Snackbar#success">#success(message)</a><br/>    <a href="#Snackbar#error">#error(message)</a><br/>    <a href="#Snackbar#warning">#warning(message)</a><br/>    <a href="#Snackbar#info">#info(message)</a><br/>    <a href="#Snackbar#noInternet">#noInternet(message)</a><br/>    <a href="#Snackbar#hide">#hide()</a><br/>
- **lib-bbm-plugins**<br/>    <a href="#lib-bbm-pluginsgetMobilePlugin">getMobilePlugin(name)</a><br/>
- **Type Definitions**<br/>    <a href="#ButtonType">ButtonType</a><br/>

---

## ActivityIndicator

Uses ActivityIndicator mobile plugin


### <a name="ActivityIndicator#show"></a>*#show(message)*

Shows activity indicator with given message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String |  |

##### Returns

Promise - **

### <a name="ActivityIndicator#hide"></a>*#hide()*

Hides activity indicator

##### Returns

Promise - **

---

## AlertDialog

Uses AlertDialog mobile plugin


### <a name="AlertDialog#show"></a>*#show(options)*

Method to show the alert dialog

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |

| Property | Type | Description |
| :-- | :-- | :-- |
| options.title | String | Alert title |
| options.message | String | Alert message |
| options.buttons | Array of <a href="#ButtonType">ButtonType</a> | Alert buttons |

##### Returns

Promise - **

---

## Camera

Uses Camera mobile plugin


### <a name="Camera#getImageFromCamera"></a>*#getImageFromCamera(maxWidth, maxHeight)*

Method to get the image from camera


| Parameter | Type | Description |
| :-- | :-- | :-- |
| maxWidth | Number | Maximum width |
| maxHeight | Number | Maximum height |

##### Returns

Promise - **

### <a name="Camera#getImageFromGallery"></a>*#getImageFromGallery(maxWidth, maxHeight)*

Method to get the image from gallery


| Parameter | Type | Description |
| :-- | :-- | :-- |
| maxWidth | Number | Maximum width |
| maxHeight | Number | Maximum height |

##### Returns

Promise - **

---

## DatePicker

The plugin that shows or hides date picker


### <a name="DatePicker#show"></a>*#show(options)*

Shows date picker with given date


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |

| Property | Type | Description |
| :-- | :-- | :-- |
| options.dateFormat | String | Format of the dates. It will be applied for both input and output dates. See http://www.unicode.org/reports/tr35/tr35-19.html#Date_Format_Patterns for the patterns |
| options.minDate | String | Min date accepted by the component. Must comply with the format specified by dateFormat parameter. |
| options.maxDate | String | Max date accepted by the component. The date must comply with the format specified by dateFormat parameter |

##### Returns

Promise - **

### <a name="DatePicker#hide"></a>*#hide()*

Hides date picker


##### Returns

Promise - **

---

## DropdownAccounts

Uses dropdown accounts mobile plugin


### <a name="DropdownAccounts#show"></a>*#show(options)*

Method to show the dropdown Accounts


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |
| options.title | String | Accounts dropdown title |
| options.items | Array | Contains array of accounts |

##### Returns

Object - *Promise*

---

## Dropdown

Uses dropdown mobile plugin


### <a name="Dropdown#show"></a>*#show(options)*

Method to show the dropdown


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |
| options.title | String | Dropdown title |
| options.items | Array | Contains array of dropdown items |
| options.selectedIndex | Array (optional) | Index of the selected item. Optional. |

##### Returns

Object - *Promise*

---

## Snackbar

Uses snackbar mobile plugin


### <a name="Snackbar#success"></a>*#success(message)*

Shows success snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### <a name="Snackbar#error"></a>*#error(message)*

Shows error snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### <a name="Snackbar#warning"></a>*#warning(message)*

Shows warning snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### <a name="Snackbar#info"></a>*#info(message)*

Shows info snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### <a name="Snackbar#noInternet"></a>*#noInternet(message)*

Shows noInternet snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### <a name="Snackbar#hide"></a>*#hide()*

Method to hide the snackbar


##### Returns

Promise - **

---

### <a name="lib-bbm-pluginsgetMobilePlugin"></a>*getMobilePlugin(name)*

Utility to get the mobile plugin


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | Name of the plugin |

##### Returns

Object or Undefined - *Returns plugin object if available.*

## Type Definitions


### <a name="ButtonType"></a>*ButtonType*

Determines the kind of button to be rendered by the system


**Type:** *Object*


---
