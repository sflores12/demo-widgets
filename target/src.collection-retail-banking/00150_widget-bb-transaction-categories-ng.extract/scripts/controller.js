/**
 * @module widget-bb-transaction-categories-ng
 * @name TransactionCategoriesController
 *
 * @description
 * Transaction categories
 */

import { E_AUTH, E_CONNECTIVITY } from 'lib-bb-model-errors';
import { Event, Intent, PreferencesKeys } from './constants';

const errorMessage = (code) => ({
  [E_AUTH]: 'error.load.auth',
  [E_CONNECTIVITY]: 'error.load.connectivity',
}[code] || 'error.load.unexpected');

export default function TransactionCategoriesController(bus, hooks, widget, model, bbIntent) {
  const $ctrl = this;
  let intentResolve;
  let selectedTransaction;
  const intentPreferencesArray =
    widget.getStringPreference(PreferencesKeys.INTENTS_LIST).split(',');

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name TransactionCategoriesController#$onInit
   * @type {function}
   * @returns {void}
   */
  const $onInit = () => {
    $ctrl.isLoading = true;

    return model.getCategories()
      .then(loaded => {
        $ctrl.items = hooks.afterCategoriesLoad(loaded);
      })
      .then(() => {
        $ctrl.isLoading = false;

        bus.publish(Event.CXP_ITEM_LOADED, {
          id: widget.getId(),
        });

        bus.publish(Event.BB_ITEM_LOADED, {
          id: widget.getId(),
        });

        if (intentPreferencesArray.indexOf(Intent.SHOW_CATEGORIES) > -1) {
          bbIntent.handle(Intent.SHOW_CATEGORIES, (passedData, respond) => {
            $ctrl.selectedTransaction = hooks.selectedTransactionObject(passedData);
            $ctrl.isModalOpen = true;
            $ctrl.intentResolve = respond;
          });
        }
      })
      .catch(error => {
        $ctrl.error = errorMessage(error.code);
        bus.publish('widget-bb-transaction-categories-ng.load.failed', { error });
      });
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * @description
     * The value returned from {@link Hooks.processItems} hook.
     * null if the items aren't loaded.
     *
     * @name TransactionCategoriesController#items
     * @type {any}
     */
    items: null,

    /**
     * @description
     * Loading status
     *
     * @name TransactionCategoriesController#isLoading
     * @type {boolean}
     */
    isLoading: false,

    /**
     * @description
     * The error encountered when attempting to fetch from the model
     *
     * @name TransactionCategoriesController#error
     * @type {ModelError}
     */
    error: null,

    intentResolve,

    selectedTransaction,
  });
}
