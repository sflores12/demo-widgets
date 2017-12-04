import FormController from './form.controller';

describe('widget-bbm-payment-ng::FormController', () => {
  const widget = {
    getId: () => '123',
  };

  const model = {
    getAccountsFrom: () => Promise.resolve([]),
    getAccountsTo: () => Promise.resolve([]),
    getCurrencies: () => Promise.resolve([]),
    getExternals: () => Promise.resolve([]),
    getPaymentPreferences: () => ({}),
  };

  const viewModel = {
    getBeneficiaries: () => null,
    getContacts: () => null,
    getCurrencies: () => null,
    getDebitAccounts: () => null,
    getInitialPayment: () => ({}),
    getPayment: () => ({}),
    getSelectedBeneficiary: () => {},
    getSelectedDebitAccount: () => {},
    isBeneficiaryComplete: () => {},
    isBeneficiaryExternal: () => {},
    resetContacts: () => {},
    resetSelectedBeneficiary: () => {},
    setBeneficiaries: () => {},
    setBeneficiariesError: () => {},
    setBeneficiariesLoading: () => {},
    setContacts: () => {},
    setCurrencies: () => {},
    setCurrenciesError: () => {},
    setCurrenciesLoading: () => {},
    setDebitAccounts: () => {},
    setDebitAccountsError: () => {},
    setDebitAccountsLoading: () => {},
    setPayment: () => {},
    setSelectedBeneficiary: () => {},
    setSelectedDebitAccount: () => {},
    fetch: () => Promise.resolve(),
    save: () => Promise.resolve(),
  };

  const sharedApi = {
    isUrgentPaymentAllowed: () => {},
    makePayment: () => Promise.resolve({}),
    makePaymentWithAuthorization: () => Promise.resolve(),
    saveContactIfNeeded: () => Promise.resolve({}),
  };

  const bbIntent = {
    create: () => () => {},
    handle: () => {},
    init: () => {},
  };

  const bus = {
    publish: () => {},
    subscribe: () => {},
  };

  const hooks = {
    processBeneficiaries: (creditAccounts, contacts) => [
      ...creditAccounts,
      ...contacts,
    ],
    processDebitAccounts: debitAccounts => debitAccounts,
    processInitialPaymentState: payment => payment,
  };

  const createController = () => new FormController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus,
    hooks,
    Promise
  );

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => {}
    ));
  };

  const wait = delay => new Promise(resolve => setTimeout(resolve, delay || 0));

  describe('Methods', () => {
    describe('#$onInit', () => {
      it('should prepare the view model', done => {
        const ctrl = createController();

        spyOn(viewModel, 'fetch').and.callThrough();

        ctrl.$onInit()
          .then(() => {
            expect(viewModel.fetch).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should initialize the payment state', done => {
        const ctrl = createController();

        spyOn(hooks, 'processInitialPaymentState').and.callFake(payment => (
          Object.assign(payment, { test: 'ok' }))
        );

        spyOn(viewModel, 'getInitialPayment').and.returnValue({
          amount: 100,
        });

        spyOn(viewModel, 'getPayment').and.returnValue(null);

        spyOn(viewModel, 'setPayment');

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            expect(viewModel.setPayment).toHaveBeenCalledWith({
              amount: 100,
              test: 'ok',
            });
            done();
          })
          .catch(done.fail);
      });

      it('should load beneficiaries if they are not available in the view model', done => {
        const ctrl = createController();

        spyOn(model, 'getAccountsTo').and.returnValue(Promise.resolve([
          'Account A',
          'Account B',
        ]));

        spyOn(model, 'getExternals').and.returnValue(Promise.resolve([
          'Contact A',
          'Contact B',
        ]));

        spyOn(viewModel, 'setBeneficiaries');

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            expect(viewModel.setBeneficiaries).toHaveBeenCalledWith([
              'Account A',
              'Account B',
              'Contact A',
              'Contact B',
            ]);

            done();
          })
          .catch(done.fail);
      });

      it('should load debit accounts if they are not available in the view model', done => {
        const ctrl = createController();

        spyOn(model, 'getAccountsFrom').and.returnValue(Promise.resolve([
          'Account A',
          'Account B',
        ]));

        spyOn(viewModel, 'setDebitAccounts');

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            expect(viewModel.setDebitAccounts).toHaveBeenCalledWith([
              'Account A',
              'Account B',
            ]);

            done();
          })
          .catch(done.fail);
      });

      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        const ctrl = createController();

        spyOn(bus, 'publish');

        ctrl.$onInit()
          .then(() => {
            /* event cxp.item.loaded will be deprecated */
            expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
            expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#canSaveContact', () => {
      it('should return true, if the beneficiary is complete and not an existing external account', done => {
        const ctrl = createController();

        spyOn(viewModel, 'isBeneficiaryComplete').and.returnValue(true);
        spyOn(viewModel, 'isBeneficiaryExternal').and.returnValue(true);

        spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue({
          external: true,
          identifier: 'FI2112345600000784',
          name: 'Account A',
        });

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.canSaveContact()).toBe(true);
            done();
          })
          .catch(done.fail);
      });

      it('should return false, if the beneficiary is not complete', done => {
        const ctrl = createController();

        spyOn(viewModel, 'isBeneficiaryComplete').and.returnValue(false);
        spyOn(viewModel, 'isBeneficiaryExternal').and.returnValue(true);

        spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue({
          name: 'Account A',
        });

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.canSaveContact()).toBe(false);
            done();
          })
          .catch(done.fail);
      });

      it('should return false, if the beneficiary is an internal account', done => {
        const ctrl = createController();

        spyOn(viewModel, 'isBeneficiaryComplete').and.returnValue(true);
        spyOn(viewModel, 'isBeneficiaryExternal').and.returnValue(false);

        spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue({
          id: 'account-a',
          identifier: 'FI2112345600000784',
          name: 'Account A',
        });

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.canSaveContact()).toBe(false);
            done();
          })
          .catch(done.fail);
      });

      it('should return false, if the beneficiary already exists', done => {
        const ctrl = createController();

        spyOn(viewModel, 'isBeneficiaryComplete').and.returnValue(true);
        spyOn(viewModel, 'isBeneficiaryExternal').and.returnValue(true);

        spyOn(viewModel, 'getContacts').and.returnValue([
          {
            id: 'account-a',
            identifier: 'FI2112345600000784',
            name: 'Account A',
          },
          {
            id: 'account-b',
            identifier: 'FI2112345600000784',
            name: 'Account B',
          }
        ]);

        spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue({
          id: 'account-a',
          identifier: 'FI2112345600000784',
          name: 'Account A',
        });

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.canSaveContact()).toBe(false);
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#resetPayment', () => {
      it('should reset the payment to the initial state', done => {
        const ctrl = createController();

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            spyOn(hooks, 'processInitialPaymentState').and.callFake(payment => (
              Object.assign(payment, { test: 'ok' }))
            );

            spyOn(viewModel, 'getInitialPayment').and.returnValue({
              amount: 100,
            });

            spyOn(viewModel, 'setPayment');

            ctrl.resetPayment();

            expect(viewModel.setPayment).toHaveBeenCalledWith({
              amount: 100,
              test: 'ok',
            });

            done();
          })
          .catch(done.fail);
      });
    });

    describe('#selectBeneficiary', () => {
      it('should call the "view.payment.account.select" intent with the corresponding type', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        mockIntents({
          'view.payment.account.select': intent,
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectBeneficiary())
          .then(() => {
            expect(intent).toHaveBeenCalledWith({ type: 'credit' });
            done();
          })
          .catch(done.fail);
      });

      it('should save the view model', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        mockIntents({
          'view.payment.account.select': intent,
        });

        spyOn(viewModel, 'save').and.callThrough();

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectBeneficiary())
          .then(() => {
            expect(viewModel.save).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should publish corresponding events when the beneficiaries loading status changes', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        spyOn(bus, 'publish');

        mockIntents({
          'view.payment.account.select': intent,
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => {
            ctrl.selectBeneficiary();
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.load.start', {
              type: 'credit',
            });
          })
          .then(() => wait())
          .then(() => {
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.load.done', {
              type: 'credit',
            });
            done();
          })
          .catch(done.fail);
      });

      it('should publish an error event in case of error', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        spyOn(bus, 'publish');

        mockIntents({
          'view.payment.account.select': intent,
        });

        spyOn(model, 'getExternals').and.returnValue(Promise.reject('Test error'));

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectBeneficiary())
          .then(done.fail)
          .catch(() => {
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.failed', {
              error: 'Test error',
              type: 'credit',
            });
            done();
          });
      });
    });

    describe('#selectDebitAccount', () => {
      it('should call the "view.payment.account.select" intent with the corresponding type', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        mockIntents({
          'view.payment.account.select': intent,
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectDebitAccount())
          .then(() => {
            expect(intent).toHaveBeenCalledWith({ type: 'debit' });
            done();
          })
          .catch(done.fail);
      });

      it('should save the view model before calling the intent', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        mockIntents({
          'view.payment.account.select': intent,
        });

        spyOn(viewModel, 'save').and.callThrough();

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectDebitAccount())
          .then(() => {
            expect(viewModel.save).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should publish corresponding events when the beneficiaries loading status changes', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        spyOn(bus, 'publish');

        mockIntents({
          'view.payment.account.select': intent,
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => {
            ctrl.selectDebitAccount();
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.load.start', {
              type: 'debit',
            });
          })
          .then(() => wait())
          .then(() => {
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.load.done', {
              type: 'debit',
            });
            done();
          })
          .catch(done.fail);
      });

      it('should publish an error event in case of error', done => {
        const intent = jasmine.createSpy('view.payment.account.select');

        spyOn(bus, 'publish');

        mockIntents({
          'view.payment.account.select': intent,
        });

        spyOn(model, 'getAccountsFrom').and.returnValue(Promise.reject('Test error'));

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectDebitAccount())
          .then(done.fail)
          .catch(() => {
            expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.selectAccount.failed', {
              error: 'Test error',
              type: 'debit',
            });
            done();
          });
      });
    });

    describe('#selectSchedule', () => {
      it('should call the "view.payment.schedule.select" intent', done => {
        const intent = jasmine.createSpy('view.payment.schedule.select');

        mockIntents({
          'view.payment.schedule.select': intent,
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => ctrl.selectSchedule())
          .then(() => {
            expect(intent).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#setUrgentPayment', () => {
      it('should update urgent payment value', done => {
        const ctrl = createController();

        viewModel.state = {
          payment: {
            data: {},
          },
        };

        ctrl.$onInit()
          .then(() => {
            ctrl.setUrgentPayment(true);
            expect(viewModel.state.payment.data.urgent).toBe(true);

            ctrl.setUrgentPayment(false);
            expect(viewModel.state.payment.data.urgent).toBe(false);

            done();
          })
          .catch(done.fail);
      });
    });

    describe('#submitPayment', () => {
      describe('The widget has the review step', () => {
        it('should show the payment review', done => {
          const intent = jasmine.createSpy('view.payment.review.show');

          spyOn(model, 'getPaymentPreferences').and.returnValue({
            reviewStep: true,
          });

          mockIntents({
            'view.payment.review.show': intent,
          });

          const ctrl = createController();

          ctrl.$onInit()
            .then(() => ctrl.submitPayment())
            .then(() => {
              expect(intent).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });

        it('should save the view model before calling the intent', done => {
          const intent = jasmine.createSpy('view.payment.review.show');

          spyOn(model, 'getPaymentPreferences').and.returnValue({
            reviewStep: true,
          });

          mockIntents({
            'view.payment.review.show': intent,
          });

          spyOn(viewModel, 'save').and.callThrough();

          const ctrl = createController();

          ctrl.$onInit()
            .then(() => ctrl.submitPayment())
            .then(() => {
              expect(viewModel.save).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });
      });

      describe('The widget doesn\'t have the review step', () => {
        it('should make a payment', done => {
          spyOn(model, 'getPaymentPreferences').and.returnValue({
            reviewStep: false,
          });

          spyOn(sharedApi, 'makePaymentWithAuthorization').and.callThrough();

          const ctrl = createController();

          ctrl.$onInit()
            .then(() => ctrl.submitPayment())
            .then(() => {
              expect(sharedApi.makePaymentWithAuthorization).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });

        it('should save the beneficiary as a contact if needed', done => {
          spyOn(model, 'getPaymentPreferences').and.returnValue({
            reviewStep: false,
          });

          spyOn(sharedApi, 'saveContactIfNeeded').and.callThrough();

          const ctrl = createController();

          ctrl.$onInit()
            .then(() => ctrl.submitPayment())
            .then(() => {
              expect(sharedApi.saveContactIfNeeded).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });

        it('should reset the form once the payment is done', done => {
          spyOn(model, 'getPaymentPreferences').and.returnValue({
            reviewStep: false,
          });

          const ctrl = createController();

          ctrl.$onInit()
            .then(() => wait())
            .then(() => {
              spyOn(hooks, 'processInitialPaymentState').and.callFake(payment => (
                Object.assign(payment, { test: 'ok' }))
              );

              spyOn(viewModel, 'getInitialPayment').and.returnValue({
                amount: 100,
              });

              spyOn(viewModel, 'setPayment');
            })
            .then(() => ctrl.submitPayment())
            .then(() => {
              expect(viewModel.setPayment).toHaveBeenCalledWith({
                amount: 100,
                test: 'ok',
              });

              done();
            })
            .catch(done.fail);
        });
      });
    });
  });

  describe('Properties', () => {
    describe('preferences', () => {
      it('should expose preferences', () => {
        const preferences = { key: 'value' };

        spyOn(model, 'getPaymentPreferences').and.returnValue(preferences);

        expect(createController().preferences).toEqual(preferences);
      });
    });
  });

  describe('Events', () => {
    describe('bb.event.contact.create.done', () => {
      it('should reload the list of beneficiaries', done => {
        let onContactCreate;

        spyOn(bus, 'subscribe').and.callFake((event, fn) => {
          if (event === 'bb.event.contact.create.done') {
            onContactCreate = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            spyOn(viewModel, 'setBeneficiaries');
            spyOn(viewModel, 'resetContacts');

            spyOn(model, 'getExternals').and.returnValue(Promise.resolve([
              'Contact A',
              'Contact B',
            ]));

            onContactCreate();

            expect(viewModel.resetContacts).toHaveBeenCalled();
          })
          .then(() => wait())
          .then(() => {
            expect(viewModel.setBeneficiaries).toHaveBeenCalledWith([
              'Contact A',
              'Contact B',
            ]);

            done();
          })
          .catch(done.fail);
      });
    });

    describe('bb.event.contact.delete.done', () => {
      it('should reload the list of beneficiaries', done => {
        let onContactCreate;

        spyOn(bus, 'subscribe').and.callFake((event, fn) => {
          if (event === 'bb.event.contact.delete.done') {
            onContactCreate = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            spyOn(viewModel, 'setBeneficiaries');

            spyOn(model, 'getExternals').and.returnValue(Promise.resolve([
              'Contact A',
              'Contact B',
            ]));

            onContactCreate();
          })
          .then(() => wait())
          .then(() => {
            expect(viewModel.setBeneficiaries).toHaveBeenCalledWith([
              'Contact A',
              'Contact B',
            ]);

            done();
          })
          .catch(done.fail);
      });
    });

    describe('bb.event.contact.update.done', () => {
      it('should reload the list of beneficiaries', done => {
        let onContactCreate;

        spyOn(bus, 'subscribe').and.callFake((event, fn) => {
          if (event === 'bb.event.contact.update.done') {
            onContactCreate = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            spyOn(viewModel, 'setBeneficiaries');

            spyOn(model, 'getExternals').and.returnValue(Promise.resolve([
              'Contact A',
              'Contact B',
            ]));

            onContactCreate();
          })
          .then(() => wait())
          .then(() => {
            expect(viewModel.setBeneficiaries).toHaveBeenCalledWith([
              'Contact A',
              'Contact B',
            ]);

            done();
          })
          .catch(done.fail);
      });
    });
  });

  describe('Intents', () => {
    describe('view.payment.account.select', () => {
      describe('Debit account', () => {
        it('should set the account returned by the intent as the payment debit account', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedAccount = { id: 'account-a' };
          const type = 'debit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'setSelectedDebitAccount');

              onAccountSelect({ selectedAccount, type });
            })
            .then(() => wait())
            .then(() => {
              expect(viewModel.setSelectedDebitAccount).toHaveBeenCalledWith(selectedAccount);
              done();
            })
            .catch(done.fail);
        });

        it('should reload the list of beneficiares', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedAccount = { id: 'account-a' };
          const type = 'debit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'getSelectedDebitAccount').and.returnValue(selectedAccount);

              spyOn(viewModel, 'setBeneficiaries');

              spyOn(model, 'getAccountsTo').and.returnValue(Promise.resolve([
                'Account A',
                'Account B',
              ]));

              onAccountSelect({ selectedAccount, type });
            })
            .then(() => wait())
            .then(() => {
              expect(model.getAccountsTo).toHaveBeenCalledWith('account-a');

              expect(viewModel.setBeneficiaries).toHaveBeenCalledWith([
                'Account A',
                'Account B',
              ]);

              done();
            })
            .catch(done.fail);
        });

        it('should reset the external beneficiary if external accounts are not allowed for the given debit account', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedBeneficiary = {
            external: true,
            id: 'account-a',
          };

          const selectedDebitAccount = {
            externalTransferAllowed: false,
            id: 'account-b',
          };

          const type = 'debit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(selectedBeneficiary);
              spyOn(viewModel, 'getSelectedDebitAccount').and.returnValue(selectedDebitAccount);

              spyOn(viewModel, 'resetSelectedBeneficiary');

              onAccountSelect({
                selectedAccount: selectedDebitAccount,
                type,
              });
            })
            .then(() => wait())
            .then(() => {
              expect(viewModel.resetSelectedBeneficiary).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });

        it('should reset the beneficiary if the debit account and beneficiary are the same', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedAccount = { id: 'account-a' };

          const type = 'debit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(selectedAccount);
              spyOn(viewModel, 'getSelectedDebitAccount').and.returnValue(selectedAccount);

              spyOn(viewModel, 'resetSelectedBeneficiary');

              onAccountSelect({ selectedAccount, type });
            })
            .then(() => wait())
            .then(() => {
              expect(viewModel.resetSelectedBeneficiary).toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });

        it('should not reset the beneficiary if it is allowed for the given debit account', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedBeneficiary = {
            external: true,
            id: 'account-a',
          };

          const selectedDebitAccount = {
            externalTransferAllowed: true,
            id: 'account-b',
          };

          const type = 'debit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(selectedBeneficiary);
              spyOn(viewModel, 'getSelectedDebitAccount').and.returnValue(selectedDebitAccount);

              spyOn(viewModel, 'setSelectedBeneficiary');

              onAccountSelect({
                selectedAccount: selectedDebitAccount,
                type,
              });
            })
            .then(() => wait())
            .then(() => {
              expect(viewModel.setSelectedBeneficiary).not.toHaveBeenCalled();
              done();
            })
            .catch(done.fail);
        });
      });

      describe('Credit account', () => {
        it('should set the account returned by the intent as the payment beneficiary account', done => {
          let onAccountSelect;

          spyOn(bbIntent, 'create').and.callFake((name, cb) => {
            if (name === 'view.payment.account.select') {
              onAccountSelect = cb;
            }
          });

          const ctrl = createController();

          const selectedAccount = { id: 'account-a' };
          const type = 'credit';

          ctrl.$onInit()
            .then(() => {
              spyOn(viewModel, 'setSelectedBeneficiary');

              onAccountSelect({ selectedAccount, type });
            })
            .then(() => wait())
            .then(() => {
              expect(viewModel.setSelectedBeneficiary).toHaveBeenCalledWith(selectedAccount);
              done();
            })
            .catch(done.fail);
        });
      });
    });

    describe('view.payment.form.show', () => {
      it('should reset the form', done => {
        let showFormIntentHandler;

        spyOn(bbIntent, 'handle').and.callFake((name, handler) => {
          if (name === 'view.payment.form.show') {
            showFormIntentHandler = handler;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => wait())
          .then(() => {
            spyOn(hooks, 'processInitialPaymentState').and.callFake(payment => (
              Object.assign(payment, { test: 'ok' }))
            );

            spyOn(viewModel, 'getInitialPayment').and.returnValue({
              amount: 100,
            });

            spyOn(viewModel, 'setPayment');

            showFormIntentHandler({ reset: true });
          })
          .then(() => {
            expect(viewModel.setPayment).toHaveBeenCalledWith({
              amount: 100,
              test: 'ok',
            });

            done();
          })
          .catch(done.fail);
      });
    });
  });
});
