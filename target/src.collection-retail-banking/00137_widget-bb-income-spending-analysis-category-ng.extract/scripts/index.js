/**
 * @module widget-bb-income-spending-analysis-category-ng
 *
 * @description
 * Income/Spending analysis by category widget
 *
 * @usage
 * <div ng-controller="IncomeSpendingAnalysisCategoryController as $ctrl">
 *   <ui-bb-chartjs-chart-donut-ng
 *     data-series="$ctrl.series"
 *   ></ui-bb-chartjs-chart-donut-ng>
 * </div>
 */

import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

import libBbCurrencyNgKey, {
  bbCurrencyRuleKey,
} from 'lib-bb-currency-ng';

import modelIncomeSpendingAnalysisCategoryModuleKey, {
  modelIncomeSpendingAnalysisCategoryKey,
} from 'model-bb-income-spending-analysis-category-ng';

import modelTurnoversModuleKey, { modelTurnoversKey } from 'model-bb-turnovers-ng';

import extendHooks from 'lib-bb-widget-extension-ng';

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import defaultHooks from './default-hooks';
import helpers from './helpers';

const moduleKey = 'widget-bb-income-spending-analysis-category-ng';
const hooksKey = `${moduleKey}:hooks`;
const helpersKey = `${moduleKey}:helpers`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
    intentModuleKey,

    modelIncomeSpendingAnalysisCategoryModuleKey,
    modelTurnoversModuleKey,
    libBbCurrencyNgKey,
    bbExtensionHelpersModuleKey,
  ])

  .factory(extensionHelpersContextKey, [
    '$compile',
    '$rootScope',
    eventBusKey,
    bbCurrencyRuleKey,
    ($compile, $rootScope, bus, getRule) => ({
      $compile,
      $rootScope,
      bus,
      getRule,
    }),
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .factory(helpersKey, [
    '$timeout',
    helpers,
  ])

  .controller('IncomeSpendingAnalysisCategoryController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    helpersKey,
    modelIncomeSpendingAnalysisCategoryKey,
    modelTurnoversKey,
    bbIntentKey,
    widgetKey,
    /* into */
    Controller,
  ])

  .run([eventBusKey, widgetKey, (bus, widget) => {
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });
  }])

  .name;
