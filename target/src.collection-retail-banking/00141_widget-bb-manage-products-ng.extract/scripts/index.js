/**
 * @module widget-bb-manage-products-ng
 *
 * @description
 * Manage products
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelProductSummaryModuleKey, {
  modelProductSummaryKey,
} from 'model-bb-product-summary-ng';

import Controller from './controller';
import defaultHooks from './default-hooks';

const moduleKey = 'widget-bb-manage-products-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    modelProductSummaryModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('ManageProductsController', [
    // dependencies to inject
    modelProductSummaryKey,
    eventBusKey,
    hooksKey,
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
