import { positiveSignKey, negativeSignKey } from './debit-credit-sign';
import createHelpers from './helpers';

describe('helpers', () => {
  const bbIntent = {
    create: () => {},
  };

  const stateContainer = {
    createSelector: () => {},
  };

  const helpers = createHelpers({
    bbIntent,
    stateContainer,
  });

  const mockIntents = intents => {
    spyOn(bbIntent, 'create').and.callFake(intentName => intents[intentName]);
    return intents;
  };

  const mockPlatform = platform => {
    window.BB_PLATFORM = platform;
  }

  describe('getSignedAmount() should return', () => {
    it('positive value if sign is ' + positiveSignKey, () => {
      const transaction = {
        creditDebitIndicator: positiveSignKey,
        amount: 1.23,
      };

      const actual = helpers.getSignedAmount(transaction);
      const expected = 1.23;

      expect(actual).toEqual(expected);
    });

    it('negative value if sign is ' + negativeSignKey, () => {
      const transaction = {
        creditDebitIndicator: negativeSignKey,
        amount: 1.23,
      };

      const actual = helpers.getSignedAmount(transaction);
      const expected = -1.23;

      expect(actual).toEqual(expected);
    });
  });

  describe('onInit', () => {
    it('should be able to handle the users intent to show the product details page', done => {
      const handlers = {};

      spyOn(window, 'addEventListener').and.callFake((eventType, handler) => {
        handlers[eventType] = handler;
      });

      const ctrl = {
        showProductDetails: jasmine.createSpy('showProductDetails'),
        product: {
          id: "1234"
        }
      };

      helpers.onInit(ctrl);

      handlers['bb.action.productDetails.view.show']();

      setTimeout(() => {
        expect(ctrl.showProductDetails).toHaveBeenCalledWith("1234");
        done();
      }, 0);
    });
  });

  describe('isInitialLoading', () => {
    it('should be true if it is the first loading', () => {
      const ctrl = {
        transactions: null,
        loading: true,
      };

      expect(helpers.isInitialLoading(ctrl)).toEqual(true);
    });

    it('should be false if it is not the first loading', () => {
      const ctrl = {
        transactions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        loading: true,
      };

      expect(helpers.isInitialLoading(ctrl)).toEqual(false);
    });
  });

  describe('isSearchEmptyState', () => {
    it('should be true if there are no search results', () => {
      const ctrl = {
        searching: true,
        searchTransactions: [],
        searchLoadingError: false,
        searchLoading: false,
      };

      expect(helpers.isSearchEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some search results', () => {
      const ctrl = {
        searching: true,
        searchTransactions: [{ id: 1 }],
        searchLoadingError: false,
        searchLoading: false,
      };

      expect(helpers.isSearchEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('isSearchErrorState', () => {
    it('should be true if there is an error during the searching', () => {
      const ctrl = {
        searching: true,
        searchLoading: false,
        searchLoadingError: true,
      };

      expect(helpers.isSearchErrorState(ctrl)).toEqual(true);
    });

    it('should be true if there are no errors during the searching', () => {
      const ctrl = {
        searching: true,
        searchLoading: false,
        searchLoadingError: false,
      };

      expect(helpers.isSearchErrorState(ctrl)).toEqual(false);
    });
  });

  describe('isEmptyState', () => {
    it('should be true if there are no transactions', () => {
      const ctrl = {
        searching: false,
        transactions: [],
        loadingError: false,
        loading: false,
      };

      expect(helpers.isEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some transactions', () => {
      const ctrl = {
        searching: false,
        transactions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        loadingError: false,
        loading: false,
      };

      expect(helpers.isEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('isErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        searching: false,
        loading: false,
        loadingError: true,
      };

      expect(helpers.isErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        searching: true,
        loading: false,
        loadingError: false,
      };

      expect(helpers.isErrorState(ctrl)).toEqual(false);
    });
  });

  describe('initiatePayment', () => {
    it('should trigger "intent.bb.paymentOrder.payment.initiate" intent with a given product as a debit account', () => {
      const product = {
        id: 'account-a',
      };

      const intents = mockIntents({
        'intent.bb.paymentOrder.payment.initiate': jasmine.createSpy(),
      });

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      const helpers = createHelpers({ bbIntent, stateContainer });

      helpers.initiatePayment();

      expect(intents['intent.bb.paymentOrder.payment.initiate']).toHaveBeenCalledWith({
        debitAccount: product,
      });
    });
  });

  describe('showAccountActions', () => {
    it('should return true, if the given account is a debit account', () => {
      const product = { debitAccount: true };

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      const helpers = createHelpers({ bbIntent, stateContainer });

      expect(helpers.showAccountActions()).toEqual(true);
    });

    it('should return false, if the given account is not a debit account', () => {
      let product;

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      const helpers = createHelpers({ bbIntent, stateContainer });

      product = { debitAccount: false };
      expect(helpers.showAccountActions(product)).toEqual(false);

      product = {};
      expect(helpers.showAccountActions(product)).toEqual(false);
    });
  });

  describe('showFAB', () => {
    it('should return true if actions are available for the selected product and the platform is Android', () => {
      const product = { debitAccount: true };

      const ctrl = {
        searching: false,
      };

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      mockPlatform('android');

      const helpers = createHelpers({ bbIntent, stateContainer });

      expect(helpers.showFAB(ctrl)).toEqual(true);
    });

    it('should return false if actions are not available for the selected product', () => {
      const product = { debitAccount: false };

      const ctrl = {
        searching: false,
      };

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      mockPlatform('android');

      const helpers = createHelpers({ bbIntent, stateContainer });

      expect(helpers.showFAB(ctrl)).toEqual(false);
    });

    it('should return false if the platform is iOS', () => {
      const product = { debitAccount: true };

      const ctrl = {
        searching: false,
      };

      spyOn(stateContainer, 'createSelector').and.callFake(selector => () => selector({
        product: {
          data: product,
        },
      }));

      mockPlatform('ios');

      const helpers = createHelpers({ bbIntent, stateContainer });

      expect(helpers.showFAB(ctrl)).toEqual(false);
    });
  });
});
