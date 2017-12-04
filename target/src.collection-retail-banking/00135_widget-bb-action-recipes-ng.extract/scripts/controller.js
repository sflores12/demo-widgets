import { View, labels, httpErrorMessages, Event } from './constants';
import { RecipeModel, RecipeAction } from './mappings';

export default function ActionRecipesController(widget, bus, model, hooks) {
  /**
   * @name ActionRecipesController
   * @ngkey ActionRecipesController
   * @type {object}
   * @description Action recipes widget controller
   */
  const $ctrl = this;

  const createRecipeFilter = (specification, apiTrigger, accounts) => {
    const filter = hooks.createRecipeFilter(specification, apiTrigger, accounts);

    if (!filter) {
      throw new Error(`No filter mapping defined for specification type '${specification.type}'.` +
        'Make sure you have extended "selectRecipeFilter" hook to support this specification type');
    }

    if (!(filter.toApiModel instanceof Function)) {
      throw new Error(`Filter mapping for specification type '${specification.type}' does not ` +
        'have method "toApiModel". This method must be present.');
    }

    return filter;
  };

  const convertToRecipeModel = (apiRecipe, specifications, accounts) => {
    const specification = specifications.find(spec => spec.id === apiRecipe.specificationId);
    const action = new RecipeAction(apiRecipe.actions, hooks.getAvailableChannels(), true);
    return new RecipeModel(apiRecipe,
                           specification,
                           createRecipeFilter(specification, apiRecipe.trigger, accounts),
                           action);
  };

  const onLoad = () => {
    $ctrl.state.loading = true;
    model
      .load()
      .then(res => {
        $ctrl.state.specifications = res.specifications;
        $ctrl.state.accounts = res.accounts;
        $ctrl.state.recipes =
          res.recipes
            .map(recipe => convertToRecipeModel(recipe, res.specifications, res.accounts));

        $ctrl.state.loading = false;
      }).catch((err) => {
        $ctrl.state.error = httpErrorMessages[err.code];
        $ctrl.state.loading = false;
      });
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name ActionRecipesController#$onInit
   * @type {function}
   * @return {void}
   */
  const $onInit = () => {
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });
    onLoad();
  };

  /**
   * @description
   * Returns current view, used by the template to identify in
   * which state the widget is in
   *
   * @name currentView
   * @type {function}
   * @return {View}
   */
  const currentView = () => $ctrl.state.view;

  /**
   * @description
   * Used to switch the view in the template

   * @name navigateTo
   * @param {View} view New view to switch to
   * @type {function}
   * @return {void}
   */
  const navigateTo = (view) => {
    $ctrl.state.view = view;
  };

  /**
   * @description
   * Creates a new action recipe from the given specification.
   * - Stores composed action object in state.
   * - Changes view to recipe view
   *
   * @name onCreate
   * @param {Specification} sepcification Action specification which is used
   * as a template to create new action recipe
   * @type {function}
   * @return {void}
   */
  const onCreate = (specification) => {
    $ctrl.state.newAction =
      new RecipeModel(
        null,
        specification,
        createRecipeFilter(specification),
        new RecipeAction(specification.actions, hooks.getAvailableChannels(), false));
    $ctrl.navigateTo(View.CREATE);
  };

  /**
   * @description
   * Starts a process to edit a given recipe
   *
   * @name onEdit
   * @param {Recipe} recipe recipe to be editted
   * @type {function}
   * @return {void}
   */
  const onEdit = (recipe) => {
    $ctrl.state.newAction = recipe;
    $ctrl.navigateTo(View.EDIT);
  };

  /**
   * @description
   * Saves given action recipe. Additionally stores new action in state,
   * recipe list and changes the view to list
   *
   * @name onSave
   * @param {Recipe} recipe Action recipe to be saved
   * @type {function}
   * @return {void}
   */
  const onSave = (recipe) => {
    if (recipe.id) {
      model.update(recipe.toApiModel()).then(() => {
        $ctrl.onCreateDismiss();
      });
    } else {
      model.save(recipe.toApiModel()).then(apiRecipe => {
        $ctrl.state.recipes = [Object.assign(recipe, { id: apiRecipe.id }), ...$ctrl.state.recipes];
        $ctrl.onCreateDismiss();
      });
    }
  };

  /**
   * @description
   * Saves given action recipe. Additionally stores new action in state,
   * recipe list and changes the view to list
   *
   * @name onSave
   * @param {Recipe} recipe Action recipe to be saved
   * @type {function}
   * @return {void}
   */
  const onRemove = (recipe) => {
    model.remove(recipe).then(() => {
      $ctrl.state.recipes.splice($ctrl.state.recipes.indexOf(recipe), 1);
      $ctrl.onCreateDismiss();
    });
  };


  /**
   * @description
   * Dismiss action recipe creation.
   * - Clears action being created from controller state
   * - Changes view to list
   *
   * @name onCreateDismiss
   * @type {function}
   * @return {void}
   */
  const onCreateDismiss = () => {
    $ctrl.navigateTo(View.LIST);
    $ctrl.state.newAction = null;
  };

 /**
  * @description
  * Activates given action recipe.
  * If activation fails, 'active' property of given recipe is set to false.
  *
  * @name onActivate
  * @type {Function}
  * @param {RecipeModel} recipe to activate
  * @return {Promise}
  * @fires bb.event.actionrecipe.activate.failed
  */
  const onActivate = recipe => {
    Object.assign(recipe, { changingStatus: true });
    return model
      .activate(recipe)
      .catch(() => {
        Object.assign(recipe, { active: false });
        bus.publish(Event.ACTION_RECIPE_ACTIVATION_FAILED, recipe);
      })
      .then(() => Object.assign(recipe, { changingStatus: false }));
  };

 /**
  * @description
  * Deactivates given action recipe.
  * If deactivation fails, 'active' property of given recipe is set to true.
  *
  * @name onDeactivate
  * @type {Function}
  * @param {RecipeModel} recipe to deactivate
  * @return {Promise}
  * @fires bb.event.actionrecipe.deactivate.failed
  */
  const onDeactivate = recipe => {
    Object.assign(recipe, { changingStatus: true });
    return model
      .deactivate(recipe)
      .catch(() => {
        Object.assign(recipe, { active: true });
        bus.publish(Event.ACTION_RECIPE_DEACTIVATION_FAILED, recipe);
      })
      .then(() => Object.assign(recipe, { changingStatus: false }));
  };

  Object.assign($ctrl, {
    /**
     *  Holds static data of controller.
     *  @name ActionRecipesController#statics
     *  @type {ActionRecipesControllerStatics}
     */
    static: {
      labels,
      View,
    },

    /**
     * @description Keeps state related data
     * @name ActionRecipesController#state
     * @type {ActionRecipesControllerState}
     */
    state: {
      loading: false,
      view: View.LIST,
      error: null,
      recipes: [],
      specifications: [],
      accounts: [],
      newAction: null,
    },

    $onInit,
    navigateTo,
    currentView,
    onCreate,
    onCreateDismiss,
    onEdit,
    onSave,
    onRemove,
    onActivate,
    onDeactivate,
  });
}

/**
 * @typedef {Object} ActionRecipesControllerStatics
 * @property {Views} views views supported by controller
 */

/**
 * @typedef {Object} ActionRecipesControllerState State of the controller
 * @property {boolean} loading loading indicator.
 * @property {View} view tracks the view the user is in
 * @property {Object} error http error code, if any
 * @property {Array<Recipe>} recipes array of users recipes
 * @property {Array<Specification>} specifications array of available action specifications
 * @property {Array<Account>} accounts array of users accounts
 * @property {Recipe} newAction object used to hold recipe data when new recipe
 * is being created, if any
 */
