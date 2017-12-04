/* eslint-disable */
import ng from 'vendor-bb-angular';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import advisorsData from './data-bb-advisors-http';

const advisorsDataModuleKey = 'data-bb-advisors-http-ng';

export const advisorsDataKey = 'data-bb-advisors-http-ng:advisorsData';

export default ng
  .module(advisorsDataModuleKey, [
    bbStorageModuleKey,
  ])
  .provider(advisorsDataKey, [() => {
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
       advisorsData(config),
      ],
    };
  }])
  .name;
