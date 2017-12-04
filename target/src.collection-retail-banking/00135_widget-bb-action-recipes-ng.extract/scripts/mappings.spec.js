import { RecipeModel, RecipeAction } from './mappings';
import MockSpecifications from './test-data/api-specifications';
import { getAvailableChannels } from './default-hooks';

describe('widget-bb-action-recipes-ng::mappings', function() {

  const specifications = MockSpecifications.actionRecipeSpecifications;
  const specification = specifications[0];

  describe('#RecipeModel', () => {
    const recipe = new RecipeModel(null, specification);

    it('it should contain specification information', () => {
      expect(recipe.specificationId).toEqual(specification.id);
      expect(recipe.specification).toBe(specification);
    });

    it('it should have an active flag', () => {
      expect(recipe.active).toBe(true);
    });
  });

  describe('#RecipeAction', () => {
    const actions = new RecipeAction(specification.actions, getAvailableChannels(), true);

    it('it should map actions from Specification', () => {
      expect(actions.browser).toBeTruthy();
      expect(actions.browser.value).toBe(true);
      expect(actions.sms).toBeTruthy();
      expect(actions.sms.value).toBe(true);
    });

    it('should skip actions not present in specification', () => {
      expect(actions.email).toBeNull();
    });
  });

  describe('#RecipeModel.toApiModel', () => {
    const specification = specifications[0];
    const recipe = new RecipeModel(null, specification,  {
      toApiModel: () => 'mockedApiFilterModel',
    }, {
      toApiModel: () => 'mockedApiActionsModel',
    });

    const apiModel = recipe.toApiModel();

    it('should map specification property', () => {
      expect(apiModel.specificationId).toEqual(specification.id);
    });

    it('should map trigger', () => {
      expect(apiModel.trigger).toEqual('mockedApiFilterModel');
    });

    it('should map actions', () => {
      expect(apiModel.actions).toEqual('mockedApiActionsModel');
    })
  });
});
