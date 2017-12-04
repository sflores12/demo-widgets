/**
 * @module widget-bb-transaction-categories-ng
 *
 * @description
 * Transaction categories
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import modelTransactionCategoriesModuleKey, {
  modelTransactionCategoriesKey,
} from 'model-bb-transaction-categories-ng';

import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';

import defaultHooks from './default-hooks';

const moduleKey = 'widget-bb-transaction-categories-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
    modelTransactionCategoriesModuleKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('TransactionCategoriesController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    widgetKey,
    modelTransactionCategoriesKey,
    bbIntentKey,
    /* into */
    Controller,
  ])

  // Initialize intent library
  .run([bbIntentKey, (intents) => {
    intents.init();
  }])

  .name;
