/**
 * @module widget-training-detalles-modal-ng
 *
 * @description
 * Detalles modal
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import Controller from './controller';

import defaultHooks from './default-hooks';

const moduleKey = 'widget-training-detalles-modal-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('DetallesModalController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
	'$scope',
    widgetKey,
    /* into */
    Controller,
  ])

  .name;
