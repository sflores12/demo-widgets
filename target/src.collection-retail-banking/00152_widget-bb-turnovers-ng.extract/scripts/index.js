/**
 * @module widget-bb-turnovers-ng
 *
 * @description
 * Turnovers
 */
import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';

import widgetModuleKey, {
  widgetKey,
} from 'lib-bb-widget-ng';

import eventBusModuleKey, {
  eventBusKey,
} from 'lib-bb-event-bus-ng';

import bbIntentModuleKey, {
  bbIntentKey,
} from 'lib-bb-intent-ng';

import modelTurnoversModuleKey, {
  modelTurnoversKey,
} from 'model-bb-turnovers-ng';

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import libBbCurrencyNgKey, {
  bbCurrencyRuleKey,
} from 'lib-bb-currency-ng';

import helpers from './helpers';
import defaultHooks from './default-hooks';
import Controller from './controller';

const moduleKey = 'widget-bb-turnovers-ng';
const hooksKey = `${moduleKey}:hooks`;
const helpersKey = `${moduleKey}:helpers`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,

    modelTurnoversModuleKey,

    bbExtensionHelpersModuleKey,
    libBbCurrencyNgKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .factory(extensionHelpersContextKey, [
    '$compile',
    bbCurrencyRuleKey,
    ($compile, getRule) => ({
      $compile,
      getRule,
    }),
  ])

  .factory(helpersKey, [
    '$timeout',
    helpers,
  ])

  .controller('TurnoversController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    helpersKey,
    modelTurnoversKey,
    widgetKey,
    /* into */
    Controller,
  ])

  .run([eventBusKey, widgetKey, bbIntentKey, (bus, widget, bbIntent) => {
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });
    bbIntent.init();
  }])

  .name;
