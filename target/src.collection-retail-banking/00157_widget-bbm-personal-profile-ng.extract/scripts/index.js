/**
 * @module widget-bbm-personal-profile-ng
 *
 * @description
 * Mobile Personal Profile widget.
 *
 * @borrows module:model-bb-personal-profile-ng.User as User
 * @borrows module:lib-bb-model-errors.ModelError as ModelError
 *
 * @example
 *  <div ng-controller="DetailsController as $ctrl">
 *    <ul>
 *       <li>{{ $ctrl.state.user.firstName }}</li>
 *    </ul>
 *  </div>
 */

import angular from 'vendor-bb-angular';

import extendHooks from 'lib-bb-widget-extension-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import modelPersonalProfileModuleKey, {
  modelPersonalProfileKey,
} from 'model-bb-personal-profile-ng';

import DetailsController from './controllers/details.controller';
import FormController from './controllers/form.controller';

import {
  MODULE_KEY,
  DETAILS_CONTROLLER_KEY,
  FORM_CONTROLLER_KEY,
} from './constants';

import ViewModel from './view-model';

import * as defaultHooks from './default-hooks';

const viewModelKey = `${MODULE_KEY}:viewModel`;
const hooksKey = `${MODULE_KEY}:hooks`;

export default angular
  .module(MODULE_KEY, [
    modelPersonalProfileModuleKey,
    widgetModuleKey,
    eventBusModuleKey,
    bbStorageModuleKey,
    intentModuleKey,
  ])
  .factory(viewModelKey, [
    // dependencies to inject
    modelPersonalProfileKey,
    bbStorageServiceKey,

    /* into */
    ViewModel,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .controller(DETAILS_CONTROLLER_KEY, [
    // dependencies to inject
    modelPersonalProfileKey,
    hooksKey,
    eventBusKey,
    widgetKey,
    bbIntentKey,
    viewModelKey,

    /* into */
    DetailsController,
  ])
  .controller(FORM_CONTROLLER_KEY, [
    // dependencies to inject
    modelPersonalProfileKey,
    hooksKey,
    eventBusKey,
    widgetKey,
    bbIntentKey,
    viewModelKey,

    /* into */
    FormController,
  ])
  .name;
