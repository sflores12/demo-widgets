import BudgetFormController from './budget-form-controller';

import createStateContainer from 'lib-bb-state-container';
import angular from 'vendor-bb-angular';

import createService from './service';
import createViewModel from './view-model/index';
import { createInitialState } from './view-model/helpers';
import Router from './router';

describe('widget-bb-budget-ng::BudgetFormController', function() {

  const stubData = {
    getBudgetSchema: {},
    initialState: {
      isLoading: false,
      budgets: [
        {id: 1, categoryName: "Health & Beauty", budgetName: "Healthcare/Medical"},
        {id: 2, categoryName: "Transportation", budgetName: "My Transport"}
      ],
      template: "#widget-bb-budget-ng/form.html",
      route: { name: "form", params: 1},
      form: {},
      notifications: [],
    },
    getBudgets: {
      success: {
        "status": 200,
        "items": [
          { "id": 1, "categoryName": "Health & Beauty", "budgetName": "Healthcare/Medical" },
          { "id": 2, "categoryName": "Transportation", "budgetName": "My Transport"},
        ]
      },
      error: { "status": 404, "data": null },
    },
    createOrUpdateResponse: {
      success: { "status": 201, "data": { "id": 1 } },
      error: { "status": 500, "data": null },
    },
    listRoute: {name: 'list', params: {reload: true}},
  };

  const model = {
    getBudgetSchema: jasmine.createSpy('getBudgetSchema').and.returnValue(stubData.getBudgetSchema),
    getBudgets: jasmine.createSpy('getBudgets').and.returnValue(Promise.resolve(stubData.getBudgets.success)),
    updateBudget: jasmine.createSpy('updateBudget').and.returnValue(Promise.resolve(stubData.createOrUpdateResponse)),
    createBudget: jasmine.createSpy('createBudget').and.returnValue(Promise.resolve(stubData.createOrUpdateResponse)),
  };

  const getController = (stateContainer) => {
    stateContainer = stateContainer || createStateContainer(createInitialState());
    const viewModel = createViewModel(stateContainer);
    const service = createService(model, viewModel);
    return new BudgetFormController(service, Router(stateContainer));
  }

  describe('BudgetFormController', () => {

    it('should exist', () => {
      const stateContainer = createStateContainer(stubData.initialState);
      const controller = getController(stateContainer);
      expect(controller).toBeDefined();
    });

    describe('BudgetFormController:$onInit', () => {

      it('should be a function', () => {
        const stateContainer = createStateContainer(stubData.initialState);
        const controller = getController(stateContainer);
        expect(controller.$onInit).toBeDefined();
        expect(controller.$onInit).toEqual(jasmine.any(Function));
      });

      it('should initiate a form with a budget object on edit', (done) => {
        const stateContainer = createStateContainer(stubData.initialState);
        const controller = getController(stateContainer);
        controller.$onInit();
        setTimeout(function() {
          const getForm = stateContainer.createSelector(state => state.form);
          expect(getForm()).toEqual(stubData.initialState.budgets[0]);
          done();
        }, 100);
      });

      it('should initiate an empty form object on create', (done) => {
        const stateContainer = createStateContainer(Object.assign(angular.copy(stubData.initialState), {
          route: { name: "form", params: undefined},
        }));
        const controller = getController(stateContainer);
        controller.$onInit();
        setTimeout(function() {
          const getForm = stateContainer.createSelector(state => state.form);
          expect(getForm()).toEqual({});
          done();
        }, 100);
      });
    });

    describe('BudgetFormController:save', () => {

      it('should go to list template on save', (done) => {
        const stateContainer = createStateContainer(stubData.initialState);
        const controller = getController(stateContainer);
        controller.$onInit();
        controller.save(stubData.initialState.budgets[0]);
        setTimeout(function() {
          const getRoute = stateContainer.createSelector(state => state.route);
          expect(getRoute()).toEqual(stubData.listRoute);
          done();
        }, 100);
      });

      it('should call model.updateBudget if it`s an update operation', (done) => {
        const stateContainer = createStateContainer(stubData.initialState);
        const controller = getController(stateContainer);
        controller.$onInit();
        const getRoute = stateContainer.createSelector(state => state.route);
        controller.save(stubData.initialState.budgets[0]);
        setTimeout(function() {
          expect(model.updateBudget).toHaveBeenCalled();
          done();
        }, 100);
      });

      it('should call model.updateBudget if it`s an update operation', (done) => {
        const stateContainer = createStateContainer(Object.assign(angular.copy(stubData.initialState), {
          route: { name: "form", params: undefined},
        }));
        const controller = getController(stateContainer);
        controller.$onInit();
        const getRoute = stateContainer.createSelector(state => state.route);
        controller.save(stubData.initialState.budgets[0]);
        setTimeout(function() {
          expect(model.createBudget).toHaveBeenCalled();
          done();
        }, 100);
      });
    });
  });
});
