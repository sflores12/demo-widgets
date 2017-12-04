# lib-bb-storage-ng


Version: **1.0.82**

Provides a cross-platform interface for temporary storage or data between widget/page instances.
It provides a key-value store that is persisted between Page loads in the browser and between
WebViews on mobile.

## Imports

* lib-bb-storage
* vendor-bb-angular

---

## Example

```javascript
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

angular
  .module('ExampleModule', [
    bbStorageModuleKey,
  ])
  .controller('MyController', [
    bbStorageServiceKey,
    // into //
    (bbStorage) => {
      const $ctrl = this;
      let unsubscribe = () => {};

      const counterStorage = 'counter';

      $ctrl.$onInit = () => {
        unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
          // called whenever the value in the storage is set
          $ctrl.counter = newValue;
        });
      };

      $ctrl.$onDestroy = () => {
        unsubscribe();
      };

      $ctrl.increment = () =>
        bbStorage.getItem(counterStorage)
        .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
    },
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#bbStorageServiceKey">bbStorageServiceKey</a><br/>
- **lib-bb-storage-ng**<br/>    <a href="#lib-bb-storage-ngbbStorageService">bbStorageService()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*

### <a name="bbStorageServiceKey"></a>*bbStorageServiceKey*

Injector name for a [bbStorageService](#bbStorageService)

**Type:** *String*


---

### <a name="lib-bb-storage-ngbbStorageService"></a>*bbStorageService()*

The <a href="lib-bb-storage.html#StorageService">StorageService</a> factory.
Creates a new storage service by detecting the best storage mechanism available in the
current environment.


##### Returns

<a href="lib-bb-storage.html#StorageService">StorageService</a> - *Storage API*
