import uiBbMessageNgKey from '../../ui-bb-message-ng/scripts/index';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbConfirmKey from 'ui-bb-confirm-ng';
import i18nKey from 'ui-bb-i18n-ng';

import { dependencyKeys } from './index';

describe('Notification center extension', () => {

  it('should return corresponding dependencies', () => {
    expect(dependencyKeys).toEqual(jasmine.arrayContaining([uiBbMessageNgKey, uiBbLoadMoreKey, uiBbConfirmKey, i18nKey]));
  });

});
