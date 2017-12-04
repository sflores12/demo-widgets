import ViewModel from './view-model';

describe('widget-bbm-initiate-payment-ng::ViewModel', () => {
  const bbStorage = {
    getItem: () => Promise.resolve(),
    setItem: () => Promise.resolve(),
  };

  const createViewModel = () => ViewModel(bbStorage);

  const mockState = state => {
    spyOn(bbStorage, 'getItem').and.returnValue(Promise.resolve(state));
  };

  describe('Methods', () => {
    describe('#getAccounts', () => {
      it('should return debit accounts if the passed type argument is "debit"', done => {
        const data = [];

        const debitAccounts = {
          data,
        };

        mockState({ debitAccounts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getAccounts('debit')).toBe(data);
          done();
        });
      });

      it('should return beneficiaries if the passed type argument is "credit"', done => {
        const data = [];

        const beneficiaries = {
          data,
        };

        mockState({ beneficiaries });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getAccounts('credit')).toBe(data);
          done();
        });
      });
    });

    describe('#getBeneficiaries', () => {
      it('should return beneficiaries', done => {
        const data = [];

        const beneficiaries = {
          data,
        };

        mockState({ beneficiaries });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getBeneficiaries()).toBe(data);
          done();
        });
      });
    });

    describe('#getContacts', () => {
      it('should return the list of contacts', done => {
        const contacts = [
          'Contact A',
          'Contact B',
        ];

        mockState({ contacts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getContacts()).toBe(contacts);
          done();
        });
      });
    });

    describe('#getCurrencies', () => {
      it('should return the list of currencies', done => {
        const data = [];

        const currencies = {
          data,
        };

        mockState({ currencies });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getCurrencies()).toBe(data);
          done();
        });
      });
    });

    describe('#getDebitAccounts', () => {
      it('should return debit accounts', done => {
        const data = [];

        const debitAccounts = {
          data,
        };

        mockState({ debitAccounts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getDebitAccounts()).toBe(data);
          done();
        });
      });
    });

    describe('#getInitialPayment', () => {
      it('should return initial payment', () => {
        const viewModel = createViewModel();

        expect(viewModel.getInitialPayment()).toEqual(jasmine.objectContaining({
          debitAccount: null,
          beneficiary: {
            name: '',
            identifier: '',
            isNew: true,
          },
          amount: {
            currency: 'EUR',
            value: null,
          },
          description: null,
          schedule: {
            transferFrequency: 'ONCE',
            startDate: jasmine.any(Date),
            end: 'NEVER',
            endDate: null,
            every: 1,
            repeat: 5,
          },
        }));
      });
    });

    describe('#getPayment', () => {
      it('should return the payment object', done => {
        const payment = {
          data: {
            amount: {
              currency: 'EUR',
              value: 100,
            },
            debitAccount: { id: 'account-a' },
            beneficiary: { id: 'account-b' },
            description: 'Test',
          },
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getPayment()).toEqual(payment.data);
          done();
        });
      });
    });

    describe('#getSaveContact', () => {
      it('should return the value of `saveContact` flag', done => {
        mockState({ saveContact: true });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getSaveContact()).toBe(true);
          done();
        });
      });
    });

    describe('#getSelectedAccount', () => {
      it('should return the selected beneficiary if the passed type is "credit"', done => {
        const beneficiary = {};

        const payment = {
          data: { beneficiary },
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getSelectedAccount('credit')).toBe(beneficiary);
          done();
        });
      });

      it('should return the selected debit account if the passed type is "debit"', done => {
        const debitAccount = {};

        const payment = {
          data: { debitAccount },
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getSelectedAccount('debit')).toBe(debitAccount);
          done();
        });
      });
    });

    describe('#getSelectedBeneficiary', () => {
      it('should return the selected beneficiary', done => {
        const beneficiary = {};

        const payment = {
          data: { beneficiary },
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getSelectedBeneficiary()).toBe(beneficiary);
          done();
        });
      });
    });

    describe('#getSelectedDebitAccount', () => {
      it('should return the selected debit account', done => {
        const debitAccount = {};

        const payment = {
          data: { debitAccount },
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.getSelectedDebitAccount()).toBe(debitAccount);
          done();
        });
      });
    });

    describe('#isBeneficiaryComplete', () => {
      it('should return true, if the selected beneficiary has name and identifier', done => {
        const viewModel = createViewModel();

        const payment = {
          data: {},
          error: null,
          loading: false,
        };

        mockState({ payment });

        viewModel.fetch().then(() => {
          viewModel.setSelectedBeneficiary({
            name: 'John',
            identifier: 'FI2112345600000784',
          });

          expect(viewModel.isBeneficiaryComplete()).toBe(true);

          done();
        });
      });

      it('should return false, if beneficiary is not complete', done => {
        const viewModel = createViewModel();

        const payment = {
          data: {},
          error: null,
          loading: false,
        };

        mockState({ payment });

        viewModel.fetch().then(() => {
          viewModel.setSelectedBeneficiary({ identifier: 'FI2112345600000784' });
          expect(viewModel.isBeneficiaryComplete()).toBe(false);

          viewModel.setSelectedBeneficiary({ name: 'John' });
          expect(viewModel.isBeneficiaryComplete()).toBe(false);

          viewModel.setSelectedBeneficiary(null);
          expect(viewModel.isBeneficiaryComplete()).toBe(false);

          done();
        });
      });
    });

    describe('#resetContacts', () => {
      it('should clear the list of contacts', done => {
        const contacts = [
          'Contact A',
          'Contact B',
        ];

        mockState({ contacts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.resetContacts();
          expect(viewModel.getContacts()).toBe(null);
          done();
        });
      });
    });

    describe('#isBeneficiaryExternal', () => {
      it('should return true, if the selected beneficiary is an external account', done => {
        const viewModel = createViewModel();

        const payment = {
          data: {},
          error: null,
          loading: false,
        };

        mockState({ payment });

        viewModel.fetch().then(() => {
          viewModel.setSelectedBeneficiary({
            external: true,
            identifier: 'FI2112345600000784',
            name: 'John',
          });

          expect(viewModel.isBeneficiaryExternal()).toBe(true);

          viewModel.setSelectedBeneficiary({
            identifier: 'FI2112345600000784',
            name: 'John',
          });

          expect(viewModel.isBeneficiaryExternal()).toBe(true);

          viewModel.setSelectedBeneficiary({
            external: true,
            id: 'account-a',
            identifier: 'FI2112345600000784',
            name: 'John',
          });

          expect(viewModel.isBeneficiaryExternal()).toBe(true);

          done();
        });
      });

      it('should return false, if the selected beneficiary is an internal account', done => {
        const viewModel = createViewModel();

        const payment = {
          data: {},
          error: null,
          loading: false,
        };

        mockState({ payment });

        viewModel.fetch().then(() => {
          viewModel.setSelectedBeneficiary({
            name: 'John',
            identifier: 'FI2112345600000784',
            id: 'account-a',
          });

          expect(viewModel.isBeneficiaryExternal()).toBe(false);

          done();
        });
      });
    });

    describe('#setBeneficiaries', () => {
      it('should set the given argument as the list of beneficiaries', done => {
        const beneficiaries = {
          data: [],
          error: 'Error',
          loading: true,
        };

        mockState({ beneficiaries });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setBeneficiaries(['Account A']);

          expect(viewModel.state.beneficiaries).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setBeneficiariesError', () => {
      it('should mark the beneficiaries as failed with the given error', done => {
        const beneficiaries = {
          data: ['Account A'],
          error: null,
          loading: true,
        };

        mockState({ beneficiaries });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setBeneficiariesError('Error');

          expect(viewModel.state.beneficiaries).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setBeneficiariesLoading', () => {
      it('should update the loading flag of the beneficiaries with the given argument', done => {
        const beneficiaries = {
          data: ['Account A'],
          error: 'Error',
          loading: false,
        };

        mockState({ beneficiaries });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setBeneficiariesLoading(true);

          expect(viewModel.state.beneficiaries).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setContacts', () => {
      it('should set the given argument as the list of contacts', done => {
        const contacts = [
          'Contact A',
          'Contact B',
        ];

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setContacts(contacts);
          expect(viewModel.getContacts()).toBe(contacts);

          done();
        });
      });
    });

    describe('#setCurrencies', () => {
      it('should set the given argument as the list of currencies', done => {
        const currencies = {
          data: [],
          error: 'Error',
          loading: true,
        };

        const payment = {
          data: {
            amount: {},
          },
          error: null,
          loading: false,
        };

        mockState({ currencies, payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setCurrencies(['Currency A']);

          expect(viewModel.state.currencies).toEqual({
            data: ['Currency A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setCurrenciesError', () => {
      it('should mark the currencies as failed with the given error', done => {
        const currencies = {
          data: ['Currency A'],
          error: null,
          loading: true,
        };

        mockState({ currencies });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setCurrenciesError('Error');

          expect(viewModel.state.currencies).toEqual({
            data: ['Currency A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setCurrenciesLoading', () => {
      it('should update the loading flag of the currencies with the given argument', done => {
        const currencies = {
          data: ['Currency A'],
          error: 'Error',
          loading: false,
        };

        mockState({ currencies });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setCurrenciesLoading(true);

          expect(viewModel.state.currencies).toEqual({
            data: ['Currency A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setDebitAccounts', () => {
      it('should set the given argument as the list of debit accounts', done => {
        const debitAccounts = {
          data: [],
          error: 'Error',
          loading: true,
        };

        mockState({ debitAccounts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setDebitAccounts(['Account A']);

          expect(viewModel.state.debitAccounts).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setDebitAccountsError', () => {
      it('should mark the debit accounts as failed with the given error', done => {
        const debitAccounts = {
          data: ['Account A'],
          error: null,
          loading: true,
        };

        mockState({ debitAccounts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setDebitAccountsError('Error');

          expect(viewModel.state.debitAccounts).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setDebitAccountsLoading', () => {
      it('should update the loading flag of the debit accounts with the given argument', done => {
        const debitAccounts = {
          data: ['Account A'],
          error: 'Error',
          loading: false,
        };

        mockState({ debitAccounts });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setDebitAccountsLoading(true);

          expect(viewModel.state.debitAccounts).toEqual({
            data: ['Account A'],
            error: 'Error',
            loading: true,
          });

          done();
        });
      });
    });

    describe('#setPayment', () => {
      it('should set the given object as the payment state', done => {
        const viewModel = createViewModel();

        viewModel.fetch()
          .then(() => {
            viewModel.setPayment({ test: 'ok' });

            expect(viewModel.state.payment).toEqual({
              data: { test: 'ok' },
              error: null,
              loading: false,
            });

            done();
          })
          .catch(done.fail);
      });
    });

    describe('#setPaymentError', () => {
      it('should mark the payment as failed with the given error', done => {
        const payment = {
          error: null,
          loading: true,
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setPaymentError('Error');

          expect(viewModel.state.payment).toEqual(jasmine.objectContaining({
            error: 'Error',
            loading: true,
          }));

          done();
        });
      });
    });

    describe('#setPaymentLoading', () => {
      it('should update the loading flag of the payment with the given argument', done => {
        const payment = {
          loading: false,
          data: {},
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          viewModel.setPaymentLoading(true);
          expect(viewModel.state.payment.loading).toBe(true);
          done();
        });
      });
    });

    describe('#setSelectedBeneficiary', () => {
      it('should set the given account as the selected beneficiary', done => {
        const payment = {
          data: {},
        };

        mockState({ payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          const beneficiary = {};

          viewModel.setSelectedBeneficiary(beneficiary);

          expect(viewModel.state.payment.data.beneficiary).toBe(beneficiary);

          done();
        });
      });
    });

    describe('#setSelectedDebitAccount', () => {
      it('should set the given account as the selected debit account', done => {
        const currencies = {
          data: null,
          error: null,
          loading: false,
        };

        const payment = {
          data: {
            amount: {},
          },
        };

        mockState({ currencies, payment });

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          const debitAccount = {};

          viewModel.setSelectedDebitAccount(debitAccount);

          expect(viewModel.state.payment.data.debitAccount).toBe(debitAccount);

          done();
        });
      });
    });

    describe('#fetch', () => {
      it('should read the state from the storage', done => {
        const state = {};

        mockState(state);

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.state).toBe(state);
          done();
        });
      });
    });

    describe('#save', () => {
      it('should save the current state to the storage', done => {
        spyOn(bbStorage, 'setItem');

        mockState({});

        const viewModel = createViewModel();

        viewModel.fetch()
          .then(() => viewModel.save())
          .then(() => {
            expect(bbStorage.setItem).toHaveBeenCalledWith('bb.payment.payment', viewModel.state);
            done();
          });
      });
    });
  });

  describe('Allowed currencies', () => {
    it('should be update when the list of all currencies is changed', done => {
      const currencies = {
        data: [],
        error: 'Error',
        loading: true,
      };

      const payment = {
        data: {
          amount: {},
        },
        error: null,
        loading: false,
      };

      mockState({ currencies, payment });

      const viewModel = createViewModel();

      viewModel.fetch().then(() => {
        viewModel.setCurrencies([
          { name: 'USD' },
        ]);

        expect(viewModel.state.allowedCurrencies).toEqual([
          { name: 'EUR' },
          { name: 'USD' },
        ]);

        done();
      });
    });

    it('should contain the currency of the selected debit account', done => {
      const currencies = {
        data: [],
        error: 'Error',
        loading: true,
      };

      const payment = {
        data: {
          amount: {},
        },
        error: null,
        loading: false,
      };

      mockState({ currencies, payment });

      const viewModel = createViewModel();

      viewModel.fetch().then(() => {
        viewModel.setCurrencies([
          { name: 'GBP' },
          { name: 'USD' },
        ]);

        viewModel.setSelectedDebitAccount({
          crossCurrencyAllowed: true,
          currency: 'RUB',
        });

        expect(viewModel.state.allowedCurrencies).toEqual([
          { name: 'EUR' },
          { name: 'RUB' },
          { name: 'GBP' },
          { name: 'USD' },
        ]);

        done();
      });
    });

    it('should contain only the currency of the selected debit account, if cross-currency transfers are not allowed', done => {
      const currencies = {
        data: [],
        error: 'Error',
        loading: true,
      };

      const payment = {
        data: {
          amount: {},
        },
        error: null,
        loading: false,
      };

      mockState({ currencies, payment });

      const viewModel = createViewModel();

      viewModel.fetch().then(() => {
        viewModel.setCurrencies([
          { name: 'GBP' },
          { name: 'USD' },
        ]);

        viewModel.setSelectedDebitAccount({
          crossCurrencyAllowed: false,
          currency: 'RUB',
        });

        expect(viewModel.state.allowedCurrencies).toEqual([
          { name: 'RUB' },
        ]);

        done();
      });
    });
  });

  describe('Payment currency', () => {
    it('should be set to the debit account currency', done => {
      const viewModel = createViewModel();

      const currencies = {
        data: [],
      };

      const payment = {
        data: {
          amount: {
            currency: 'GBP',
            value: null,
          },
        },
        error: null,
        loading: false,
      };

      mockState({ currencies, payment });

      viewModel.fetch().then(() => {
        viewModel.setSelectedDebitAccount({
          currency: 'USD',
        });

        expect(viewModel.state.payment.data.amount.currency).toBe('USD');

        done();
      });
    });
  });

  describe('State', () => {
    it('should be initialized with default value', () => {
      const viewModel = createViewModel();

      expect(viewModel.state).toEqual(jasmine.objectContaining({
        allowedCurrencies: [
          { name: 'EUR' },
        ],

        contacts: null,

        currencies: {
          error: null,
          loading: false,
          data: null,
        },

        beneficiaries: {
          error: null,
          loading: false,
          data: null,
        },

        debitAccounts: {
          error: null,
          loading: false,
          data: null,
        },

        payment: {
          data: null,
          error: null,
          loading: false,
        },

        saveContact: false,
      }));
    });

    it('should keep default state if there is no state in storage', done => {
      mockState(null);

      const viewModel = createViewModel();
      const initialState = viewModel.state;

      viewModel.fetch()
        .then(() => {
          expect(viewModel.state).toBe(initialState);
          done();
        });
    });
  });
});
