/**
 * @name uiBbCalendarPopupComponent
 * @type {Object}
 *
 * @property {String} date Date model
 * @property {DateRange} dateRange Date-range model
 * @property {Object} config Configuration object
 * @property {Object} messages Object with translated messages
 * @property {Boolean} disabled Defines whether or not component is disabled
 * @property {Boolean} onClick Defines whether or not component is toggled on click
 * @property {Boolean} onFocus Defines whether or not component is toggled on focus
 */
const uiBbCalendarPopupComponent = {
  bindings: {
    date: '=?',
    dateRange: '=?',
    config: '<',
    messages: '<',
    disabled: '<',
    onClick: '<',
    onFocus: '<',
  },
  template: `<div class="input-group"
    data-uib-datepicker-popup=""
    data-close-on-date-selection="!$ctrl.dateRange"
    data-datepicker-options="$ctrl.options"
    data-is-open="$ctrl.opened"
    data-show-button-bar="false"
    data-ng-model="$ctrl.date"
    data-ng-disabled="$ctrl.disabled"
    data-ng-focus="!$ctrl.onFocus || $ctrl.toggle()"
    data-ng-click="!$ctrl.onClick || $ctrl.toggle()">
    <input type="text"
      class="form-control"
      readonly
      tabindex="-1"
      placeholder="{{$ctrl.dateFormatPlaceholder}}"
      data-ng-value="$ctrl.formatViewValue()"
      data-ng-disabled="$ctrl.disabled"
      data-role="ui-bb-calendar-popup-ng-input"/>
    <span class="input-group-btn">
      <button type="button"
        aria-label="{{ $ctrl.messages.calendarBtn }}"
        class="btn btn-default"
        tabindex="-1"
        data-ng-disabled="$ctrl.disabled"
        data-role="ui-bb-calendar-popup-ng-button">
        <i class="fa fa-calendar" aria-hidden="true"></i>
      </button>
    </span>
  </div>`,
  controller: 'uiBbCalendarPopupController',
};

export default uiBbCalendarPopupComponent;

/**
 * DateRange type definition
 * @typedef {Object} DateRange
 * @property {String} startDate Start date of date-range
 * @property {String} endDate End date of date-range
 */
