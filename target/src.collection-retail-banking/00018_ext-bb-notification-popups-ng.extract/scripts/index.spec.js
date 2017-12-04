import uibAlertKey from 'vendor-bb-uib-alert';
import uiBbMessageNgKey from 'ui-bb-message-ng';

import { dependencyKeys } from './index';

describe('Notifications extension', () => {

  it('should return corresponding dependencies', () => {
    expect(dependencyKeys).toEqual(jasmine.arrayContaining([uibAlertKey, uiBbMessageNgKey]));
  });

});
