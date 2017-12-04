/**
 * @module model-bb-personal-profile-ng
 *
 * @description
 * Personal profile widget model.
 *
 * @usage
 * import modelPersonalProfileModuleKey, {
 *   modelPersonalProfileKey,
 * } from 'model-bb-personal-profile-ng';
 *
 * angular.module('widget-bb-payment-ng', [
 *   modelPersonalProfileModuleKey,
 * ])
 * .controller('PersonalProfileController', [
 *   modelPersonalProfileKey,
 *   ...,
 * ])
 */
import angular from 'vendor-bb-angular';

import userDataModuleKey, {
  userDataKey,
} from 'data-bb-user-http-ng';

import PersonalProfileModel from './personal-profile';

export const moduleKey = 'model-bb-personal-profile-ng';
export const modelPersonalProfileKey = 'model-bb-personal-profile-ng:model';

export default angular
  .module('model-bb-personal-profile-ng', [
    userDataModuleKey,
  ])

  .factory(modelPersonalProfileKey, [
    '$q',
    userDataKey,
    /* into */
    PersonalProfileModel,
  ])

  .name;
