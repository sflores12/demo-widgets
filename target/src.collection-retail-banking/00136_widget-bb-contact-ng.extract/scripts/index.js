/* global window */
/**
 * @module widget-bb-contact-ng
 *
 * @description
 * Contact widget
 *
 * @example
 *  <div data-ng-controller="ContactController as $ctrl">
 *    <ul>
 *       <li data-ng-repeat="contact in $ctrl.state.contacts.data">{{contact.id}}</li>
 *    </ul>
 *  </div>
 */
import angular from 'vendor-bb-angular';

import extendHooks from 'lib-bb-widget-extension-ng';
import modelContactModuleKey, { modelContactKey } from 'model-bb-contact-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
import libBbPermissionsModuleKey, { bbPermissionsKey } from 'lib-bb-permissions-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-contact-ng:hooks';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular
  .module('widget-bb-contact-ng', [
    modelContactModuleKey,
    eventBusModuleKey,
    widgetModuleKey,
    intentModuleKey,
    libBbPermissionsModuleKey,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .config([`${bbPermissionsKey}Provider`, (permissionsProvider) => {
    permissionsProvider.enableDownloadOnInit(true);
    permissionsProvider.setCacheEnabled(false);
  }])
  .controller('ContactController', [
    modelContactKey,
    hooksKey,
    eventBusKey,
    '$q',
    '$scope',
    '$window',
    widgetKey,
    bbIntentKey,
    /* into */
    Controller,
  ])
  .name;
