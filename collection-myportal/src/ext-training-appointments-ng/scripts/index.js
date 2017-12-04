/**
 * @module ext-training-appointments-ng
 *
 * @description
 * Default extension for widget-training-appointments-ng
 *
 * @requires vendor-bb-angular-ng-aria
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

// uncomment below to include CSS in your extension
// import '../styles/index.css';

import uiTrainingAppointmentsListKey from 'ui-training-appointments-list-ng';

import uiTrainingDropdownKey from 'ui-training-dropdown-ng';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiTrainingAppointmentsListKey,
  uiTrainingDropdownKey,
];

export const hooks = {};

export const helpers = {};

export const events = {};
