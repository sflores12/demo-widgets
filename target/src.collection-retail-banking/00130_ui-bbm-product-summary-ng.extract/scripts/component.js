/**
 * @name uiBbmProductSummaryComponent
 * @type {object}
 * @description
 * Product summary component descriptor.
 *
 * @property {string} productName - The product's name, suitable for display to users
 * @property {string} productIdentifier - The identifier of the product from the user's perspective
 * @property {string} currency - Currency code
 * @property {string} primaryValue - The most important associated value to be displayed
 * @property {string} availableBalance - Available balance of the product
 * @property {string} accruedInterest - Accrued interest of the product
 * @property {string} creditLimit - Credit limit of the product
 * @property {object} messages - Messages
 */
export default {
  bindings: {
    productName: '<',
    productIdentifier: '<',
    currency: '<',
    primaryValue: '<',
    availableBalance: '<',
    accruedInterest: '<',
    creditLimit: '<',
    messages: '<',
  },
  template: `
    <div>
      <div class="pull-left">
        <h4 data-role="product-name" ng-bind='$ctrl.productName'></h4>
        <p data-role="product-id" ng-bind='$ctrl.productIdentifier'></p>
      </div>
      <div class="pull-right">
        <h3 ng-if="$ctrl.primaryValue">
          <ui-bb-format-amount amount="$ctrl.primaryValue" currency="$ctrl.currency" wrap-decimals>
          </ui-bb-format-amount>
        </h3>
        <p ng-if="$ctrl.availableBalance">
          <span ng-bind="$ctrl.messages.available"></span>
          <span>
            <ui-bb-format-amount amount="$ctrl.availableBalance" currency="$ctrl.currency">
            </ui-bb-format-amount>
          </span>
        </p>
        <p ng-if="$ctrl.accruedInterest">
          <span ng-bind="$ctrl.messages.accrued"></span>
          <span>
            <ui-bb-format-amount amount="$ctrl.accruedInterest" currency="$ctrl.currency">
            </ui-bb-format-amount>
          </span>
        </p>
        <p ng-if="$ctrl.creditLimit">
          <span ng-bind="$ctrl.messages.creditLimit"></span>
          <span>
            <ui-bb-format-amount amount="$ctrl.creditLimit" currency="$ctrl.currency">
            </ui-bb-format-amount>
          </span>
        </p>
      </div>
    </div>
  `,
};
