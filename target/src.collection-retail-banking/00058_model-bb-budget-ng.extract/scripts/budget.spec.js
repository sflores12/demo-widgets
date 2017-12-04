import newModel from './budget';

const stubData = {

  postBudgetsRecord: {
    success: { "status": 201, "data": { "id": 1 } },
    error: { "status": 500, "data": null },
  },
  getBudgets: {
    success: {
      "status": 200,
      "data": [
        { "id": 1, "categoryName": "Health & Beauty", "budgetName": "Healthcare/Medical" },
        { "id": 2, "categoryName": "Transportation", "budgetName": "My Transport"},
      ]
    },
    error: { "status": 404, "data": null },
  },
  deleteBudgetsRecord: {
    success: { "status": 204, "data": null },
    error: { "status": 500, "data": null }
  },
  putBudgetsRecord: {
    success: { "status": 204, "data": null },
    error: { "status": 500, "data": null }
  },
};

const mockData = () => {
  const mock = jasmine.createSpyObj('data-module', [
    'getBudgets',
    'postBudgetsRecord',
    'deleteBudgetsRecord',
    'putBudgetsRecord',
  ]);

  mock.getBudgets.and.returnValue(Promise.resolve({ data: stubData.getBudgets.success }));
  mock.postBudgetsRecord.and.returnValue(Promise.resolve({ data: stubData.postBudgetsRecord.success }));
  mock.deleteBudgetsRecord.and.returnValue(Promise.resolve({ data: stubData.deleteBudgetsRecord.success }));
  mock.putBudgetsRecord.and.returnValue(Promise.resolve({ data: stubData.putBudgetsRecord.success }));
  return mock;
};

describe('model-bb-budget-ng::model', () => {
  function init() {
    return [newModel('$q', mockData()), mockData()];
  }

  describe('getBudgets()', () => {
    it('fetches a list of budget items', (done) => {
      const [model, mock] = init();
      const data = stubData.getBudgets.success;

      model.getBudgets()
        .then(result => {
          expect(result.items).toBe(data);
        }).then(done, fail);
    });

    it('rejects with an error when the request fails', (done) => {
      const [model, mock] = init();
      mock.getBudgets.and.returnValue(Promise.reject({ data: stubData.getBudgets.error }));

      model.getBudgets()
        .then(done, fail);
    });
  });

  describe('createBudget()', () => {
    it('expect to return id of created item', (done) => {
      const [model, mock] = init();
      const data = stubData.postBudgetsRecord.success;
      model.createBudget({})
        .then(result => {
          expect(result.data).toBe(data);
          done();
        })
    });

    it('rejects with an error when the request fails', (done) => {
      const [model, mock] = init();
      const data = stubData.postBudgetsRecord.error;
      mock.postBudgetsRecord.and.returnValue(Promise.reject({ data: stubData.postBudgetsRecord.error }));

      model.createBudget({})
        .then(done, response => {
          expect(response.data).toBe(data);
          fail();
        });
    });
  });

  describe('updateBudget()', () => {
    it('expect to return id of created item', (done) => {
      const [model, mock] = init();
      const data = stubData.putBudgetsRecord.success;
      model.updateBudget({})
        .then(result => {
          expect(result.data).toBe(data);
          done();
        })
    });

    it('rejects with an error when the request fails', (done) => {
      const [model, mock] = init();
      const data = stubData.putBudgetsRecord.error;
      mock.putBudgetsRecord.and.returnValue(Promise.reject({ data: stubData.putBudgetsRecord.error }));

      model.updateBudget({})
        .then(done, response => {
          expect(response.data).toBe(data);
          fail();
        });
    });
  });

  describe('deleteBudget()', () => {
    it('expect to return status code saying that delete is successful', (done) => {
      const [model, mock] = init();
      const data = stubData.deleteBudgetsRecord.success;
      model.deleteBudget({})
        .then(result => {
          expect(result.data).toBe(data);
          done();
        })
    });

    it('rejects with an error when the request fails', (done) => {
      const [model, mock] = init();
      const data = stubData.deleteBudgetsRecord.error;
      mock.putBudgetsRecord.and.returnValue(Promise.reject({ data: stubData.putBudgetsRecord.error }));

      model.updateBudget({})
        .then(done, response => {
          expect(response.data).toBe(data);
          fail();
        });
    });
  });

});
