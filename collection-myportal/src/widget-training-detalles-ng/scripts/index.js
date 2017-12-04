/**
 * @module widget-training-detalles-ng
 *
 * @description
 * Detalles
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';

import modelDetallesModuleKey, {
    modelDetallesKey,
} from 'model-training-detalles-ng';

import Controller from './controller';

import defaultHooks from './default-hooks';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';


const moduleKey = 'widget-training-detalles-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
  bbStorageModuleKey,
     widgetModuleKey,
    eventBusModuleKey,
    modelDetallesModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('DetallesController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    bbStorageServiceKey,
    widgetKey,
    modelDetallesKey,
    /* into */
    Controller,
  ])

  .name;
