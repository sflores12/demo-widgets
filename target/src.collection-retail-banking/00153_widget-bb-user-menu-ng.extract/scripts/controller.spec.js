import Controller from './controller';
import hooks from './default-hooks';

const profileData = { username: 'username' };

const controller = () =>
  new Controller(hooks, {},
  {
    getUserData: () => Promise.resolve(profileData),
  }, {
    getStringPreference: () => '',
  });

describe('widget-bb-user-menu-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  it('should update current user with profile data', (done) => {
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.currentUser).toEqual(profileData);
      })
      .then(done)
      .catch(e => done.fail(e));
  });
});
