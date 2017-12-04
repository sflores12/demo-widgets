// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

import { DATEPICKER_INTERNAL_DATE_FORMAT } from './constants';

export default function DatepickerController($element, $filter) {
  const dateFilter = $filter('date');
  const ctrl = this;

  const ngModelCtrl = $element.controller('ngModel');

  ctrl.opened = false;

  /**
   * @description
   * Formats the given date, so it can be passed to the datepicker plugin as a parameter.
   *
   * @name getPluginDateParam
   * @type {function}
   *
   * @param {?string} date
   * @returns {string}
   * @inner
   */
  const getPluginDateParam = date => (
    date ? dateFilter(date, DATEPICKER_INTERNAL_DATE_FORMAT) : null
  );

  /**
   * @description
   * Returns params for a datepicker plugin.
   *
   * @name getDatepickerParams
   * @type {function}
   *
   * @returns {DatepickerParams}
   * @inner
   */
  const getDatepickerParams = () => ({
    title: ctrl.title || '',
    minDate: getPluginDateParam(ctrl.minDate),
    maxDate: getPluginDateParam(ctrl.maxDate),
  });

  /**
   * @description
   * Applies the given option as a selected one.
   *
   * @name selectDate
   * @type {function}
   *
   * @param {?string} date
   * @inner
   */
  const selectDate = date => {
    if (date) {
      ngModelCtrl.$setViewValue(date);
    }
  };

  /**
   * @description
   * Opens a datepicker.
   *
   * @name openDatepicker
   * @type {function}
   * @inner
   */
  const openDatepicker = () => {
    if (!ctrl.opened) {
      plugins.DatePicker().show(getDatepickerParams())
        .then(({ date }) => {
          ctrl.opened = false;
          selectDate(date);
        })
        .catch(() => {
          ctrl.opened = false;
        });

      ctrl.opened = true;
    }
  };

  Object.assign(ctrl, {
    openDatepicker,
  });
}

/**
 * @typedef {Object} DatepickerParams
 * @property {?string} title Datepicker title
 * @property {?string} minDate Minimum allowed date
 * @property {?string} maxDate Maximum allowed date
 * @inner
 */
