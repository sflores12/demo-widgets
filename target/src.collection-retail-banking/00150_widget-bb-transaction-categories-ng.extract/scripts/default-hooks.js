const identity = a => a;

export default {
  /**
   * @name afterCategoriesLoad
   * @type {function}
   * @description
   * Default hook for setting the passed items from the model
   *
   * @param {array} items
   * @returns {array}
   */
  afterCategoriesLoad: identity,

  /**
   * @name selectedTransactionObject
   * @type {function}
   * @description
   * Default hook for setting the passed items from the model
   *
   * @param {object} transaction
   * @returns {object}
   */
  selectedTransactionObject: identity,
};
