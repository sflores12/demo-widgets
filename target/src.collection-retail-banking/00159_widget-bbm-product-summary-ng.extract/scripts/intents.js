/**
 * Widget intent enum
 * @name Intent
 * @type {object}
 */
export const Intent = {
  /**
   * @name Intent.VIEW_PRODUCT_SUMMARY
   * @type {string}
   * @description Value: intent.bb.product.summary.view
   */
  SHOW_PRODUCT_SUMMARY: 'intent.bb.product.summary.show',
};

export default (bbIntents) => {
  /**
   * @description
   * Handles the product summary view intent.
   *
   * @inner
   */
  bbIntents.handle(Intent.SHOW_PRODUCT_SUMMARY, () => {
  });
};
