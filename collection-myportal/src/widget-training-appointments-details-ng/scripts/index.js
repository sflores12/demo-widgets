/**
 * @module widget-training-appointments-details-ng
 *
 * @description
 * Appointments details
 */
import angular from 'vendor-bb-angular';

import uibModalKey from 'vendor-bb-uib-modal';

import widgetModuleKey, {
  widgetKey
} from 'lib-bb-widget-ng';
import eventBusModuleKey, {
  eventBusKey
} from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import Controller from './controller';

import defaultHooks from './default-hooks';

const moduleKey = 'widget-training-appointments-details-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular.module(moduleKey, [
  widgetModuleKey,
  eventBusModuleKey,
  uibModalKey,
])

.factory(hooksKey, extendHooks(defaultHooks))

.controller('AppointmentsDetailsController', [
  // dependencies to inject
  eventBusKey,
  hooksKey,
  '$scope',
  widgetKey,
  /* into */
  Controller,
])

.name;