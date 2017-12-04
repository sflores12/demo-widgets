/**
 * @name uiBbBudgetCardNg
 * @type {object}
 * @description
 * Component used to display data using a lightweight chart
 *
 * @property {object} labels Contains translated component labels
 * @property {string} labels.title Title label
 * @property {string} labels.spent Spent label
 * @property {string} labels.chart Chart's center label
 * @property {string} labels.limit Limit label
 * @property {string} labels.edit Edit button label
 * @property {string} labels.delete Delete button label
 * @property {string} budgetIcon Font awesome icon class
 * @property {string} chartWrapperClass It sets a class on the chart wrapper
 * @property {string} chartColorLevel Sets the color level of the chart - success, warning, danger
 * @property {object} spent Amount object that is passed to the format ui component
 * @property {object} spendingLimit Spending limit object that is passed to the format ui component
 * @property {number} spentPercentage The percentage of the chart
 * @property {object} availableAmount Available amount object that is passed
 * to the format ui component
 * @property {?function} onUpdate Function to be called after click on Edit button. If not provided,
 * button will be hidden. If delete handler is also not provided, whole dropdown will be hidden
 * @property {?function} onDelete Function to be called after click on Delete button.
 * If not provided, button will be hidden. If edit handler is also not provided,
 * whole dropdown will be hidden
 */

import uiBbBudgetCardController from './controller';

const uiBbBudgetCardNg = {
  controller: uiBbBudgetCardController,
  bindings: {
    labels: '=',
    budgetIcon: '@',
    chartWrapperClass: '@',
    chartColorLevel: '@',
    spent: '=',
    spendingLimit: '=',
    spentPercentage: '@',
    availableAmount: '=',
    onUpdate: '&?',
    onDelete: '&?',
  },
  template: `
    <div class="budget-card-container panel">
      <div class="budget-card-title panel-heading panel-heading-small"
        data-ng-class="{ 'pr-0': $ctrl.onUpdate || $ctrl.onDelete }"
      >
        <i class="transaction-type-icon budget-card-category-icon"
          data-ng-class="$ctrl.budgetIcon"
          aria-hidden="true"
        ></i>

        <label data-ng-bind="$ctrl.labels.title"></label>

        <div data-ng-if="$ctrl.onUpdate || $ctrl.onDelete"
          class="pull-right" uib-dropdown keyboard-nav
        >
          <button
            uib-dropdown-toggle
            class="budget-card-options-btn btn btn-link"
            data-label="Options"
          >
            <i class="fa fa-ellipsis-v" aria-hidden="true" data-role="more-actions"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-right"
            uib-dropdown-menu role="menu"
            aria-labelledby="simple-btn-keyboard-nav"
          >
            <li data-role="menuitem">
              <a href="javascript:void(0)"
                data-ng-if="$ctrl.onUpdate"
                data-ng-bind="$ctrl.labels.edit"
                data-ng-click="$ctrl.onUpdate()"
              ></a>
              <a href="javascript:void(0)"
                data-ng-if="$ctrl.onDelete"
                data-ng-bind="$ctrl.labels.delete"
                data-ng-click="$ctrl.onDelete()"
              ></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="budget-card-body panel-body-small">
        <div class="budget-card-chart panel-offset progress-indicator donut rotate-anticlockwise"
          data-ng-class="$ctrl.wrapperClass"
        >
          <div class="donut-left-slice"
            data-ng-class="$ctrl.chartColor"
          ></div>
          <div class="donut-right-slice"
            data-ng-class="$ctrl.chartColor"
          ></div>
          <div class="progress-indicator-donut-overlay">
            <div class="d-table">
              <div class="d-table-cell"
                data-ng-class="$ctrl.amountColor"
              >
                <h3 class="label-amount-left">
                  <ui-bb-format-amount class="amount-regular-color amount-integer"
                    data-amount="$ctrl.animateAvailableAmount"
                    data-currency="$ctrl.availableAmount.currencyCode"
                    data-wrap
                  ></ui-bb-format-amount>
                </h3>

                <div data-ng-bind="$ctrl.labels.chart"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-offset">
          <div class="budget-amount-group"
            data-ng-class="$ctrl.amountSpentColor"
          >
            <span class="budget-amount-label"
              data-ng-class="$ctrl.amountSpentColor"
              data-ng-bind="$ctrl.labels.spent"
            ></span>
            <ui-bb-format-amount class="budget-amount amount-regular-color amount-integer"
              data-amount="$ctrl.spent.amount"
              data-currency="$ctrl.spent.currencyCode"
              data-wrap
            ></ui-bb-format-amount>
          </div>

          <div class="budget-amount-group">
            <span class="budget-amount-label"
              data-ng-bind="$ctrl.labels.limit"
            ></span>
            <ui-bb-format-amount class="budget-amount amount-regular-color amount-integer"
              data-amount="$ctrl.spendingLimit.amount"
              data-currency="$ctrl.spendingLimit.currencyCode"
              data-wrap
            ></ui-bb-format-amount>
          </div>
        </div>
      </div>
    </div>
  `,
};

export default uiBbBudgetCardNg;
