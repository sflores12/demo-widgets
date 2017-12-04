/**
 * @module widget-bb-transactions-ng
 *
 * @description
 * Transactions widget.
 */
import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import stateContainerModuleKey, { bbStateContainerKey } from 'lib-bb-state-container-ng';
import modelModuleKey, { modelTransactionsKey } from 'model-bb-transactions-ng';

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';
import createViewModel from './view-model/index';
import createService from './service';

const hooksKey = 'widget-bb-transactions-ng:hooks';
const serviceKey = 'widget-bb-transactions-ng:service';
const viewModelKey = 'widget-bb-transactions-ng:viewModel';

export default angular
  .module('widget-bb-transactions-ng', [
    modelModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
    intentModuleKey,
    stateContainerModuleKey,
    bbExtensionHelpersModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))
  .factory(viewModelKey, [
    bbStateContainerKey,
    widgetKey,
    hooksKey,
    /* into */
    createViewModel,
  ])
  .factory(serviceKey, [
    modelTransactionsKey,
    viewModelKey,
    '$window',
    /* into */
    createService,
  ])

  .factory(extensionHelpersContextKey, [
    bbIntentKey,
    (bbIntent) => ({ bbIntent }),
  ])

  .controller('TransactionsController', [
    modelTransactionsKey,
    hooksKey,
    widgetKey,
    eventBusKey,
    bbIntentKey,
    '$window',
    '$scope',
    viewModelKey,
    serviceKey,
    bbStateContainerKey,
    /* into */
    Controller,
  ])

  .run([viewModelKey, viewModel => {
    viewModel.init();
  }])
  .name;
