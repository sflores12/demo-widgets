/**
 * @module widget-training-appointments-ng
 *
 * @description
 * Appointments
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import modelAppointmentsModuleKey, {
    modelAppointmentsKey,
} from 'model-training-appointments-ng';

import Controller from './controller';

import defaultHooks from './default-hooks';

const moduleKey = 'widget-training-appointments-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
    modelAppointmentsModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('AppointmentsController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    widgetKey,
    modelAppointmentsKey,
    /* into */
    Controller,
  ])

  .name;
