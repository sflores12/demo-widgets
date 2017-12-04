/**
 * @module widget-bb-user-menu-ng
 *
 * @description
 * User Menu widget
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import bbUserDataModuleKey, { bbUserDataServiceKey } from 'lib-bb-user-data-ng';
import modelLoginModuleKey, { modelLoginKey } from 'model-bb-login-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import Controller from './controller';
import defaultHooks from './default-hooks';

const moduleKey = 'widget-bb-user-menu-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    modelLoginModuleKey,
    bbIntentModuleKey,
    bbUserDataModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('UserMenuController', [
    // dependencies to inject
    hooksKey,
    modelLoginKey,
    bbUserDataServiceKey,
    widgetKey,
    /* into */
    Controller,
  ])

  .run([bbIntentKey, (bbIntent) => {
    bbIntent.init();
  }])

  .name;

/**
 * @typedef {object} User
 * @property {string} name Name that should be displayed on page
 * @property {?string} username Internal user identifier
 */

/**
 * @typedef {object} Portal
 * @property {string} loggedInUserId Internally used unique identification of the user
 */
