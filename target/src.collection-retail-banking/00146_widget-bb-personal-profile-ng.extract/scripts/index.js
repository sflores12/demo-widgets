/**
 * @module widget-bb-personal-profile-ng
 *
 * @description
 * Personal Profile widget.
 *
 * @borrows module:model-bb-personal-profile-ng.User as User
 * @borrows module:lib-bb-model-errors.ModelError as ModelError
 *
 * @example
 *  <div ng-controller="PersonalProfileController as $ctrl">
 *    <ul>
 *       <li>{{ $ctrl.state.user.firstName }}</li>
 *    </ul>
 *  </div>
 */

import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';

import modelPersonalProfileModuleKey, {
  modelPersonalProfileKey,
} from 'model-bb-personal-profile-ng';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-contact-ng:hooks';

/**
 * @name default
 * @type {string}
 *
 * @description
 * Personal Profile Widget
 */
export default angular
  .module('widget-bb-personal-profile-ng', [
    modelPersonalProfileModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
    bbIntentModuleKey,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .controller('PersonalProfileController', [
    // dependencies to inject
    modelPersonalProfileKey,
    hooksKey,
    eventBusKey,
    widgetKey,
    '$q',
    /* into */
    Controller,
  ])
  .run([bbIntentKey, (bbIntent) => {
    bbIntent.init();
  }])
  .name;
