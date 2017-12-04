/* eslint-disable */
import ng from 'vendor-bb-angular';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import customersData from './data-bb-customers-http';

const customersDataModuleKey = 'data-bb-customers-http-ng';

export const customersDataKey = 'data-bb-customers-http-ng:customersData';

export default ng
  .module(customersDataModuleKey, [
    bbStorageModuleKey,
  ])
  .provider(customersDataKey, [() => {
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
       customersData(config),
      ],
    };
  }])
  .name;
