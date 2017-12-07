# Codigo original del template:
* **AcciTrade\accitrade-widgets\collection-accitrademobile\src\ext-accitrademobile-stock-trade-ng\templates\template.ng.html**

```html
<div class="animate-switch-container" ng-switch on="$ctrl.selection">
<div class="animate-switch" ng-switch-when="sell">
````

> **Nota:**El cambio fue unicamente quitarle a los **div** _**ng-switch on and ng-switch-when**_ para que no hiciera el cambio del contenido del **Tab** ya que unicamente habia un **form** asignado a un tab y el otro estaba vacio y no deveria mostrar vacio.

# Para saber el tamaño de items en caso que sea un array

* **Ejemplo: el siguiente componente: AcciTrade\accitrade-widgets\collection-accitrademobile\src\ui-accitrademobile-tabs-ng\scripts\component.js**

```javascript   
import controller from './controller';
import template from '../templates/template.ng.html';

const component = {
  controller,
  bindings: {
    items: '<',
    widget: '@',
  },
  template,
};

export default component;
```
> Podemos observar que los datos a recuperar de los items recibidos desde un widget y en el **controller.js**

```javascript
// Length Tabs
  const lengthTabs = Number($ctrl.items.length) - 1;
  console.log(`lengthTabs:${$ctrl.lengthTabs}`);

```
> **Nota:** _**parseInt()**_ me marca un error por eso se utilizo _**Number**_

# next code