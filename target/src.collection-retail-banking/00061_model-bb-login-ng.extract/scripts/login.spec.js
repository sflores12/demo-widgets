import Model from './login';

const cxpDataModule = {
  postLogin: (credentials) => Promise.resolve(),
  postLogout: () => Promise.resolve(),
};

const model = Model(
  Promise,
  cxpDataModule,
);

describe('model-bb-login-ng::model', function() {
  it('calls login method from cxp data module', () => {
    spyOn(cxpDataModule, 'postLogin');
    model.login('user007', 'password123');
    expect(cxpDataModule.postLogin).toHaveBeenCalledWith({
        username: 'user007',
        password: 'password123',
      });
  });

  it('calls logout method from cxp data module', () => {
    spyOn(cxpDataModule, 'postLogout');
    model.logout();
    expect(cxpDataModule.postLogout).toHaveBeenCalled();
  });
});
