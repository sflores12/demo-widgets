/**
 * @module widget-bb-login-ng
 *
 * @description
 * Login widget
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, {
  widgetKey,
} from 'lib-bb-widget-ng';

import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import modelLoginModuleKey, { modelLoginKey } from 'model-bb-login-ng';
import Controller from './controller';

export default angular
  .module('widget-bb-login-ng', [
    modelLoginModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
  ])

  .controller('LoginController', [
    // dependencies to inject
    modelLoginKey,
    widgetKey,
    /* into */
    Controller,
  ])

  // Initialize intent library
  .run([bbIntentKey, (intents) => {
    intents.init();
  }])

  .name;
