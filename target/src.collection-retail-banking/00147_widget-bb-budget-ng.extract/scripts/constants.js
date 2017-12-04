import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

/**
 * @name notificationLevels
 *
 * @type {object}
 * @description
 * enum with levels for ui notifications
 */
export const notificationLevels = {
  DANGER: 'danger',
  SUCCESS: 'success',
};

/**
 * @name errorMessages
 *
 * @type {object}
 * @description
 * enum with standart model error message keys
 */
export const errorMessages = {
  [E_AUTH]: 'budget.model.error.auth',
  [E_CONNECTIVITY]: 'budget.model.error.connectivity',
  [E_USER]: 'budget.model.error.user',
  [E_UNEXPECTED]: 'budget.model.error.unexpected',
};

/**
 * @name successMessages
 *
 * @type {object}
 * @description
 * enum with success messages keys
 */
export const successMessages = (() =>
  ['create', 'update', 'delete'].reduce(
    (acc, method) => Object.assign(acc, { [method]: `budget.model.${method}.success` }),
    {}
  )
)();
