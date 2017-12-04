/**
 * @module widget-bb-messages-ng
 *
 * @description
 * Message Center Widget
 */
import angular from 'vendor-bb-angular';

import extendHooks from 'lib-bb-widget-extension-ng';

import modelMessagesModuleKey, { modelMessagesKey } from 'model-bb-messages-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import bbUserDataModuleKey, { bbUserDataServiceKey } from 'lib-bb-user-data-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import DraftController from './draft.controller';
import ConversationController from './conversation.controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-messages-ng:hooks';

function run(widget, bus, bbIntents) {
  bus.publish('cxp.item.loaded', {
    id: widget.getId(),
  });

  bbIntents.init(() => {});
}

export default angular
  .module('widget-bb-messages-ng', [
    modelMessagesModuleKey,
    widgetModuleKey,
    bbUserDataModuleKey,
    eventBusModuleKey,
    intentModuleKey,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('MessagesController', [
    // dependencies to inject
    modelMessagesKey,
    bbUserDataServiceKey,
    hooksKey,
    '$q',
    widgetKey,
    eventBusKey,
    /* into */
    Controller,
  ])
  .controller('DraftController', [
    // dependencies to inject
    modelMessagesKey,
    widgetKey,
    eventBusKey,
    '$q',
    bbIntentKey,
    /* into */
    DraftController,
  ])
  .controller('ConversationController', [
    // dependencies to inject
    eventBusKey,
    modelMessagesKey,
    bbUserDataServiceKey,
    '$q',
    // into
    ConversationController,
  ])

  .run([
    widgetKey,
    eventBusKey,
    bbIntentKey,
    run,
  ])
  .name;
