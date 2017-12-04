import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

/**
 * @description
 * Recipe data to labels mapper
 *
 * @name
 * @type {object}
 */
export const labels = {
  recipeType: {
    newTransaction: 'label.list.recipe.type.newTransaction',
  },
  condition: {
    lt: 'label.list.recipe.condition.less',
    gt: 'label.list.recipe.condition.more',
    eq: 'label.list.recipe.condition.equal',
    gte: 'label.list.recipe.condition.moreOrEqual',
    lte: 'label.list.recipe.condition.lessOrEqual',
  },
};

/**
 * @description
 * Available views for the widget
 *
 * @name View
 * @type {object}
 */
export const View = {
  LIST: 'list',
  SPECIFICATIONS: 'select-specification',
  CREATE: 'create-recipe',
  EDIT: 'edit-recipe',
};

/**
 * @description
 * Http error codes. Used to identify what error has occured
 *
 * @name httpErrorMessages
 * @type {object}
 */
export const httpErrorMessages = {
  [E_AUTH]: 'error.auth',
  [E_CONNECTIVITY]: 'error.connectivity',
  [E_USER]: 'error.user',
  [E_UNEXPECTED]: 'error.unexpected',
};


export const Event = {
  /**
   * @event bb.event.actionrecipe.activate.failed
   * @description Event fired when activation of action recipe has failed
   * @type {string}
   */
  ACTION_RECIPE_ACTIVATION_FAILED: 'bb.event.actionrecipe.activate.failed',
  /**
   * @event bb.event.actionrecipe.deactivate.failed
   * @description Event fired when deactivation of action recipe has failed
   * @type {string}
   */
  ACTION_RECIPE_DEACTIVATION_FAILED: 'bb.event.actionrecipe.deactivate.failed',
};
