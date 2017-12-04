import { makeUIErrorMessage, makeUISuccessMessage } from './helpers';

export default (vm) => ({
  /**
   * @name ViewModelCreateActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelCreateActions#beforeStartCreate
   * @inner
   * @type {function}
   * @description Amend the view to inform the user that the create form is being
   * ready to create a new item
   *
   * @param {ViewState} current The current state of the view model
   * @param {object} schema budget POST schema to be used for validation
   * @return {ViewState} The new state of the view model
   */
  beforeStartCreate: vm.createAction((current, schema) => ({
    ...current,
    form: {},
    schema,
    isLoading: false,
  })),

  /**
   * @name ViewModelCreateActions#beforeCreate
   * @inner
   * @type {function}
   * @description Amend the view to inform the user the create operation is being
   * started
   *
   * @param {ViewState} current The current state of the view model
   * @return {ViewState} The new state of the view model
   */
  beforeCreate: vm.createAction((current) => ({
    ...current,
    isLoading: true,
  })),

  /**
   * @name ViewModelCreateActions#afterCreateSuccess
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that create operation
   * successfully finished
   *
   * @param {ViewState} current The current state of the view model
   * @returns {ViewState} The new state of the view model
   */
  afterCreateSuccess: vm.createAction((current) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUISuccessMessage('create')],
    isLoading: false,
  })),
  /**
   * @name ViewModelCreateActions#afterCreateError
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that there was
   * an error during the creation
   *
   * @param {ViewState} current The current state of the view model
   * @param {object} error
   * @returns {ViewState} The new state of the view model
   */
  afterCreateError: vm.createAction((current, error) => ({
    ...current,
    notifications: [...(current.notifications || []), makeUIErrorMessage(error)],
    isLoading: false,
  })),
  /**
   * @name ViewModelCreateActions#cancelCreate
   * @inner
   * @type {function}
   * @description Ammend the view to inform the user that creating
   * operation is canceled
   *
   * @param {ViewState} current The current state of the view model
   * @returns {ViewState} The new state of the view model
   */
  cancelCreate: vm.createAction((current) => ({
    ...current,
    form: null,
  })),
});
