/**
 * @module widget-bb-action-recipes-ng
 *
 * @description
 * Action Recipes Widget
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import modelActionRecipesModuleKey, { modelActionRecipesKey } from 'model-bb-action-recipes-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-action-recipes-ng:hooks';

export default angular
  .module('widget-bb-action-recipes-ng', [
    widgetModuleKey,
    eventBusModuleKey,
    modelActionRecipesModuleKey,
    bbIntentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('ActionRecipesController', [
    // dependencies to inject
    widgetKey,
    eventBusKey,
    modelActionRecipesKey,
    hooksKey,

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
