export default {
 /**
  * Triggered when product is selected.
  * @event bb.event.product.selected
  * @type {any}
  */
  PRODUCT_SELECTED: 'bb.event.product.selected',
 /**
  * Triggered when products selection has changed
  * @event bb.event.products.selected
  * @type {any}
  */
  PRODUCTS_SELECTED: 'bb.event.products.selected',
 /**
  * Triggered when period start date is changed.
  * @event bb.event.turnovers.period.start.date.changed
  * @type {any}
  */
  PERIOD_START_CHANGED: 'bb.event.turnovers.period.start.date.changed',
 /**
  * Triggered when period end date is changed.
  * @event bb.event.turnovers.period.end.date.changed
  * @type {any}
  */
  PERIOD_END_CHANGED: 'bb.event.turnovers.period.end.date.changed',
 /**
  * Triggered when turnovers widget fails to load.
  * @event widget-bb-turnovers-ng.load.failed
  * @type {any}
  */
  TURNOVERS_LOAD_FAILED: 'widget-bb-turnovers-ng.load.failed',
};
