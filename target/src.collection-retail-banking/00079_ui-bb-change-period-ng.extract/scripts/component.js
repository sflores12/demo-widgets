import uiBbChangePeriodController from './controller';

/**
 * @name uiBbChangePeriodNg
 * @type {object}
 * @description
 * Component used to change the date period.
 *
 * @property {string} periodStart Start date as a ISO string
 * @property {string} periodEnd End date as a ISO string
 * @property {number} periodStep Monthly interval
 * @property {?function} onPeriodStartChange Callback triggered after the period start is changed
 * @property {?function} onPeriodEndChange Callback triggered after the period end is changed
 * @property {?function} periodFormatter
 *  [Deprecated] Method called to format period start and end date labels
 * @property {?function} periodStartFormatter Method called to format period start date label
 * @property {?function} periodEndFormatter Method called to format period end date label
 */
const component = {
  controller: ['$locale', '$filter', uiBbChangePeriodController],
  bindings: {
    periodStart: '<',
    periodEnd: '<',
    periodStep: '<',
    onPeriodStartChange: '&',
    onPeriodEndChange: '&',
    periodFormatter: '&',
    periodStartFormatter: '&',
    periodEndFormatter: '&',
  },
  template: ['$attrs', (attrs) => {
    // Deprecation message for period-formatter attribute
    // This attribute should be removed in version 2.0.0
    if ('periodFormatter' in attrs) {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - [ui-bb-change-period-ng] period-formatter attribute will be ignored in the next component major release. Use \'period-start-formatter and period-end-formatter\' attributes instead.');
    }

    return `
      <div class="row">
        <div class="col-xs-2 col-sm-4 text-right double-line">
          <i class="fa fa-chevron-left text-muted btn"
            aria-hidden="true"
            data-ng-click="$ctrl.changePeriod(-$ctrl.periodStep)"
          ></i>
        </div>

        <div class="col-xs-8 col-sm-4 text-center">
          <div><strong>{{ $ctrl.monthName }}</strong></div>

          <div class="current-period text-muted small">
            {{ $ctrl.formatPeriodLabel($ctrl.firstDayOfMonth, $ctrl.periodStartFormatter) }}
            -
            {{ $ctrl.formatPeriodLabel($ctrl.lastDayOfMonth, $ctrl.periodEndFormatter) }}
          </div>
        </div>

        <div class="col-xs-2 col-sm-4 text-left double-line">
          <i class="fa fa-chevron-right text-muted btn"
            aria-hidden="true"
            data-ng-class="{
              disabled: $ctrl.isButtonDisabled($ctrl.monthNumber, $ctrl.selectedYear)
            }"
            data-ng-click=" $ctrl.isButtonDisabled($ctrl.monthNumber, $ctrl.selectedYear) ?
              null : $ctrl.changePeriod($ctrl.periodStep)"
          ></i>
        </div>
      </div>
    `;
  }],
};

export default component;
