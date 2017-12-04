/**
 * @module widget-bb-notification-badge-ng
 *
 * @description
 * Notifications badge widget.
 *
 * @example
 * <div ng-controller="NotificationsBadgeController as $ctrl">
 *  <span>{{$ctrl.numberOfUnread}}</span>
 * </div>
 */
import angular from 'vendor-bb-angular';

import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';

export default angular
  .module('widget-bb-notification-badge-ng', [
    modelNotificationsModuleKey,
    eventBusModuleKey,
    bbIntentModuleKey,
  ])

  .controller('NotificationsBadgeController', [
    modelNotificationsKey,
    eventBusKey,
    Controller,
  ])

  .run([bbIntentKey, (bbIntent) => {
    bbIntent.init();
  }])

  .name;
