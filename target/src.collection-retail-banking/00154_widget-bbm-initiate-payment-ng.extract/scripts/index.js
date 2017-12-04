/**
 * @module widget-bbm-initiate-payment-ng
 *
 * @description
 * Mobile Initiate Payment widget.
 *
 * @example
 *  <!-- Initiate Payment Form Extension -->
 *  <div ng-controller="FormController as $ctrl">
 *    <form name="initiate-payment-form">
 *      <input
 *        type="text"
 *        name="description"
 *        value="$ctrl.state.payment.data.description"/>
 *    </form>
 *  </div>
 *
 *  <!-- Initiate Payment Review Extension -->
 *  <div ng-controller="ReviewController as $ctrl">
 *    <ul>
 *      <li>
 *        <div i18n-key="label.description"></div>
 *        <div data-ng-bind="$ctrl.state.payment.data.description"></div>
 *      </li>
 *    </ul>
 *  </div>
 *
 *  <!-- Initiate Payment Select Account Extension -->
 *  <div ng-controller="SelectAccountController as $ctrl">
 *    <ul>
 *      <li ng-repeat="account in $ctrl.state.beneficiaries.data.creditAccounts track by $index">
 *        <div data-ng-bind="account.name"></div>
 *        <div data-ng-bind="account.identifier"></div>
 *      </li>
 *    </ul>
 *  </div>
 *
 *  <!-- Initiate Payment Schedule Extension -->
 *  <div ng-controller="ScheduleController as $ctrl">
 *    <div>
 *      <input
 *        type="number"
 *        name="repeat"
 *        value="$ctrl.state.payment.data.schedule.repeat"/>
 *    </div>
 *  </div>
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import FormController from './controllers/form.controller';
import ReviewController from './controllers/review.controller';
import SelectAccountController from './controllers/select-account.controller';
import ScheduleController from './controllers/schedule.controller';

import SharedApi from './controllers/shared-api';

import ViewModel from './view-model';

import * as defaultHooks from './default-hooks';

const moduleKey = 'widget-bbm-initiate-payment-ng';
const sharedApiKey = `${moduleKey}:sharedApi`;
const hooksKey = `${moduleKey}:hooks`;
const viewModelKey = `${moduleKey}:viewModel`;

export default angular
  .module(moduleKey, [
    bbStorageModuleKey,
    eventBusModuleKey,
    intentModuleKey,
    modelPaymentOrdersModuleKey,
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
    modelPaymentOrdersKey,
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
    modelPaymentOrdersKey,
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
    modelPaymentOrdersKey,
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
    modelPaymentOrdersKey,
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
    modelPaymentOrdersKey,
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
