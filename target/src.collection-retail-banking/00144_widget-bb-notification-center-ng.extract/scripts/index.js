/**
 * @module widget-bb-notification-center-ng
 *
 * @description
 * Notifications center widget.
 *
 * @example
 * <div ng-controller="NotificationsCenterController as $ctrl">
 *  <ul ng-repeat="notification in $ctrl.notifications">
 *    <li>{{notification.id}}</li>
 *  </ul>
 * </div>
 */
import angular from 'vendor-bb-angular';

import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';

export default angular
  .module('widget-bb-notification-center-ng', [
    modelNotificationsModuleKey,
    eventBusModuleKey,
    bbIntentModuleKey,
  ])

  .controller('NotificationCenterController', [
    modelNotificationsKey,
    eventBusKey,
    Controller,
  ])

  .run([bbIntentKey, (bbIntent) => {
    bbIntent.init();
  }])

  .name;
