import Model from './transaction-categories';
import bbStorageKeys from './constants';

const categoriesData = ({
  getCategories: () => Promise.resolve(
    [
      {
        "categoryId": 1,
        "categoryName": "Home",
        "categoryType": "Expenses"
      },
      {
        "categoryId": 2,
        "categoryName": "Health & Beauty",
        "categoryType": "Expenses"
      }
    ]
  ),
});

const storageData = [
  {
    "categoryId": 1,
    "categoryName": "Home",
    "categoryType": "Expenses"
  },
  {
    "categoryId": 2,
    "categoryName": "Health & Beauty",
    "categoryType": "Expenses"
  }
];

const storage = {
  getItem: (key) => {
    let result = null;
    switch (key) {
      case bbStorageKeys.TRANSACTION_CATEGORIES_LIST:
        result = storageData;
        break;
    }
    return Promise.resolve(result);
  },
  setItem: () => Promise.resolve(),
};

describe('model-bb-transaction-categories-ng::model', function() {
  function getModel() {
    return Model(categoriesData, storage);
  }

  describe('getCategories()', function() {
    it('loads categories data', function(done) {
      let model = getModel();

      model.getCategories()
        .then(function(data) {
          expect(data.length).not.toBeNull();
        })
        .then(done);
    });
  });
});
