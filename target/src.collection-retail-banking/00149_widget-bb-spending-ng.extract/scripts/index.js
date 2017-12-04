/**
 * @module widget-bb-spending-ng
 *
 * @description
 * Spending analysis widget
 *
 * @usage
 * <div ng-controller="SpendingAnalysisController as $ctrl">
 *   <ui-bb-chartjs-chart-donut-ng
 *     data-series="$ctrl.series"
 *   ></ui-bb-chartjs-chart-donut-ng>
 * </div>
 */

import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

import modelSpendingModuleKey, { modelSpendingKey } from 'model-bb-spending-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import defaultHooks from './default-hooks';

const moduleKey = 'widget-bb-spending-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
    intentModuleKey,

    modelSpendingModuleKey,
    bbExtensionHelpersModuleKey,
  ])

  .factory(extensionHelpersContextKey, [
    '$compile',
    '$rootScope',
    eventBusKey,
    ($compile, $rootScope, bus) => ({
      $compile,
      $rootScope,
      bus,
    }),
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('SpendingController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    modelSpendingKey,
    bbIntentKey,
    /* into */
    Controller,
  ])

  .run([eventBusKey, widgetKey, (bus, widget) => {
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });
  }])

  .name;
