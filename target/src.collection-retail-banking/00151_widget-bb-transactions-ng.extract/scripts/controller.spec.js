import makeStateContainer from 'lib-bb-state-container';

import controller from './controller';
import * as defaultHooks from './default-hooks';
import createService from './service';
import createViewModel from './view-model/index';

import { Intent } from './constants';

describe('Transaction Widget Controller', () => {
  let pageSize = 10;
  let loadOnInit = true;
  let intents = [
    Intent.VIEW_CATEGORY_TRANSACTIONS,
    Intent.SHOW_PRODUCT_DETAILS,
    Intent.CHANGE_TRANSACTION_CATEGORY,
  ].join(',');

  const createController = (model, hooks = defaultHooks) => {
    const stateContainer = makeStateContainer(undefined);
    const viewModel = createViewModel(stateContainer, widgetInstance, hooks);
    viewModel.init();
    const service = createService(model, viewModel, $window);
    return controller(model, hooks, widgetInstance, bus, bbIntent, $window, scope, viewModel, service, stateContainer);
  };

  const createModel = (data, product) => ({
    load: (params) => Promise.resolve(({
      data,
      totalCount: data.length,
    })),
    getSelectedProduct: () => Promise.resolve(product),
    storeTransactionAsCurrent: () => {},
    getCurrentTransaction: () => Promise.resolve(),
    getExportFileResource: () => Promise.resolve(),
  });

  const widgetInstance = {
    //mock widgetInstance
    getLongPreference: (key) => {
      const preferences = {
        'bb.transaction.pageSize': pageSize,
      };
      return preferences[key];
    },
    getStringPreference: (key) => {
      const preferences = {
        pageSize,
        'intents': intents,
      };
      return preferences[key];
    },
    getBooleanPreference: (key) => loadOnInit,
    getId: () => '123',
  };

  const bus = {
    publish: () => null,
    subscribe: () => null,
  };

  const $window = {
    addEventListener: () => {},
    location: { assign: url => url },
  };

  const bbIntent = {
    create: () => () => {},
    handle: () => {},
    init: () => {},
  };

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => {}
    ));
  };

  const scope = {
    $digest: () => {},
  };

  const filter = (type) => (d) => {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  beforeEach(() => {
    pageSize = 10;
  });

  it('should publish "cxp.item.loaded" and "bb.item.loaded" events', done => {
    const expected = { test: 'test' };
    const model = createModel(expected, { id: 'test' });
    const ctrl = createController(model);

    spyOn(bus, 'publish');

    ctrl.$onInit()
      .then(() => {
        /* event cxp.item.loaded will be deprecated */
        expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
        expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
        done();
      });

  });

  it('loads values from the model on initialization by default', (done) => {
    const expected = [{ test: 'test' }];
    const model = createModel(expected, { id: 'test' });
    const ctrl = createController(model);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.transactions).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  it('waits for an event to start loading if loadOnInit preference is false', (done) => {
    loadOnInit = false;
    const expected = null;
    const model = createModel([{ test: 'test' }], { id: 'test' });
    const ctrl = createController(model);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.transactions).toEqual(expected);
      })
      .then(done)
      .catch(done.fail);
  });

  describe('and Hooks', () => {
    let hooks;
    let transactions;

    beforeEach(() => {
      loadOnInit = true;
      hooks = {
        processProductSelected: product => product,
        processTransactions: transactions => {
          transactions.forEach(transaction => {
            transaction.category = 'Shopping';
          });
          return transactions;
        },
        processRequestParams: params => {
          return Object.assign(params, {status: 'BOOKED'});
        },
        defaultSortableColumn: () => null,
        defaultSortableDirection: () => null,
        isDefaultProductFirst: () => true,
        defaultPaginationType: () => 'pagination',
        isTransactionsShown: () => true,
      };

      transactions = [
        {
          transactionId: '0001',
          amount: 40.3,
          type: 'debit',
        },
        {
          transactionId: '0002',
          amount: 301,
          type: 'credit',
        }
      ];
    });

    it('should allow developer to process transactions before they are made available to the view', (done) => {
      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model, hooks);
      const expected = [
        {
          transactionId: '0001',
          amount: 40.3,
          type: 'debit',
          category: 'Shopping',
        },
        {
          transactionId: '0002',
          amount: 301,
          type: 'credit',
          category: 'Shopping',
        }
      ];

      spyOn(model, 'load').and.callThrough();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.transactions).toEqual(expected);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should allow developer to process parameters before loading transactions', (done) => {
      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model, hooks);

      const expected = {
        size: 10,
        from: 0,
        status: 'BOOKED',
        productId: 'test',
      };

      spyOn(model, 'load').and.callThrough();

      ctrl.$onInit()
        .then(() => {
          expect(model.load).toHaveBeenCalledWith(expected);
        })
        .then(done)
        .catch(done.fail)
    });
  });

  describe('$ctrl#loadMore', () => {
    it('should append new items to existing', (done) => {
      pageSize = 2;

      const data = [{ test: 'test_a' }, { test: 'test_b' }];
      const model = createModel(data);
      const ctrl = createController(model);
      const mockDone = () => {};

      ctrl.loadMore(mockDone)
        .then(() => {
          expect(ctrl.transactions.length).toBe(2);
          ctrl.loadMore(mockDone)
            .then(() => {
              expect(ctrl.transactions.length).toBe(4);
            })
            .then(done)
            .catch(done.fail);
        });
    });

    it('should call load function on model with size and from params defined', (done) => {
      const model = createModel([], { id: 'test' });
      const ctrl = createController(model);
      const mockDone = () => {};

      spyOn(model, 'load').and.callThrough();

      ctrl
        .$onInit()
        .then(() => ctrl.loadMore(mockDone))
        .then(() => {
          expect(model.load).toHaveBeenCalled();

          let args = model.load.calls.argsFor(0)[0];

          expect(args.from).toEqual(jasmine.any(Number));
          expect(args.size).toEqual(jasmine.any(Number));
          expect(args.from).not.toBeNaN();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should increment "from" param value in each call', (done) => {
      const data = [
        { id: 'transactions_a' },
        { id: 'transactions_b' }
      ];

      pageSize = 2;

      let params;
      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      spyOn(model, 'load').and.callThrough();
      ctrl.$onInit()
        .then(() => {
          const index = model.load.calls.count() - 1;
          params = model.load.calls.argsFor(index)[0];
          expect(params.from).toBe(0);
        })
        .then(() => ctrl.loadMore())
        .then(() => {
          const index = model.load.calls.count() - 1;
          params = model.load.calls.argsFor(index)[0];
          expect(params.from).toBe(1);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should decrement "from" param value when load fails', (done) => {
      const data = [
        { id: 'transactions_a' },
        { id: 'transactions_b' }
      ];

      pageSize = 2;

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.returnValue(Promise.reject());
        })
        .then(() => ctrl.loadMore())
        .then(() => {
          let params = model.load.calls.argsFor(0)[0];
          expect(params.from).toBe(1);
          expect(ctrl.state.pageParams.from).toBe(0);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should set loadedAll flag to true once all the items are loaded', (done) => {
      pageSize = 2;

      const data = [{ test: 'test_a' }, { test: 'test_b' }];
      const model = createModel(data);
      const ctrl = createController(model);
      const mockDone = () => {};

      ctrl.loadMore(mockDone)
        .then(() => {
          expect(ctrl.transactions.length).toBe(2);
          expect(ctrl.allTransactionsLoaded).toBe(false);

          spyOn(model, 'load').and.returnValue(Promise.resolve({data: [
            { test: 'test_c' }
          ] }));

          ctrl.loadMore(mockDone)
            .then(() => {
              expect(ctrl.transactions.length).toBe(3);
              expect(ctrl.allTransactionsLoaded).toBe(true);
            })
            .then(done)
            .catch(done.fail);
        });
    });
  });

  describe('$ctrl#search', () => {
    it('should perform a request with a given query', (done) => {
      const data = [{ test: 'test' }];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.callThrough();
        })
        .then(() => ctrl.search('test'))
        .then(() => {
          expect(model.load).toHaveBeenCalledWith({
            from: 0,
            size: 10,
            query: 'test',
            productId: 'test'
          });
        })
        .then(done, done.fail)
    });

    it('should expose found results', (done) => {
      const data = [{ test: 'test' }];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.search('test'))
        .then(() => {
          expect(ctrl.searchTransactions).toEqual(data);
        })
        .then(done, done.fail)
    });

    it('should expose an error if search failed', (done) => {
      const data = [{ test: 'test' }];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      expect(ctrl.searchLoadingError).toBe(null);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.returnValue(Promise.reject('Error'));
        })
        .then(() => ctrl.search('test'))
        .then(done.fail, () => {
          expect(ctrl.searchLoadingError).not.toBe(null);
          done();
        });
    });
  });

  describe('$ctrl#searchMore', () => {
    it('should perform a request with a given query for a next page', (done) => {
      const data = [{ test: 'test' }];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.callThrough();
          return ctrl.search('test');
        })
        .then(() => ctrl.searchMore())
        .then(() => {
          expect(model.load).toHaveBeenCalledWith({
            from: 1,
            size: 10,
            query: 'test',
            productId: 'test'
          });
        })
        .then(done, done.fail)
    });

    it('should append result to previous one', (done) => {
      const data = [{ test: 'test' }];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.search('test'))
        .then(() => ctrl.searchMore())
        .then(() => {
          expect(ctrl.searchTransactions).toEqual([...data, ...data]);
        })
        .then(done, done.fail)
    });

    it('should set loadedAll flag to true once all the items are loaded', (done) => {
      pageSize = 2;

      const data = [
        { test: 'test_a' },
        { test: 'test_b' }
      ];

      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit().then(() => {
        ctrl.search('test')
          .then(() => {
            expect(ctrl.searchAllTransactionsLoaded).toBe(false);
          })
          .then(() => {
            spyOn(model, 'load').and.returnValue(Promise.resolve({ data: [
              { test: 'test_c' }
            ] }));

            ctrl.searchMore()
              .then(() => {
                expect(ctrl.searchAllTransactionsLoaded).toBe(true);
              })
          })
          .then(done, done.fail);
      })
    });
  });

  describe('$ctrl#onTransactionClick', function() {
    it('should publish corresponding event on transaction select', () => {
      const transaction = {
        transactionId: '0001',
        amount: 40.3,
        type: 'debit',
      };

      const model = createModel([], transaction);
      const ctrl = createController(model);

      spyOn(bus, 'publish');
      spyOn(model, 'storeTransactionAsCurrent');

      ctrl.onTransactionClick(transaction);

      expect(bus.publish).toHaveBeenCalled();
      expect(ctrl.transaction).toEqual(transaction);
      expect(model.storeTransactionAsCurrent).toHaveBeenCalledWith(transaction);
    });
  });

  describe('When a transaction is selected from the list', function() {
    it('should have the selected transaction data in the sync preference', (done) => {
      const transaction = {
        transactionId: '0001',
        amount: 40.3,
        type: 'debit',
      };

      let handler;
      spyOn(bus, 'subscribe').and.callFake((event, handlerFn) => {
        if(event === 'bb.event.transaction.selected') {
          handler = handlerFn;
        }
      });

      const model = createModel([], transaction);
      const ctrl = createController(model);

      spyOn(model, 'getCurrentTransaction').and.returnValue(Promise.resolve(transaction));

      ctrl.$onInit()
        .then(() => {
          expect(bus.subscribe).toHaveBeenCalled();

          handler({transaction: transaction});
          expect(ctrl.transaction).toEqual(transaction);
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('$ctrl#state', function() {
    const transactions = [
      {
        transactionId: '0001',
        amount: 40.3,
        type: 'debit',
      }
    ];
    const hooks = {
      defaultSortableColumn: () => 'bookingDate',
      defaultSortableDirection: () => 'DESC',
      defaultPaginationType: () => 'pagination',
      isTransactionsShown: () => true,
    };

    it('should exist', () => {
      const ctrl = createController();
      expect(ctrl.state).toBeObject();
    });

    it('should have a certain structure', () => {
      const model = createModel(transactions);
      const ctrl = createController(model, hooks);

      expect(ctrl.state.sort.orderBy).toBe('bookingDate');
      expect(ctrl.state.sort.direction).toBe('DESC');
    });
  });

  describe('$ctrl#onSort', function() {
    const transactions = [
      {
        transactionId: '0001',
        amount: 40.3,
        type: 'debit',
      }
    ];
    const hooks = {
      defaultSortableColumn: () => 'bookingDate',
      defaultSortableDirection: () => 'DESC',
      defaultPaginationType: () => 'pagination'
    };

    it('should exist', () => {
      const ctrl = createController();
      expect(ctrl.onSort).toBeFunction();
    });
  });

  describe('$ctrl#applySearchFilter', () => {
    it('should apply the search filter parameters on a search request', (done) => {
      const transactions = [
        { id: 'test1' },
        { id: 'test2' },
        { id: 'test3' },
      ];

      const requestParameters = {
        query: 'testquery',
        toDate: '25-09-2017',
        fromDate: '21-09-2017',
        amountFrom: 200,
        amountTo: 500,
        creditDebitIndicator: 'DBIT',
      };

      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.callThrough();
        })
        .then(() => ctrl.applySearchFilter(requestParameters))
        .then(() => {
          expect(model.load).toHaveBeenCalledWith({
            from: 0,
            size: pageSize,
            query: 'testquery',
            productId: 'test',
            bookingDateLessThan: '25-09-2017',
            bookingDateGreaterThan: '21-09-2017',
            amountGreaterThan: 200,
            amountLessThan: 500,
            creditDebitIndicator: 'DBIT',
          });
        })
        .then(done, done.fail)
    });

    it('should expose found results', (done) => {
      const transactionData = [{
        test: 'test',
        toDate: '25-09-2017',
        fromDate: '21-09-2017',
        amountFrom: 200,
        amountTo: 500,
        creditDebitIndicator: 'DBIT',
      }];

      const model = createModel(transactionData, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.search('test'))
        .then(() => {
          expect(ctrl.searchTransactions).toEqual(transactionData);
        })
        .then(done, done.fail)
    });

    it('should expose an error if search failed', (done) => {
      const transactionData = {
        test: 'test',
        toDate: '25-09-2017',
        fromDate: '21-09-2017',
        amountFrom: 200,
        amountTo: 500,
        creditDebitIndicator: 'DBIT',
      };

      const model = createModel(transactionData, { id: 'test' });
      const ctrl = createController(model);

      expect(ctrl.searchLoadingError).toBe(null);

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'load').and.returnValue(Promise.reject('Error'));
        })
        .then(() => ctrl.search('test'))
        .then(done.fail, () => {
          expect(ctrl.searchLoadingError).not.toBe(null);
          done();
        });
    });

    it('should reset pagination if search is applied', (done) => {
      const transactions = [
        {
          transactionId: '0001',
          amount: 40.3,
          type: 'debit',
        },
        {
          transactionId: '0002',
          amount: 301,
          type: 'credit',
        },
        {
          transactionId: '0003',
          amount: 10.15,
          type: 'debit',
        }
      ];

      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.changePage({ currentPage: 3 }))
        .then(() => {
          expect(ctrl.state.pageParams.currentPage).toEqual(3);
        })
        .then(() => ctrl.applySearchFilter('test'))
        .then(() => {
          expect(ctrl.state.pageParams.currentPage).toEqual(1);
          done();
        })
        .catch(done.fail);
    });

    it('should set searching state to true if correct filter data is provided', (done) => {
      const transactions = {
        test: 'test',
      };

      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.applySearchFilter({ query: 'test' }))
        .then(() => {
          expect(ctrl.isSearching).toEqual(true);
          done();
        })
        .catch(done.fail);
    });

    it('should set searching state to false if filter data is empty', (done) => {
      const transactions = {
        test: 'test',
      };

      const model = createModel(transactions, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => ctrl.applySearchFilter({}))
        .then(() => {
          expect(ctrl.isSearching).toEqual(false);
          done();
        })
        .catch(done.fail);
    });

    describe('$ctrl#export', () => {
      it('should export today\'s transactions if not filter specified', (done) => {
        const today = filter('date')(new Date(), 'yyyy-MM-dd');
        const data = [{ test: 'test', bookingDate: today }];

        const model = createModel(data, { id: 'test' });
        const ctrl = createController(model);

        ctrl.$onInit()
          .then(() => {
            spyOn(model, 'getExportFileResource');
            spyOn($window.location, 'assign');
          })
          .then(() => ctrl.exportToFile('csv'))
          .then(() => {
            expect(model.getExportFileResource).toHaveBeenCalledWith({
              productId:'test',
              bookingDateLessThan: today,
              bookingDateGreaterThan: today,
              exportFormat: 'csv'
            });
          })
          .then(done, done.fail);
      });
    });

    describe('$ctrl#showProductDetails', () => {
      it('should call the intent to show the product details', (done) => {
        const today = filter('date')(new Date(), 'yyyy-MM-dd');
        const data = [{ test: 'test', bookingDate: today }];
        const model = createModel(data, { id: 'test' });
        const ctrl = createController(model);
        const productId = "1234";
        const intent = jasmine.createSpy(Intent.SHOW_PRODUCT_DETAILS);

        const intentObj = {};
        intentObj[Intent.SHOW_PRODUCT_DETAILS] = intent;

        mockIntents(intentObj);

        ctrl.$onInit()
          .then(() => ctrl.showProductDetails(productId))
          .then(() => {
            expect(intent).toHaveBeenCalledWith(productId);
            done();
          })
          .catch(done.fail);
      });
    });
  });

  describe('$ctrl#changeTransactionCategory', () => {
    it('should emit an intent with payload a tranasction object', (done) => {
      const today = filter('date')(new Date(), 'yyyy-MM-dd');
      const data = [{ test: 'test', bookingDate: today }];
      const model = createModel(data, { id: 'test' });
      const ctrl = createController(model);
      const intent = jasmine.createSpy(Intent.CHANGE_TRANSACTION_CATEGORY);
      const transactionMock = {
        id: 1,
        amount: 40.3,
        type: 'debit',
      };

      const intentObj = {};
      intentObj[Intent.CHANGE_TRANSACTION_CATEGORY] = intent;

      mockIntents(intentObj);

      ctrl.$onInit()
        .then(() => ctrl.changeTransactionCategory(transactionMock))
        .then(() => {
          expect(intent).toHaveBeenCalledWith(transactionMock);
          done();
        })
        .catch(done.fail);
    });
  });

  describe('Intents', () => {
    it('initIntent should be called', () => {
      const expected = { test: 'test' };
      const model = createModel(expected, { id: 'test' });
      const ctrl = createController(model);

      ctrl.$onInit()
        .then(() => {
          expect(initIntent).toHaveBeenCalled();
        })
        .catch(() => {});
    });
  });
});
