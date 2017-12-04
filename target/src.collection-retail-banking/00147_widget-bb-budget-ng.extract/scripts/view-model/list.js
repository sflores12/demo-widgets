import { makeUIErrorMessage } from './helpers';

export default (vm) => ({
  /**
   * @name ViewModelListActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelListActions#beforeList
   * @inner
   * @type {function}
   * @description Amend the view to inform the user the list is being loaded
   *
   * @param {ViewState} current The current state of the view model
   * @return {ViewState} The new state of the view model
   */
  beforeList: vm.createAction((current) => ({
    ...current,
    isLoading: true,
  })),

  /**
   * @name ViewModelListActions#afterListSuccess
   * @inner
   * @type {function}
   * @description Amend the view to display the list of items
   *
   * @param {ViewState} current The current state of the view model
   * @param {object} response
   * @param {Array<module:model-bb-budget-ng.BudgetItem>} response.items
   * @return {ViewState} The new state of the view model
   */
  afterListSuccess: vm.createAction((current, response = {}) => ({
    ...current,
    budgets: response.items ? response.items : [],
    isLoading: false,
  })),

  /**
   * @name ViewModelListActions#afterListError
   * @inner
   * @type {function}
   * @description Amend the view to display the error encountered when loading the list
   *
   * @param {ViewState} current The current state of the view model
   * @param {ModelError} error
   * @return {ViewState} The new state of the view model
   */
  afterListError: vm.createAction((current, error) => ({
    ...current,
    budgetsError: makeUIErrorMessage(error),
    isLoading: false,
  })),
});
