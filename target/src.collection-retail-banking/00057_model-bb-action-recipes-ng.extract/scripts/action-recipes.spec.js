import Model from './action-recipes';
import { E_UNEXPECTED } from 'lib-bb-model-errors'

describe('model-bb-action-recipes-ng::model', function() {
  function getModel() {
    return Model(Promise);
  }

  it('should have an loadRecipes method', () => {
    let model = getModel();
    expect(model.loadRecipes).toBeFunction();
  });

  describe('action recipe activation', () => {
    const actionRecipesData = {
      postActionRecipesActivationRequestRecord: recipeId => new Promise((resolve) => {
        if (recipeId === '1') {
          return resolve();
        }

        throw {
          data: 'Backend error!',
          status: 500,
        };
      }),
    };

    const model = new Model(actionRecipesData);

    it('calls backend API correctly', (done) => {
      model.activate({ id: '1'})
        .then(recipe => expect(recipe.active).toBe(true))
        .then(done);
    });

    it('throws unified error if API call fails', (done) => {
      model.activate({ id: '2'})
        .catch(e => {
          expect(e.code).toBe(E_UNEXPECTED);
          done();
        });
    });
  });

  describe('action recipe deactivation', () => {
    const actionRecipesData = {
      postActionRecipesDeactivationRequestRecord: recipeId => new Promise((resolve) => {
        if (recipeId === '1') {
          return resolve();
        }

        throw {
          data: 'Backend error!',
          status: 500,
        };
      }),
    };

    const model = new Model(actionRecipesData);

    it('calls backend API correctly', (done) => {
      model.deactivate({ id: '1'})
        .then(recipe => expect(recipe.active).toBe(false))
        .then(done);
    });

    it('throws unified error if API call fails', (done) => {
      model.deactivate({ id: '2'})
        .catch(e => {
          expect(e.code).toBe(E_UNEXPECTED);
          done();
        });
    });
  });

});
