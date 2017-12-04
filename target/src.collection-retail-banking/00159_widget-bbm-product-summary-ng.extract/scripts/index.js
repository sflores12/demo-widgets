/**
 * @module widget-bbm-product-summary-ng
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
 *       <li ng-repeat="product in ext.helpers.productKinds">{{product.id}}</li>
 *    </ul>
 *  </div>
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import stateContainerModuleKey, { bbStateContainerKey } from 'lib-bb-state-container-ng';

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import modelProductSummaryModuleKey, {
  modelProductSummaryKey,
} from 'model-bb-product-summary-ng';

import eventBusModuleKey, {
  eventBusKey,
} from 'lib-bb-event-bus-ng';

import Controller from './controller';
import createViewModel from './view-model';
import createService from './service';
import initIntents from './intents';
import { Event } from './constants';

const moduleKey = 'widget-bbm-product-summary-ng';
const serviceKey = `${moduleKey}:service`;
const viewModelKey = `${moduleKey}:viewModel`;

export default angular
  .module(moduleKey, [
    modelProductSummaryModuleKey,
    eventBusModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
    stateContainerModuleKey,
    bbExtensionHelpersModuleKey,
  ])
  .factory(viewModelKey, [
    bbStateContainerKey,
    /* into */
    createViewModel,
  ])
  .factory(serviceKey, [
    modelProductSummaryKey,
    viewModelKey,
    /* into */
    createService,
  ])
  .factory(extensionHelpersContextKey, [
    bbIntentKey,
    (bbIntent) => ({ bbIntent }),
  ])
  .controller('ProductSummaryController', [
    serviceKey,
    /* into */
    Controller,
  ])
  .run([bbIntentKey, initIntents])
  .run([
    bbIntentKey, eventBusKey, viewModelKey, widgetKey,
    (bbIntent, eventBus, viewModel, widget) => {
      viewModel.init();

      bbIntent.init().then(() => {
        eventBus.publish(Event.CXP_ITEM_LOADED, {
          id: widget.getId(),
        });

        eventBus.publish(Event.BB_ITEM_LOADED, {
          id: widget.getId(),
        });
      });
    }])
  .name;

