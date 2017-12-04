/**
 * @module widget-bb-product-summary-ng
 *
 * @description
 * Product summary.
 *
 * @borrows module:model-bb-product-summary-ng.Product as Product
 * @borrows module:model-bb-product-summary-ng.ProductKind as ProductKind
 * @borrows module:lib-bb-model-errors.ModelError as ModelError
 *
 * @example
 *  <div ng-controller="ProductSummaryController as $ctrl">
 *    <ul>
 *       <li ng-repeat="product in $ctrl.products">{{product.id}}</li>
 *    </ul>
 *  </div>
 */
import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import modelProductSummaryModuleKey, {
  modelProductSummaryKey,
} from 'model-bb-product-summary-ng';

import eventBusModuleKey, {
  eventBusKey,
} from 'lib-bb-event-bus-ng';

import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-product-summary-ng:hooks';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular
  .module('widget-bb-product-summary-ng', [
    modelProductSummaryModuleKey,
    eventBusModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('ProductSummaryController', [
    modelProductSummaryKey,
    hooksKey,
    eventBusKey,
    widgetKey,
    bbIntentKey,
    /* into */
    Controller,
  ])

  .run([eventBusKey, widgetKey, bbIntentKey, (bus, widget, bbIntent) => {
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });
    bbIntent.init();
  }])

  .name;
