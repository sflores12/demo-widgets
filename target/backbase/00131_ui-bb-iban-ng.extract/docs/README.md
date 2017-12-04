# ui-bb-iban-ng


Version: **1.0.155**

IBAN input custom validation directive.

## Imports

* lib-bb-iban
* vendor-bb-angular

---

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## uiBbIban

Custom form validation for IBAN account number

## Example

```javascript
<form name="form">
  <label for="ibanInputId">IBAN</label>
  <input type="text" id="ibanInputId" name="ibanInput" data-ng-model="iban" ui-bb-iban />
  <span data-ng-if="form.ibanInput.$error.uiBbIban">
    Please input a valid IBAN
  </span>
</form>
```
