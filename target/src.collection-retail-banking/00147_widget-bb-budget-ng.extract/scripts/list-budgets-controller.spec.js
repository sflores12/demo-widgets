import ListBudgetsController from './list-budgets-controller';

import createStateContainer from 'lib-bb-state-container';

import createService from './service';
import createViewModel from './view-model/index';
import { createInitialState } from './view-model/helpers';
import Router from './router';

describe('widget-bb-budget-ng::ListBudgetsController', function() {

  const stubData = {
    getBudgets: {
      success: {
        status: 200,
        items: [
          { id: 1, categoryName: "Health & Beauty", budgetName: "Healthcare/Medical" },
          { id: 2, categoryName: "Transportation", budgetName: "My Transport"},
        ]
      },
      error: { "status": 404, "data": null },
    },
    formRouteCreate: { name: 'form', params: undefined },
    formRouteEdit: { name: 'form', params: 1 },
    deleteBudget: {
      item: {
        id: 1,
      },
      success: { "status": 204, "data": null }
    },
  };

  const model = {
    getBudgets: jasmine.createSpy('getBudgets')
      .and.returnValue(Promise.resolve(stubData.getBudgets.success)),
    deleteBudget: jasmine.createSpy('deleteBudget')
      .and.returnValue(Promise.resolve(stubData.deleteBudget.success)),
  };

  const getController = (stateContainer) => {
    stateContainer = stateContainer || createStateContainer(createInitialState());
    const viewModel = createViewModel(stateContainer);
    const service = createService(model, viewModel);
    return new ListBudgetsController(service, Router(stateContainer));
  }

  describe('ListBudgetsController', () => {

    it('should exist', () => {
      const stateContainer = createStateContainer(createInitialState());
      const controller = getController(stateContainer);
      expect(controller).toBeDefined();
    });

    describe('ListBudgetsController:$onInit', () => {

      it('should be a function', () => {
        const controller = getController();
        expect(controller.$onInit).toBeDefined();
        expect(controller.$onInit).toEqual(jasmine.any(Function));
      });

      it('should initialize budgets', (done) => {
        const stateContainer = createStateContainer(createInitialState());
        const controller = getController(stateContainer);
        controller.$onInit();
        setTimeout(function() {
          const getBudgets = stateContainer.createSelector(state => state.budgets);
          expect(getBudgets()).toEqual(stubData.getBudgets.success.items);
          done();
        }, 100);
      });
    });

    describe('ListBudgetsController:create', () => {
      const stateContainer = createStateContainer(createInitialState());
      const controller = getController(stateContainer);
      controller.$onInit();

      it('expected to change the route to form', () => {
        controller.create();
        const getRoute = stateContainer.createSelector(state => state.route);
        expect(getRoute()).toEqual(stubData.formRouteCreate);
      });

      it('expected to create empty form object', () => {
        controller.create();
        const getForm = stateContainer.createSelector(state => state.form);
        expect(getForm()).toEqual({});
      });
    });

    describe('ListBudgetsController:edit', () => {
      const stateContainer = createStateContainer(createInitialState());
      const controller = getController(stateContainer);
      controller.$onInit();

      it('expected to change the route to form', () => {
        controller.edit(stubData.formRouteEdit.params);
        const getRoute = stateContainer.createSelector(state => state.route);
        expect(getRoute()).toEqual(stubData.formRouteEdit);
      });
    });

    describe('ListBudgetsController:deleteBudget', () => {
      const stateContainer = createStateContainer(createInitialState());
      const controller = getController(stateContainer);
      controller.$onInit();

      it('expected to properly call model\'s delete method', () => {
        controller.deleteBudget(stubData.deleteBudget.item)
          .then(() => {
            expect(model.deleteBudget).toHaveBeenCalledWith(stubData.deleteBudget.item.id, stubData.deleteBudget.item);
          });
      });
    });
  });
});
