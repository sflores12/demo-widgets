import Model from './product-summary';
import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED, E_USER } from 'lib-bb-model-errors';

const containing = jasmine.objectContaining;
const storage = {};

describe('Product summary model', () => {
  const bbStorage = {
    getItem: (key) => storage[key] ? Promise.resolve(storage[key]) : Promise.resolve({}),
    setItem: (key, item) => {
      storage[key] = item;
      return Promise.resolve(storage);
    },
    removeItem: (key) => {
      delete(storage[key]);
      return Promise.resolve(storage);
    },
  };

  it('should patch, update arrangement ', done => {
    const productUpdates = {
      id: "tmpid",
      alias: "nameOne",
      visible: true
    };

    const productSummaryData = {};
    const arrangementsData = {
      patchArrangementsRecord: (arrangement) => Promise.resolve(arrangement),
    };

    const model = Model(productSummaryData, arrangementsData, bbStorage, {});

    model.patchArrangement(productUpdates)
      .then( result => {
        expect(result).toEqual(productUpdates);
      })
      .then(done)
      .catch(done.fail);
  });

  it('exposes total, productKinds on load', (done) => {
    const rawData = {
      headers: {},
      data: {
        aggregatedBalance: {
          value: 123,
          currency: 'EUR',
        },
        CurrentAccount: {
          name: "Current Account",
        },
        SavingsAccount: {
          name: "Savings Account",
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    const expected = containing({
      productKinds: jasmine.any(Array),
      total: rawData.data.aggregatedBalance,
    });

    model.load()
      .then((actual) => {
        expect(actual).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  it('exposes Products as an array of ProductKinds', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const savingsAccount1 = { id: "SavingsAccount1" };
    const random = 'random';
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          name: "Current Account",
          products: [currentAccount1, currentAccount2],
          random,
        },
        SavingsAccount: {
          name: "Savings Account",
          products: [savingsAccount1],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    const expected = [
      containing({
        id: "CurrentAccount",
        name: "Current Account",
        random,
        products: [
          containing(currentAccount1),
          containing(currentAccount2),
        ],
      }),
      containing({
        id: "SavingsAccount",
        name: "Savings Account",
        products: [
          containing(savingsAccount1),
        ],
      }),
    ];

    model.load()
      .then(({ productKinds }) => {
        expect(productKinds).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  it('does not return Product Kinds that have no Products', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          products: [currentAccount1],
        },
        SavingsAccount: {
          products: [],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    const expected = [
      containing({
        id: "CurrentAccount",
        products: [ containing(currentAccount1) ],
      }),
    ];

    model.load()
      .then(({ productKinds }) => {
        expect(productKinds).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  it('gives a "user" error when the HTTP returns a 400 response', (done) => {
    const productSummaryData = {
      getProductsummary: () => Promise.reject({ status: 400 }),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    model.load()
      .catch(error => {
        expect(error.code).toBe(E_USER);
      })
      .then(done);
  });

  it('gives an "authorization" error when the HTTP returns a 401 response', (done) => {
    const productSummaryData = {
      getProductsummary: () => Promise.reject({ status: 401 }),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    model.load()
      .then(done.fail)
      .catch(error => {
        expect(error.code).toBe(E_AUTH);
      })
      .then(done);
  });

  it('gives a "connectivity" error error when the HTTP request fails', (done) => {
    const productSummaryData = {
      getProductsummary: () => Promise.reject({ status: 0 }),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    model.load()
      .then(done.fail)
      .catch(error => {
        expect(error.code).toBe(E_CONNECTIVITY);
      })
      .then(done);
  });

  it('gives an "unexpected" error when any unhandled status code is returned', (done) => {
    const productSummaryData = {
      getProductsummary: () => Promise.reject({ status: 1 }),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    model.load()
      .then(done.fail)
      .catch(error => {
        expect(error.code).toBe(E_UNEXPECTED);
      })
      .then(done);
  });

  it('load accounts by legal entity id', (done) => {
    const rawData = {
      headers: key => key === 'x-total-count' ? 0 : null,
      data: [],
    };
    const productSummaryData = {
      getProductsummaryArrangements: () => Promise.resolve(rawData),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    const expected = { data: [], totalCount: 0 };

    model.loadByLegalEntityId('some-id', {})
      .then(raw => {
        expect(raw).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  it('handles load accounts errors', (done) => {
    const productSummaryData = {
      getProductsummaryArrangements: () => Promise.reject({ status: 1 }),
    };

    const model = Model(productSummaryData, {}, bbStorage);

    model.loadByLegalEntityId()
      .then(done.fail)
      .catch(e => {
        expect(e.code).toEqual(E_UNEXPECTED);
      })
      .then(done);
  });

  it('should return account details for a given product id', (done) => {
    const productId = '1';
    const accountDetails = {
      id: productId,
      name: 'dummy',
      accountNumber: 'test',
    };
    const arrangementsData = {
      getArrangementsRecord: (id) => Promise.resolve({ data: accountDetails }),
    };
    const model = Model({}, arrangementsData, bbStorage);

    model.getProductDetails(productId)
      .then(details => {
        expect(details).toEqual(accountDetails);
      })
      .then(done)
      .catch(done.fail);
  });

  it('should store selected product and return it upon request', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          name: "Current Account",
          products: [currentAccount1, currentAccount2],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };

    const model = Model(productSummaryData, {}, bbStorage, Promise);

    model.load(true);
    model.setProductSelected(currentAccount1);
    model.getProductSelected(false)
      .then(product => {
        expect(product.id).toEqual(currentAccount1.id);
      })
      .then(done)
      .catch(done.fail);
  });

  it('should remove selected product from storage if setProductSelected is called with empty data', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          name: "Current Account",
          products: [currentAccount1, currentAccount2],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };

    const model = Model(productSummaryData, {}, bbStorage, Promise);

    model.load(true);
    model.setProductSelected(null);
    model.getProductSelected(false)
      .then(data => {
        expect(data).toBe(null);
      })
      .then(done)
      .catch(done.fail);
  });

  it('should store selected products and return them upon request', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          name: "Current Account",
          products: [currentAccount1, currentAccount2],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };

    const model = Model(productSummaryData, {}, bbStorage, Promise);

    model.load(true);
    model.setProductsSelected([currentAccount1, currentAccount2]);
    model.getProductsSelected(false)
      .then(products => {
        expect(products.length).toBe(2);
        expect(products[0].id).toBe(currentAccount1.id);
        expect(products[1].id).toBe(currentAccount2.id);
      })
      .then(done)
      .catch(done.fail);
  });

  it('should remove selected products from storage if setProductsSelected is called with empty array', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const rawData = {
      headers: {},
      data: {
        CurrentAccount: {
          name: "Current Account",
          products: [currentAccount1, currentAccount2],
        }
      }
    };

    const productSummaryData = {
      getProductsummary: () => Promise.resolve(rawData),
    };

    const model = Model(productSummaryData, {}, bbStorage, Promise);

    model.setProductsSelected([]);
    model.getProductsSelected(false)
      .then(data => {
        expect(data).toEqual([]);
      })
      .then(done)
      .catch(done.fail);
  });

  it('should load arrengements for a given context', (done) => {
    const rawData = {
      headers: key => key === 'x-total-count' ? 0 : null,
      data: [],
    };
    const params = {
      businessFunction: 'Product Summary',
      privilege: 'view',
      resourceName: 'Product Summary',
    };

    const productSummaryData = {
      getProductsummaryContextArrangements: () => Promise.resolve(rawData),
    };
    const model = Model(productSummaryData, {}, bbStorage);

    const expected = { data: [], totalCount: 0 };

    spyOn(productSummaryData, 'getProductsummaryContextArrangements').and.callThrough();
    model.loadContextArrangements(params)
      .then(raw => {
        expect(productSummaryData.getProductsummaryContextArrangements)
         .toHaveBeenCalledWith(params);
        expect(raw).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });
});
