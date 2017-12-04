import extHelpers from './helpers';

describe('helpers', function() {
  const obj = {
    publish: () => {},
  };
  const ctrl = {
    storePayment: () => {},
    makePayment: () => {},
    paymentPreferences: { reviewStep: true },
    payment: {},
  };
  const paymentForm = {
    $setUntouched: () => {},
  };
  let helper;

  beforeEach(() => {
    helper = extHelpers(obj);
  });

  describe('onPaymentContinue', () => {
    it('should store payment on review step', () => {
      expect(helper.onSelectAccount).toBeFunction();
    });
  });

  describe('hasExternalAccounts', () => {
    it('should return true, if there is at least one external account', () => {
      expect(helper.hasExternalAccounts([
        { external: true },
      ])).toBe(true);

      expect(helper.hasExternalAccounts([
        { external: false },
        { external: false },
        { external: true },
      ])).toBe(true);
    });

    it('should return false, if there is no external accounts', () => {
      expect(helper.hasExternalAccounts()).toBe(false);

      expect(helper.hasExternalAccounts([
        {},
        {},
        {},
      ])).toBe(false);

      expect(helper.hasExternalAccounts([
        { external: false },
        { external: false },
        { external: false },
      ])).toBe(false);
    });

    it('should return false, if accounts is undefined', () => {
      expect(helper.hasExternalAccounts(undefined)).toBe(false);
    });

    it('should return false, if accounts is null', () => {
      expect(helper.hasExternalAccounts(null)).toBe(false);
    });
  });
});
