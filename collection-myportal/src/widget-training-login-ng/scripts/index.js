/**
 * @module widget-training-login-ng
 *
 * @description
 * Login
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import modelLoginModuleKey, {
    modelLoginKey,
} from 'model-training-login-ng';


import Controller from './controller';

import defaultHooks from "./default-hooks";

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

const moduleKey = 'widget-training-login-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
	bbStorageModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
    modelLoginModuleKey,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .controller('LoginController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
	bbStorageServiceKey,
    widgetKey,
    modelLoginKey,
    /* into */
    Controller,
  ])

  .name;
