/**
 * @module widget-bbm-product-details-ng
 *
 * @description
 * Mobile product details widget.
 *
 * @example
 *  <div ng-controller="FormController as $ctrl">
 *  </div>
 *
 *  <div ng-controller="ViewController as $ctrl">
 *  </div>
 */

import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelProductSummaryModuleKey, { modelProductSummaryKey } from 'model-bb-product-summary-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import ViewController from './controllers/view.controller';
import FormController from './controllers/form.controller';

import {
  MODULE_KEY,
  VIEW_CONTROLLER_KEY,
  FORM_CONTROLLER_KEY,
} from './constants';

import ViewModel from './view-model';

import * as defaultHooks from './default-hooks';

const viewModelKey = `${MODULE_KEY}:viewModel`;
const hooksKey = `${MODULE_KEY}:hooks`;

export default angular
  .module(MODULE_KEY, [
    bbStorageModuleKey,
    eventBusModuleKey,
    intentModuleKey,
    modelProductSummaryModuleKey,
    widgetModuleKey,
  ])

  .factory(viewModelKey, [
    // dependencies to inject
    modelProductSummaryKey,
    bbStorageServiceKey,

    // into
    ViewModel,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller(VIEW_CONTROLLER_KEY, [
    // dependencies to inject
    widgetKey,
    modelProductSummaryKey,
    viewModelKey,
    bbIntentKey,
    eventBusKey,
    hooksKey,

    // into
    ViewController,
  ])
  .controller(FORM_CONTROLLER_KEY, [
    // dependencies to inject
    widgetKey,
    modelProductSummaryKey,
    viewModelKey,
    bbIntentKey,
    eventBusKey,

    // into
    FormController,
  ])
  .name;
