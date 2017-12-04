/**
 * @name uiBbmProductKindTableViewComponent
 * @type {object}
 * @description
 * Product kind table view component object
 *
 * @property {object} product-kind - product kind with a group of products
 * @property {function} select - function to select a product
 * @property {object} messages - messages per product kind
 */
import controller from './controller';

export default {
  bindings: {
    productKind: '<',
    select: '&onSelect',
    messages: '<',
  },
  template: `
      <div class="table-view" aria-label="{{$ctrl.productKind.name}}">
        <div class="table-view-cell table-view-divider">
          <h4 
            data-role="product-kind-name" 
            data-product-kind-name="{{$ctrl.productKind.name}}" 
            ng-bind="$ctrl.productKind.name"></h4>
        </div>
        <div
          class="table-view-cell"
          ng-click="$ctrl.select({product})"
          ng-repeat="product in $ctrl.productKind.products track by product.id">
          <ui-bbm-product-summary-ng
            product-name="product.name"
            product-identifier="$ctrl.getIdentifier(product)"
            currency="product.currency"
            primary-value="$ctrl.getPrimaryValue(product)"
            available-balance="product.availableBalance"
            accrued-interest="product.accruedInterest"
            credit-limit="product.creditLimit"
            messages="$ctrl.messages"
            data-role="product"
            data-index="{{$index}}">
          </ui-bbm-product-summary-ng>
        </div>
      </div>
  `,
  controller,
};
