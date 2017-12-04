# lib-bb-styles


Version: **1.2.20**

Provides a method to read defined styles from document's stylesheet

## Example

```javascript
// file: my-helper.js

import getStyle from 'lib-bb-styles';

function integrateStyles() {
  return {
    color: getStyle('.some-class', 'color'),
  };
} ```
```

## Table of Contents
- **lib-bb-styles**<br/>    <a href="#lib-bb-stylesgetStyle">getStyle(selector, style, useCache)</a><br/>

---

### <a name="lib-bb-stylesgetStyle"></a>*getStyle(selector, style, useCache)*

Retrieves style from document's stylesheets

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selector | String | CSS selector. Must match selector in stylesheet |
| style | String | defined in stylesheet |
| useCache | Boolean (optional) | check cache for result (default true) |

##### Returns

String - *Style value or empty string if not found*
