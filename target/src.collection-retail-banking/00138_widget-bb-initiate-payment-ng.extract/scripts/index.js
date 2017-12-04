/**
 * @module widget-bb-initiate-payment-ng
 *
 * @description
 * Initiate payment widget
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const moduleKey = 'widget-bb-initiate-payment-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
    modelPaymentOrdersModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('InitiatePaymentController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    modelPaymentOrdersKey,
    bbStorageServiceKey,
    widgetKey,
    '$q',
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
