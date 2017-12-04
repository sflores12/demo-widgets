import SharedApi from './shared-api';

describe('widget-bbm-initiate-payment-ng::shared-api', () => {
  const widget = jasmine.createSpyObj('widget', ['getBooleanPreference', 'getStringPreference']);

  const model = {
    createContact: () => Promise.resolve(),
    createPaymentOrder: () => Promise.resolve(),
    getPaymentPreferences: () => ({}),
  };

  const viewModel = {
    getPayment: () => ({
      amount: { currency: 'EUR', value: 100 },
      beneficiary: { id: 'account-a' },
      debitAccount: { id: 'account-b' },
      description: 'Test',
      schedule: {
        transferFrequency: 'ONCE',
        startDate: '2015-05-15T14:00:00Z',
        end: 'NEVER',
        every: 1,
        repeat: 5,
      },
      urgent: false,
    }),
    getSaveContact: () => {},
    getSelectedBeneficiary: () => {},
    setPaymentError: () => {},
    setPaymentLoading: () => {},
  };

  const bus = {
    publish: () => {},
    subscribe: () => {},
  };

  const hooks = {
    processPaymentPayload: payload => payload,
  };

  const getApi = () => SharedApi(widget, model, viewModel, bus, hooks, Promise);

  it('should expose preferences', () => {
    widget.getBooleanPreference.and.callFake(name => name === 'bb.payment.urgent' || name === 'bb.payment.review.step');
    widget.getStringPreference.and.returnValue('test');

    const { preferences } = getApi();

    expect(preferences).toBeNonEmptyObject()

    expect(preferences.urgent).toBeTrue();
    expect(preferences.recurring).toBeFalse();
    expect(preferences.showPin).toBeFalse();
    expect(preferences.reviewStep).toBeTrue();
    expect(preferences.descriptionRegex).toEqual('test');
  });

  describe('#isUrgentPaymentAllowed', () => {
    it('should return true, if urgent payment is allowed', () => {
      const api = getApi();

      const payment = {
        debitAccountIdentification: {
          identification: 'account-b',
          scheme: 'ID'
        },
        creditAccountIdentification: {
          identification: 'account-a',
          scheme: 'ID'
        },
        schedule: {
          startDate: new Date(),
          transferFrequency: 'ONCE',
        },
        debitAccount: {
          urgentTransferAllowed: true,
        },
        amount: 100,
        currency: 'EUR',
        description: 'Test',
        date: '2015-05-15T14:00:00Z',
        paymentMode: 'SINGLE',
        urgent: false,
      };

       expect(api.isUrgentPaymentAllowed(payment)).toBe(true);
    });

    it('should return false, if start date is in future', () => {
      const api = getApi();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const payment = {
        debitAccountIdentification: {
          identification: 'account-b',
          scheme: 'ID'
        },
        creditAccountIdentification: {
          identification: 'account-a',
          scheme: 'ID'
        },
        schedule: {
          startDate: tomorrow,
          transferFrequency: 'ONCE',
        },
        debitAccount: {
          urgentTransferAllowed: true,
        },
        amount: 100,
        currency: 'EUR',
        description: 'Test',
        date: '2015-05-15T14:00:00Z',
        paymentMode: 'SINGLE',
        urgent: false,
      };

      expect(api.isUrgentPaymentAllowed(payment)).toBe(false);
    });

    it('should return false, if schedule transfer frequency is other than ONCE', () => {
      const api = getApi();
      const payment = {
        debitAccountIdentification: {
          identification: 'account-b',
          scheme: 'ID'
        },
        creditAccountIdentification: {
          identification: 'account-a',
          scheme: 'ID'
        },
        schedule: {
          startDate: new Date(),
          transferFrequency: 'DAILY',
        },
        debitAccount: {
          urgentTransferAllowed: true,
        },
        amount: 100,
        currency: 'EUR',
        description: 'Test',
        date: '2015-05-15T14:00:00Z',
        paymentMode: 'SINGLE',
        urgent: false,
      };

      expect(api.isUrgentPaymentAllowed(payment)).toBe(false);
    });

    it('should return false, if beneficiary doesn\'t allow urgent transfers', () => {
      const api = getApi();
      const payment = {
        debitAccountIdentification: {
          identification: 'account-b',
          scheme: 'ID'
        },
        creditAccountIdentification: {
          identification: 'account-a',
          scheme: 'ID'
        },
        schedule: {
          startDate: new Date(),
          transferFrequency: 'ONCE',
        },
        debitAccount: {
          urgentTransferAllowed: false,
        },
        amount: 100,
        currency: 'EUR',
        description: 'Test',
        date: '2015-05-15T14:00:00Z',
        paymentMode: 'SINGLE',
        urgent: false,
      };

      expect(api.isUrgentPaymentAllowed(payment)).toBe(false);
    });
  });

  describe('#makePayment', () => {
    it('should make a payment', done => {
      const api = getApi();

      spyOn(model, 'createPaymentOrder').and.callThrough();

      api.makePayment()
        .then(() => {
          expect(model.createPaymentOrder).toHaveBeenCalledWith({
            debtorAccount: {
              arrangementId: 'account-b',
              identification: {
                schemeName: 'ID',
                identification: 'account-b',
              },
              name: undefined,
            },
            requestedExecutionDate: '2015-05-15T14:00:00Z',
            paymentMode: 'SINGLE',
            creditTransferTransactionInformation: [{
              instructedAmount: {
                amount: 100,
                currencyCode: 'EUR',
              },
              creditor: { name: undefined },
              creditorAccount: {
                identification: {
                  identification: 'account-a',
                  schemeName: 'ID',
                },
              },
              remittanceInformation: 'Test',
            }],
          });
        })
        .then(done)
        .catch(done.fail);
    });

    it('should set loading state during the payment', done => {
      const api = getApi();

      spyOn(model, 'createPaymentOrder').and.callThrough();

      spyOn(viewModel, 'setPaymentError');
      spyOn(viewModel, 'setPaymentLoading');

      api.makePayment()
        .then(() => {
          expect(viewModel.setPaymentError).toHaveBeenCalledWith(null);
          expect(viewModel.setPaymentLoading).toHaveBeenCalledWith(false);

          done();
        })
        .catch(done.fail);

      expect(viewModel.setPaymentLoading).toHaveBeenCalledWith(true);
    });

    it('should publish corresponding events', done => {
      const api = getApi();

      spyOn(model, 'createPaymentOrder').and.callThrough();
      spyOn(bus, 'publish');

      api.makePayment()
        .then(() => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.done');
          done();
        })
        .catch(done.fail);

      expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.started');
    });

    it('should fail when payment is failed', done => {
      const api = getApi();

      spyOn(model, 'createPaymentOrder').and.returnValue(Promise.reject('Error'));
      spyOn(bus, 'publish');

      api.makePayment()
        .then(done.fail, () => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.payment.failed', 'Error');
          done();
        })
        .catch(done.fail);
    });

    it('should set error state when payment is failed', done => {
      const api = getApi();

      spyOn(model, 'createPaymentOrder').and.returnValue(Promise.reject('Error'));
      spyOn(viewModel, 'setPaymentError');

      api.makePayment()
        .then(done.fail, () => {
          expect(viewModel.setPaymentError).toHaveBeenCalledWith('Error');
          done();
        })
        .catch(done.fail);
    });

    describe('Recurring payment', () => {
      it('should add schedule property to the payload', done => {
        const api = getApi();

        spyOn(viewModel, 'getPayment').and.returnValue({
          amount: { currency: 'EUR', value: 100 },
          beneficiary: { id: 'account-a' },
          debitAccount: { id: 'account-b' },
          description: 'Test',
          schedule: {
            transferFrequency: 'DAILY',
            startDate: '2015-05-15T14:00:00Z',
            end: 'NEVER',
            every: 1,
            repeat: 5,
          },
          urgent: false,
        });

        spyOn(model, 'createPaymentOrder').and.callThrough();

        api.makePayment()
          .then(() => {
            expect(model.createPaymentOrder).toHaveBeenCalledWith({
              debtorAccount: {
                arrangementId: 'account-b',
                identification: {
                  schemeName: 'ID',
                  identification: 'account-b'
                },
                name: undefined
              },
              requestedExecutionDate: '2015-05-15T14:00:00Z',
              paymentMode: 'RECURRING',
              creditTransferTransactionInformation: [{
                instructedAmount: {
                  amount: 100,
                  currencyCode: 'EUR'
                },
                creditor: { name: undefined },
                creditorAccount: {
                  identification: {
                    identification: 'account-a',
                    schemeName: 'ID'
                  }
                },
                remittanceInformation: 'Test',
              }],
              schedule: {
                every: 1,
                startDate: '2015-05-15T14:00:00Z',
                transferFrequency: 'DAILY'
              }
            });
          })
          .then(done)
          .catch(done.fail);
      });

      it('should have `schedule.endDate` property if the payment is until a date', done => {
        const api = getApi();

        spyOn(viewModel, 'getPayment').and.returnValue({
          amount: { currency: 'EUR', value: 100 },
          beneficiary: { id: 'account-a' },
          debitAccount: { id: 'account-b' },
          description: 'Test',
          schedule: {
            transferFrequency: 'DAILY',
            startDate: '2015-05-15T14:00:00Z',
            endDate: '2015-10-15T14:00:00Z',
            end: 'ON',
            every: 1,
            repeat: 5,
          },
          urgent: false,
        });

        spyOn(model, 'createPaymentOrder').and.callThrough();

        api.makePayment()
          .then(() => {
            expect(model.createPaymentOrder).toHaveBeenCalledWith({
              debtorAccount: {
                arrangementId: 'account-b',
                identification: {
                  schemeName: 'ID',
                  identification: 'account-b'
                },
                name: undefined
              },
              requestedExecutionDate: '2015-05-15T14:00:00Z',
              paymentMode: 'RECURRING',
              creditTransferTransactionInformation: [{
                instructedAmount: {
                  amount: 100,
                  currencyCode: 'EUR'
                },
                creditor: { name: undefined },
                creditorAccount: {
                  identification: {
                    identification: 'account-a',
                    schemeName: 'ID'
                  }
                },
                remittanceInformation: 'Test',
              }],
              schedule: {
                every: 1,
                startDate: '2015-05-15T14:00:00Z',
                transferFrequency: 'DAILY',
                endDate: '2015-10-15T14:00:00Z'
              }
            });
          })
          .then(done)
          .catch(done.fail);
      });

      it('should have `schedule.repeat` property if the payment is supposed to happen X times', done => {
        const api = getApi();

        spyOn(viewModel, 'getPayment').and.returnValue({
          amount: { currency: 'EUR', value: 100 },
          beneficiary: { id: 'account-a' },
          debitAccount: { id: 'account-b' },
          description: 'Test',
          schedule: {
            transferFrequency: 'DAILY',
            startDate: '2015-05-15T14:00:00Z',
            endDate: '2015-10-15T14:00:00Z',
            end: 'AFTER',
            every: 1,
            repeat: 5,
          },
          urgent: false,
        });

        spyOn(model, 'createPaymentOrder').and.callThrough();

        api.makePayment()
          .then(() => {
            expect(model.createPaymentOrder).toHaveBeenCalledWith({
              debtorAccount: {
                arrangementId: 'account-b',
                identification: {
                  schemeName: 'ID',
                  identification: 'account-b'
                },
                name: undefined
              },
              requestedExecutionDate: '2015-05-15T14:00:00Z',
              paymentMode: 'RECURRING',
              creditTransferTransactionInformation: [{
                instructedAmount: {
                  amount: 100,
                  currencyCode: 'EUR'
                },
                creditor: { name: undefined },
                creditorAccount: {
                  identification: {
                    identification: 'account-a',
                    schemeName: 'ID'
                  }
                },
                remittanceInformation: 'Test',
              }],
              schedule: {
                every: 1,
                startDate: '2015-05-15T14:00:00Z',
                transferFrequency: 'DAILY',
                repeat: 5
              }
            });
          })
          .then(done)
          .catch(done.fail);
      });
    });
  });

  describe('#saveContactIfNeeded', () => {
    it('should be ignored, if contact is not supposed to be saved', () => {
      const api = getApi();

      const contact = { name: 'John Smith' };

      spyOn(model, 'createContact').and.callThrough();

      spyOn(viewModel, 'getSaveContact').and.returnValue(false);
      spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(contact);

      api.saveContactIfNeeded();

      expect(model.createContact).not.toHaveBeenCalled();
    });

    it('should save the beneficiary as a new contact, if it was supposed to be saved', () => {
      const api = getApi();

      const contact = { name: 'John Smith', identifier: '123' };

      spyOn(model, 'createContact').and.callThrough();

      spyOn(viewModel, 'getSaveContact').and.returnValue(true);
      spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(contact);

      api.saveContactIfNeeded();

      expect(model.createContact).toHaveBeenCalledWith({
        name: 'John Smith',
        accounts: [{
          IBAN: '123',
        }],
      });
    });

    it('should publish corresponding events while saving', done => {
      const api = getApi();

      const contact = { name: 'John Smith' };

      spyOn(bus, 'publish');

      spyOn(model, 'createContact').and.callThrough();

      spyOn(viewModel, 'getSaveContact').and.returnValue(true);
      spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(contact);

      api.saveContactIfNeeded();

      expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.start');

      setTimeout(() => {
        expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.done');
        done();
      }, 0);
    });

    it('should publish error event if the request to save a contact failed', done => {
      const api = getApi();

      const contact = { name: 'John Smith' };

      spyOn(bus, 'publish');

      spyOn(model, 'createContact').and.returnValue(Promise.reject('Error'));

      spyOn(viewModel, 'getSaveContact').and.returnValue(true);
      spyOn(viewModel, 'getSelectedBeneficiary').and.returnValue(contact);

      api.saveContactIfNeeded();

      setTimeout(() => {
        expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.failed', {
          error: 'Error',
        });
        done();
      }, 0);
    });
  });

  describe('#makePaymentWithAuthorization', () => {
    it('should show the pin verification screen if it is required', done => {
      spyOn(bus, 'publish');
      widget.getBooleanPreference.and.returnValue(true);

      const api = getApi();

      api.makePaymentWithAuthorization();

      setTimeout(() => {
        expect(bus.publish).toHaveBeenCalledWith('bb.action.pin.show');
        done();
      }, 0);
    });

    it('should make a payment once the pin verification is successful', done => {
      let handler;

      spyOn(bus, 'subscribe').and.callFake((name, fn) => {
        if (name === 'bb.event.pin.confirmation.success') {
          handler = fn;
        }
      });

      spyOn(model, 'createPaymentOrder').and.callThrough();
      widget.getBooleanPreference.and.returnValue(true);

      const api = getApi();

      api.makePaymentWithAuthorization()
        .then(() => {
          expect(model.createPaymentOrder).toHaveBeenCalled();
          done();
        })
        .catch(done.fail);

      setTimeout(() => {
        handler();
      }, 0);
    });
  });
});

