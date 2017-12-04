const CONDITION_OPTIONS = ['lt', 'gt'];

/**
 * @description
 * Validate Recipe data.
 * @name isValid
 * @type {function}
 * @return {boolean} true if recipe passes the validation
 */
const isValid = recipe =>
      recipe.filter.validate() && recipe.actions.isSelected();

export default {
  conditions: CONDITION_OPTIONS,
  isValid,
};
