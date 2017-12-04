/**
 * @module widget-bb-budget-ng
 *
 * @description
 * Budget
 */
import angular from 'vendor-bb-angular';

import extendHooks, { extensionContextKey } from 'lib-bb-widget-extension-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';
import modelBudgetModuleKey, { modelBudgetKey } from 'model-bb-budget-ng';
import stateContainerModuleKey, { bbStateContainerKey } from 'lib-bb-state-container-ng';
import libBbCurrencyNgKey, { bbCurrencyRuleKey } from 'lib-bb-currency-ng';

import BudgetService from './service';
import ViewModel from './view-model/index';
import Router from './router';
import defaultHooks from './default-hooks';

/* Controllers */
import ListBudgetsController from './list-budgets-controller';
import BudgetFormController from './budget-form-controller';

const moduleKey = 'widget-bb-budget-ng';
const hooksKey = `${moduleKey}:hooks`;
const budgetServiceKey = `${moduleKey}:service`;
const viewModelKey = `${moduleKey}:view-model`;
const routerKey = `${moduleKey}:router`;

export default angular
  .module(moduleKey, [
    eventBusModuleKey,
    modelBudgetModuleKey,
    stateContainerModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
    bbExtensionHelpersModuleKey,
    libBbCurrencyNgKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .factory(viewModelKey, [
    bbStateContainerKey,
    /* into */
    ViewModel,
  ])

  .factory(budgetServiceKey, [
    modelBudgetKey,
    viewModelKey,
    /* into */
    BudgetService,
  ])

  .factory(routerKey, [
    bbStateContainerKey,
    /* into */
    Router,
  ])

  .controller('ListBudgetsController', [
    budgetServiceKey,
    routerKey,
    /* into */
    ListBudgetsController,
  ])
  .controller('BudgetFormController', [
    budgetServiceKey,
    routerKey,
    /* into */
    BudgetFormController,
  ])

  .factory(extensionContextKey, [
    budgetServiceKey,
    routerKey,
    /* into */
    (budgetService, router) => ({
      budgetService,
      router,
    }),
  ])

  .factory(extensionHelpersContextKey, [
    bbCurrencyRuleKey,
    (getRule) => ({
      getRule,
    }),
  ])

  .run([
    bbIntentKey, bbStateContainerKey, viewModelKey, eventBusKey, widgetKey,
    (bbIntent, bbStateContainer, viewModel, eventBus, widget) => {
      viewModel.init();

      bbIntent.persist(bbStateContainer.getState, bbStateContainer.setState);

      bbIntent.init().then(() => {
        eventBus.publish('cxp.item.loaded', {
          id: widget.getId(),
        });
      });
    },
  ])
  .name;


/**
 * @typedef {object} BudgetItem
 * @extends module:model-bb-budget-ng.BudgetItem
 */

/**
 * @typedef {object} HelperContext
 * @extends module:lib-bb-extension-helpers-ng.HelperContext
 */

/**
 * @typedef {object} IntentContext
 * @extends module:lib-bb-extension-intents-ng.IntentContext
 */

/**
 * @typedef {object} EventContext
 * @extends module:lib-bb-extension-events-ng.EventContext
 * @property {BudgetService} BudgetService
 */
