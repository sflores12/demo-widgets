/**
 * @module ext-bb-turnovers-ng
 *
 * @description
 * Default extension for widget-bb-turnovers-ng
 *
 * @requires vendor-bb-angular-ng-aria
 * @requires ui-bb-i18n-ng
 * @requires ui-bb-substitute-error-ng
 * @requires ui-bb-dropdown-select
 * @requires ui-bb-format-amount
 * @requires ui-bb-chartjs-chart-bar-ng
 * @requires ui-bb-empty-state-ng
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbDropdownSelect from 'ui-bb-dropdown-select';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbChartjsChartBarNgKey from 'ui-bb-chartjs-chart-bar-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';

import extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  i18nNgKey,
  ngAriaModuleKey,
  uiBbSubstituteErrorNgKey,
  uiBbDropdownSelect,
  uiBbFormatAmount,
  uiBbChartjsChartBarNgKey,
  uiBbEmptyStateKey,
];

export const hooks = extHooks;
export const helpers = extHelpers;
export const events = {};

/**
 * Turnovers specific BBSeries object
 * @typedef {object} TurnoversBBSeries
 * @property {string[]} labels Array of x axis labels
 * @property {TurnoversDataset[]} datasets Array of all y axis value datasets
 * @property {module:model-bb-turnovers-ng.Turnover} original Original turnover object
 * @property {boolean} updated Flag that signals that series are processed by hook
 */

/**
 * Turnovers specific dataset object for y axis
 * @typedef {object} TurnoversDataset
 * @extends module:model-bb-turnovers-ng.Dataset
 * @property {string} backgroundColor Background color of bars that represent this dataset
 * @property {string} hoverBackgroundColor Hover color of bars that represent this dataset
 */

/**
 * Settings object with options available for bar chart.
 * More info {@link http://www.chartjs.org/docs/latest/charts/bar.html}
 * @typedef {object} ChartjsSettings
 */
