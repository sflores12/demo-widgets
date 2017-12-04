import angular from 'vendor-bb-angular';

import messagingDataModuleKey, {
  messagingServiceDataKey,
} from 'data-bb-messaging-service-http-ng';

import messagingModelKey from './messages';

export const moduleKey = 'model-bb-messages-ng';
export const modelMessagesKey = 'model-bb-messages-ng:model';

export default angular
  .module('model-bb-messages-ng', [
    messagingDataModuleKey,
  ])
  .factory(modelMessagesKey, [
    messagingServiceDataKey,
    '$q',
    '$timeout',
    /* into */
    messagingModelKey,
  ])

  .name;
