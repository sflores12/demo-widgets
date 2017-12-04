/* eslint-disable */
import ng from 'vendor-bb-angular';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
import backBaseDemoLoginData from './data-bb-backbase-demo-login-http';

const backBaseDemoLoginDataModuleKey = 'data-bb-backbase-demo-login-http-ng';

export const backBaseDemoLoginDataKey = 'data-bb-backbase-demo-login-http-ng:backBaseDemoLoginData';

export default ng
  .module(backBaseDemoLoginDataModuleKey, [
    bbStorageModuleKey,
  ])
  .provider(backBaseDemoLoginDataKey, [() => {
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
       backBaseDemoLoginData(config),
      ],
    };
  }])
  .name;
