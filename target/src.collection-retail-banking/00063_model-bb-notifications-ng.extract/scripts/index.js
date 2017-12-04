/**
 * @module model-bb-notifications-ng
 *
 * @description
 * Notification widgets model.
 *
 * @example
 * import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelNotificationsModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelNotificationsKey,
 *     // into
 *     function someFactory(notificationsModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import notificationsDataModuleKey, { notificationsDataKey } from 'data-bb-notifications-http-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

import notificationsModel from './notifications';
import { PollingType } from './constants';

/**
 * Object with polling types
 * @name PollingType
 * @type {Object}
 */
export { PollingType };

export const modelNotificationsKey = 'model-bb-notifications-ng:model';

export default angular
  .module('model-bb-notifications-ng', [
    notificationsDataModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
  ])

  .factory(modelNotificationsKey, [
    notificationsDataKey,
    widgetKey,
    eventBusKey,
    '$timeout',
    notificationsModel,
  ])

  .name;
