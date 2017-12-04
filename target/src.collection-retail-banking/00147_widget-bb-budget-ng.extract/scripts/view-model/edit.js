import angular from 'vendor-bb-angular';
import { makeUIErrorMessage, makeUISuccessMessage, findBudgetById } from './helpers';


export default (vm) => ({
  /**
   * @name ViewModelEditActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelEditActions#beforeStartEdit
   * @inner
   * @type {function}
   * @description Amend the view to inform the user that the edit form is being
   * ready
   *
   * @param {ViewState} current The current state of the view model
   * @param {{budgetId: string, schema: object}} budget object id and schema to be used for editing
   * @return {ViewState} The new state of the view model
   */
  beforeStartEdit: vm.createAction((current, params) => {
    const { budgetId, schema } = params;
    return {
      ...current,
      form: angular.copy(findBudgetById(current.budgets, budgetId)),
      schema,
      isLoading: false,
    };
  }),

  /**
   * @name ViewModelEditActions#beforeEdit
   * @inner
   * @type {function}
   * @description Amend the view to inform the user the edit operation is being
   * started
   *
   * @param {ViewState} current The current state of the view model
   * @return {ViewState} The new state of the view model
   */
  beforeEdit: vm.createAction((current) => ({
    ...current,
    isLoading: true,
  })),

  /**
   * @name ViewModelEditActions#afterEditSuccess
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that edit operation
   * successfully finished
   *
   * @param {ViewState} current The current state of the view model
   * @returns {ViewState} The new state of the view model
   */
  afterEditSuccess: vm.createAction((current) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUISuccessMessage('update')],
    isLoading: false,
  })),
  /**
   * @name ViewModelEditActions#afterEditError
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that there was
   * an error during the editing
   *
   * @param {ViewState} current The current state of the view model
   * @param {object} error server error response
   * @returns {ViewState} The new state of the view model
   */
  afterEditError: vm.createAction((current, error) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUIErrorMessage(error)],
    isLoading: false,
  })),
});
