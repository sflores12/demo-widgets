import { dependencyKeys } from './index';

describe('Notification badge extension', () => {

  it('should return corresponding dependencies', () => {
    expect(dependencyKeys).toEqual(jasmine.arrayContaining([]));
  });

});
