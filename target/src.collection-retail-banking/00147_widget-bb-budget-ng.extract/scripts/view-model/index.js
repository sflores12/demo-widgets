import list from './list';
import create from './create';
import edit from './edit';
import deleteBudget from './delete';
import { createInitialState } from './helpers';

/**
 * @typedef {Object} ViewState
 * @property {boolean} isLoading
 * @property {Array<BudgetItem>} budgets
 * @property {string} template
 */

/**
 * @name ViewModel
 * @type {object}
 * @ngkey widget-bb-budget-ng:viewModel
 * @inner
 */
export default (vm) => ({
  init: vm.createAction((current = createInitialState()) => current),
  /**
   * @name ViewModel#list
   * @description
   * Actions for updating the parts of the `ViewState` related to budget list
   * @type {ViewModelListActions}
   * @inner
   */
  list: list(vm),
  /**
   * @name ViewModel#create
   * @description
   * Actions for updating the parts of the `ViewState` related to budget creation
   * @type {ViewModelCreateActions}
   * @inner
   */
  create: create(vm),
  /**
   * @name ViewModel#edit
   * @description
   * Actions for updating the parts of the `ViewState` related to budget editing
   * @type {ViewModelEditActions}
   * @inner
   */
  edit: edit(vm),
  /**
   * @name ViewModel#deleteBudget
   * @description
   * Actions for updating the parts of the `ViewState` related to budget deleting
   * @type {ViewModelDeleteBudgetActions}
   * @inner
   */
  deleteBudget: deleteBudget(vm),
});
