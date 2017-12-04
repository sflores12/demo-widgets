import {
  ProductKind,
  CARD_MASK,
} from './constants';

/**
 * @name UiProductKindTableViewController
 * @type {object}
 * @description
 * Product kind table view controller.
 * @inner
 */
export default class UiProductKindTableViewController {
  /**
   * @name UiProductKindTableViewController#getIdentifier
   * @description Gets the identifier for the product
   * @type {function}
   * @inner
   */
  getIdentifier(product) {
    switch (this.productKind.id) {
      case ProductKind.CURRENT_ACCOUNT:
        return product.IBAN;
      case ProductKind.SAVING_ACCOUNT:
      case ProductKind.TERM_DEPOSIT:
      case ProductKind.LOAN:
      case ProductKind.INVESTMENT_ACCOUNT:
        return product.BBAN;
      case ProductKind.CREDIT_CARD:
      case ProductKind.DEBIT_CARD:
        return product.number ? `${CARD_MASK}${product.number}` : '';
      default:
        return '';
    }
  }

  /**
   * @name UiProductKindTableViewController#getPrimaryValue
   * @description Gets the primary value for the product
   * @type {function}
   * @inner
   */
  getPrimaryValue(product) {
    return product.bookedBalance || product.principalAmount ||
      product.currentInvestmentValue;
  }
}
