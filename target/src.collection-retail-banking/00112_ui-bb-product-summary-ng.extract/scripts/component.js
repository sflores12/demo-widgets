/**
 * @name uiBbProductSummaryComponent
 * @type {object}
 * @description
 * Product Summary Component Object
 *
 * @property {string} product-name name of the product
 * @property {string} product-identifier product indentifier
 * @property {string} currency currency of the product
 * @property {string} primary-value primary value of the product
 * @property {string} secondary-value secondary value of the product
 * @property {string} secondary-label label for the secondary value
 * @property {string} tertiary-value tertiary value of the product
 * @property {string} tertiary-label label for the tertiary value
 * @property {string} on-select function to be executed on product summary selection
 */
export default {
  bindings: {
    productName: '<',
    productIdentifier: '<',
    currency: '<',
    primaryValue: '<',
    secondaryValue: '<',
    secondaryLabel: '<',
    tertiaryValue: '<',
    tertiaryLabel: '<',
    select: '&onSelect',
  },

  template: `
    <div class="panel panel-default" tabindex="0" data-ng-click="$ctrl.select()">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ $ctrl.productName }}<br>
          <small data-ng-if="$ctrl.productIdentifier">{{ $ctrl.productIdentifier }}</small>
        </h3>
      </div>

      <div class="panel-body">

        <div data-ng-if="$ctrl.primaryValue" class="text-right">
          <strong>
            <ui-bb-format-amount 
              data-amount="$ctrl.primaryValue"
              data-currency="$ctrl.currency">
            </ui-bb-format-amount>
          </strong>
        </div>
        <div data-ng-if="$ctrl.secondaryValue" class="row">
          <div class="col-xs-7 col-sm-7 col-md-7 text-left">
            <span class="text-uppercase small">{{ $ctrl.secondaryLabel }}</span>
          </div>
          <div class="col-xs-5 col-sm-5 col-md-5 text-right">
            <ui-bb-format-amount 
              data-amount="$ctrl.secondaryValue"
              data-currency="$ctrl.currency">
            </ui-bb-format-amount>
          </div>
        </div>
        
        <div data-ng-if="$ctrl.tertiaryValue" class="row">
          <div class="col-xs-7 col-sm-7 col-md-7 text-left">
            <span class="text-uppercase small">{{ $ctrl.tertiaryLabel }}</span>
          </div>
          <div class="col-xs-5 col-sm-5 col-md-5 text-right">
            <ui-bb-format-amount 
              data-amount="$ctrl.tertiaryValue"
              data-currency="$ctrl.currency">
            </ui-bb-format-amount>
          </div>
        </div>

      </div>
    </div>
  `,
};
