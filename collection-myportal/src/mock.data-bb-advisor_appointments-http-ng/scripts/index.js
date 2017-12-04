/* eslint-disable */
import ng from 'vendor-bb-angular';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import advisor_AppointmentsData from './data-bb-advisor_appointments-http';

const advisor_AppointmentsDataModuleKey = 'data-bb-advisor_appointments-http-ng';

export const advisor_AppointmentsDataKey = 'data-bb-advisor_appointments-http-ng:advisor_AppointmentsData';

export default ng
  .module(advisor_AppointmentsDataModuleKey, [
    bbStorageModuleKey,
  ])
  .provider(advisor_AppointmentsDataKey, [() => {
    const config = {
      baseUri: '/',
    };

    return {
      setBaseUri: (baseUri) => {
        config.baseUri = baseUri;
      },
      $get: [
        '$q',
        bbStorageServiceKey,
        '$httpParamSerializer',
        /* into */
       advisor_AppointmentsData(config),
      ],
    };
  }])
  .name;
