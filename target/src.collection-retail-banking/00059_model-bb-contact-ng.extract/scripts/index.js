/**
 * @module model-bb-contact-ng
 *
 * @description
 * Contact widget model.
 *
 * @example
 * import modelContactModuleKey,
 *  { modelContactKey } from 'model-bb-contact-ng';
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import contactDataModuleKey, {
  contactDataKey,
} from 'data-bb-contact-http-ng';

import bbStorageModuleKey, {
  bbStorageServiceKey,
} from 'lib-bb-storage-ng';

import contactModel from './contact';

export const moduleKey = 'model-bb-contact-ng';
export const modelContactKey = 'model-bb-contact-ng:model';

export default angular
  .module(moduleKey, [
    contactDataModuleKey,
    widgetModuleKey,
    bbStorageModuleKey,
  ])

  .factory(modelContactKey, [
    '$q',
    contactDataKey,
    widgetKey,
    bbStorageServiceKey,
    /* into */
    contactModel,
  ])

  .name;
