/**
 * @module widget-bbm-payment-ng
 *
 * @description
 * Mobile Payment widget.
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelPaymentModuleKey, { modelPaymentKey } from 'model-bb-payment-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import FormController from './controllers/form.controller';
import ReviewController from './controllers/review.controller';
import SelectAccountController from './controllers/select-account.controller';
import ScheduleController from './controllers/schedule.controller';

import SharedApi from './controllers/shared-api';

import ViewModel from './view-model';

import * as defaultHooks from './default-hooks';

const moduleKey = 'widget-bbm-payment-ng';
const sharedApiKey = `${moduleKey}:sharedApi`;
const hooksKey = `${moduleKey}:hooks`;
const viewModelKey = `${moduleKey}:viewModel`;

export default angular
  .module(moduleKey, [
    bbStorageModuleKey,
    eventBusModuleKey,
    intentModuleKey,
    modelPaymentModuleKey,
    widgetModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .factory(viewModelKey, [
    // dependencies to inject
    bbStorageServiceKey,

    // into
    ViewModel,
  ])

  .factory(sharedApiKey, [
    // dependencies to inject
    widgetKey,
    modelPaymentKey,
    viewModelKey,
    eventBusKey,
    hooksKey,
    '$q',

    // into
    SharedApi,
  ])

  .controller('FormController', [
    // dependencies to inject
    widgetKey,
    modelPaymentKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,
    hooksKey,
    '$q',

    // into
    FormController,
  ])

  .controller('ReviewController', [
    // dependencies to inject
    widgetKey,
    modelPaymentKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,

    // into
    ReviewController,
  ])

  .controller('SelectAccountController', [
    // dependencies to inject
    widgetKey,
    modelPaymentKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,

    /* into */
    SelectAccountController,
  ])

  .controller('ScheduleController', [
    // dependencies to inject
    widgetKey,
    modelPaymentKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,

    /* into */
    ScheduleController,
  ])

  .name;

/**
 * @typedef {Object} AccountView
 * @property {string} id The internal account identifier
 * @property {string} name The account's name, suitable for display to users
 * @property {?string} identifier The identifier of the account from the user's perspective
 * @property {?string} amount The most important associated value to be displayed
 * @property {?string} currency Account currency
 * @property {?boolean} external Whether the account is external
 */
