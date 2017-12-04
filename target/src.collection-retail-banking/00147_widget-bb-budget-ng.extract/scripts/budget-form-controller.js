/**
 * @name BudgetFormController
 * @ngkey BudgetFormController
 * @type {object}
 * @description
 * Budget widget form controller
 */
export default (service, router) => ({
  /**
   * @name BudgetFormController#$onInit
   *
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @type {function}
   * @returns {Promise} Promise which is resolved once contoller is initialized,
   *   or rejected in case of errors
   */
  $onInit() {
    const budgetId = router.getParams();
    if (budgetId) {
      service.startEdit(budgetId);
    } else {
      service.startCreate();
    }
  },

  /**
   * @name BudgetFormController#$onDestroy
   *
   * @description
   * AngularJS Lifecycle hook used to destroy the controller
   *
   * @type {function}
   */
  $onDestroy() {
    router.goto('list');
  },

  /**
   * @name BudgetFormController#save
   *
   * @description
   * Controller method to handle new/edited item saving
   * and to initiate state change via routing
   *
   * @type {function}
   * @param {object} value Object to be saved as a budget
   * @param {?boolean} thenReload Flag which defines if budget values should be reloaded
   * from the server after update/create operation
   */
  save(value, thenReload = true) {
    if (router.getParams()) {
      service.edit(value)
        .then(() => {
          router.goto('list', { reload: thenReload });
        });
    } else {
      service.create(value)
        .then(() => {
          router.goto('list', { reload: thenReload });
        });
    }
  },
});
