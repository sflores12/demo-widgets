/**
 * @module widget-bb-manage-payment-orders-ng
 *
 * @description
 * Widget to manage payment orders
 */
import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';
import stateContainerModuleKey, { bbStateContainerKey } from 'lib-bb-state-container-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

import service from './service';
import createViewModel from './view-model/index';

const hooksKey = 'widget-bb-manage-payment-orders-ng:hooks';
const serviceKey = 'widget-bb-manage-payment-orders-ng:service';
const viewModelKey = 'widget-bb-manage-payment-orders-ng:viewModel';

export default angular
  .module('widget-bb-manage-payment-orders-ng', [
    modelPaymentOrdersModuleKey,
    widgetModuleKey,
    stateContainerModuleKey,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .factory(serviceKey, [
    modelPaymentOrdersKey,
    viewModelKey,
    hooksKey,
    /* into */
    service,
  ])
  .factory(viewModelKey, [
    bbStateContainerKey,
    widgetKey,
    hooksKey,
    /* into */
    createViewModel,
  ])
  .controller('ManagePaymentOrderController', [
    widgetKey,
    hooksKey,
    viewModelKey,
    serviceKey,
    bbStateContainerKey,
    /* into */
    Controller,
  ])

  .run([viewModelKey, (viewModel) => {
    viewModel.init();
  }])

  .name;
