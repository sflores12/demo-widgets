import Model from './personal-profile';
import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED, E_USER } from 'lib-bb-model-errors';

describe('model-bb-personal-profile-ng::model', () => {
  const data = {};

  const getModel = () => Model(Promise, data);

  describe('#load', () => {
    it('loads the data of the user', done => {
      const userId = 1;
      const response = {
        headers: {},
        data: {
          firstName: "Sara",
          lastName: "Jenkins"
        }
      };

      const expected = {
        firstName: "Sara",
        lastName: "Jenkins"
      };

      data.getUsersRecord = jasmine.createSpy('getUsersRecord').and.returnValue(Promise.resolve(response));

      let model = getModel();

      model.load(userId)
        .then(actual => {
          expect(actual).toEqual(expected);
        })
        .then(done)
        .catch(done.fail);
    });

    it('gives a "user" error when the HTTP returns a 400 response', done => {
      const userId = 1;
      data.getUsersRecord = jasmine.createSpy('getUsersRecord').and.returnValue(Promise.reject({ status: 400 }));

      let model = getModel();

      model.load(userId)
        .catch(error => {
          expect(error.code).toEqual(E_USER);
        })
        .then(done);
    });

    it('gives a "authorization" error when the HTTP returns a 401 response', done => {
      const userId = 1;
      data.getUsersRecord = jasmine.createSpy('getUsersRecord').and.returnValue(Promise.reject({ status: 401 }));

      let model = getModel();

      model.load(userId)
        .catch(error => {
          expect(error.code).toEqual(E_AUTH);
        })
        .then(done);
    });

    it('gives a "connectivity" error when the HTTP request fails', done => {
      const userId = 1;
      data.getUsersRecord = jasmine.createSpy('getUsersRecord').and.returnValue(Promise.reject({ status: 0 }));

      let model = getModel();

      model.load(userId)
        .catch(error => {
          expect(error.code).toEqual(E_CONNECTIVITY);
        })
        .then(done);
    });

    it('gives a "unexpected" error when any unhandled status code is returned', done => {
      const userId = 1;
      data.getUsersRecord = jasmine.createSpy('getUsersRecord').and.returnValue(Promise.reject({ status: 1 }));

      let model = getModel();

      model.load(userId)
        .catch(error => {
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('#updateUsersProfile', () => {
    it('makes request to update the given user', done => {
      const model = getModel();

      const userId = 1;

      const user = {
        id: userId,
      };

      data.putUsersProfilesRecord = jasmine.createSpy('putUsersProfilesRecord')
        .and.returnValue(Promise.resolve({ status: 200, data: {} }));

      model.updateUsersProfile(user)
        .then(() => {
          expect(data.putUsersProfilesRecord).toHaveBeenCalledWith(userId, user);
        })
        .then(done)
        .catch(done.fail);
    });
  });
});
