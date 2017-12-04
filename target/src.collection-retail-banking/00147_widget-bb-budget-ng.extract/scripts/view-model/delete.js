import { makeUIErrorMessage, makeUISuccessMessage } from './helpers';


export default (vm) => ({
  /**
   * @name ViewModelDeleteBudgetActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelDeleteBudgetActions#beforeDelete
   * @inner
   * @type {function}
   * @description Amend the view to inform the user that delete operation is being started
   *
   * @param {ViewState} current The current state of the view model
   * @return {ViewState} The new state of the view model
   */
  beforeDelete: vm.createAction((current) => ({
    ...current,
    isLoading: true,
  })),

  /**
   * @name ViewModelDeleteBudgetActions#afterDeleteSuccess
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that delete operation successfully finished
   *
   * @param {ViewState} current The current state of the view model
   * @returns {ViewState} The new state of the view model
   */
  afterDeleteSuccess: vm.createAction((current) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUISuccessMessage('delete')],
    isLoading: false,
  })),

  /**
   * @name ViewModelDeleteBudgetActions#afterDeleteError
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that there was
   * an error during the deleting
   *
   * @param {ViewState} current The current state of the view model
   * @param {object} error server error response
   * @returns {ViewState} The new state of the view model
   */
  afterDeleteError: vm.createAction((current, error) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUIErrorMessage(error)],
    isLoading: false,
  })),
});
