/**
 * The core functionality of the Budget widget
 *
 * The purpose of this module is to provide the main structure of the
 * widget. Outlining the workflows, connecting the data from the
 * model to the view via the customizations provided by the extension.
 *
 * @constructor BudgetService
 * @param {BudgetModel} model
 * @param {ViewModel} viewModel
 */
export default (model, viewModel) => ({
  /**
   * @name BudgetService#list
   *
   * @description
   * Update the view with an list of items loaded from the data source
   *
   * @type {function}
   * @param {Object} requestParams paremeters of the BudgetModel.GET request
   * to be passed to the model
   * @return {Promise}
   */
  list(requestParams) {
    viewModel.list.beforeList();
    return model.getBudgets(requestParams)
      .then((response) => viewModel.list.afterListSuccess({
        ...response,
      }), viewModel.list.afterListError);
  },
  /**
   * @name BudgetService#startEdit
   *
   * @description
   * Prepare the view for editing a budget item
   *
   * @type {function}
   * @param {string} budgetId budget item id to be modified
   */
  startEdit: (budgetId) => {
    viewModel.edit.beforeStartEdit({ budgetId, schema: model.getBudgetSchema() });
  },

  /**
   * @name BudgetService#startCreate
   *
   * @description
   * Prepare the view for creating a new budget item
   *
   * @type {function}
   */
  startCreate: () => {
    viewModel.create.beforeStartCreate(model.getBudgetSchema());
  },

  /**
   * @name BudgetService#edit
   *
   * @description
   * Updates budget item and triggers view update after it
   *
   * @type {function}
   * @param {module:model-bb-budget-ng.BudgetItem} item budget item to be modified
   * @return {Promise}
   */
  edit: (budget) => {
    viewModel.edit.beforeEdit();
    return model.updateBudget(budget.id, budget)
      .then(
        viewModel.edit.afterEditSuccess,
        viewModel.edit.afterEditError
      );
  },

  /**
   * @name BudgetService#create
   *
   * @description
   * Creates a new budget item and triggers view update after it
   *
   * @type {function}
   * @param {module:model-bb-budget-ng.BudgetItem} item set of data for a new budget to be created
   * @return {Promise}
   */
  create: (item) => {
    viewModel.create.beforeCreate();
    return model.createBudget(item)
      .then(
        viewModel.create.afterCreateSuccess,
        viewModel.create.afterCreateError
      );
  },

  /**
   * @name BudgetService#deleteBudget
   *
   * @description
   * Removes budget and triggers view update after it
   *
   * @type {function}
   * @param {module:model-bb-budget-ng.BudgetItem} item budget item to be deleted
   * @return {Promise}
   */
  deleteBudget: (budget) => {
    viewModel.deleteBudget.beforeDelete();
    return model.deleteBudget(budget.id, budget)
      .then(
        viewModel.deleteBudget.afterDeleteSuccess,
        viewModel.deleteBudget.afterDeleteError
      );
  },
});
