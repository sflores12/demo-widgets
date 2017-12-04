/**
 * @name ListBudgetsController
 * @ngkey ListBudgetsController
 * @type {object}
 * @description
 * Budget widget list controller
 */
export default function (service, router) {
  let unsubscribe = null;

  /**
   * @name ListBudgetsController#$onInit
   *
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @type {function}
   * @returns {Promise} Promise which is resolved once contoller is initialized,
   *   or rejected in case of errors
   */
  const $onInit = () => {
    const loadItems = () => service.list();
    loadItems();
    unsubscribe = router.subscribe((route) => {
      const params = router.getParams() || {};
      if (route !== 'list' || !params.reload) return;
      loadItems();
    });
  };

  /**
   * @name ListBudgetsController#$onDestroy
   *
   * @description
   * AngularJS Lifecycle hook used to destroy the controller
   *
   * @type {function}
   */
  const $onDestroy = () => {
    if (unsubscribe) unsubscribe();
  };

  /**
   * @name ListBudgetsController#edit
   *
   * @description
   * Internal navigation for getting to edit form from the list of items
   *
   * @type {function}
   * @param {string} budgetId identifier of a budget to be changed
   */
  const edit = budgetId => {
    router.goto('form', budgetId);
  };

  /**
   * @name ListBudgetsController#create
   *
   * @description
   * Internal navigation for getting to create form from the list of items
   *
   * @type {function}
   */
  const create = () => {
    router.goto('form');
  };

  /**
   * @name ListBudgetsController#deleteBudget
   *
   * @description
   * Controller method to handle deleting of an item
   *
   * @type {function}
   * @param {object} budget Object to be removed
   * @param {?boolean} thenReload Flag which defines if budget values should be reloaded
   * from the server after delete operation (default true)
   */
  const deleteBudget = (budget, thenReload = true) =>
    service.deleteBudget(budget)
      .then(() => {
        router.goto('list', { reload: thenReload });
      });


  return {
    edit,
    create,
    deleteBudget,
    $onInit,
    $onDestroy,
  };
}
