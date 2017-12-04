/**
 * @module widget-bbm-notification-center-ng
 *
 * @description
 * Mobile notification center widget.
 *
 * @example
 * <!-- Notifications list template -->
 * <div data-ng-controller="ListController as $ctrl">
 *  <ul data-ng-repeat="notification in $ctrl.state.notifications.data track by notification.id">
 *    <li>{{notification.id}}</li>
 *  </ul>
 * </div>
 *
 * <!-- Notification details template -->
 * <div data-ng-controller="DetailsController as $ctrl">
 *  <h2>{{$ctrl.state.selectedNotification.title}}</h2>
 *  <p>
 *    {{$ctrl.state.selectedNotification.message}}
 *  </p>
 * </div>
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import ListController from './controllers/list.controller';
import DetailsController from './controllers/details.controller';

import SharedApi from './controllers/shared-api';

import ViewModel from './view-model';

import * as defaultHooks from './default-hooks';

const moduleKey = 'widget-bbm-notification-center-ng';
const sharedApiKey = `${moduleKey}:sharedApi`;
const viewModelKey = `${moduleKey}:viewModel`;
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    bbStorageModuleKey,
    eventBusModuleKey,
    intentModuleKey,
    modelNotificationsModuleKey,
    widgetModuleKey,
  ])

  .factory(viewModelKey, [
    // dependencies to inject
    modelNotificationsKey,
    bbStorageServiceKey,

    // into
    ViewModel,
  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .factory(sharedApiKey, [
    // dependencies to inject
    modelNotificationsKey,
    eventBusKey,
    viewModelKey,

    // into
    SharedApi,
  ])

  .controller('ListController', [
    // dependencies to inject
    widgetKey,
    modelNotificationsKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,
    hooksKey,

    // into
    ListController,
  ])

  .controller('DetailsController', [
    // dependencies to inject
    widgetKey,
    modelNotificationsKey,
    viewModelKey,
    sharedApiKey,
    bbIntentKey,
    eventBusKey,

    // into
    DetailsController,
  ])

  .name;
