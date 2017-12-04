import { findFilter } from './filter-helpers';

describe('filter-helpers', function() {

  describe('#findFilter', () => {

    describe('Given a simple filter condition', () => {
      const filter = {
        lt: [{ pathValue: ["transaction.amount"]}, 100]
      };

      it('should find transaction.amount value', () => {
        expect(findFilter(filter, "transaction.amount").value).toEqual(100);
      });

      it('should find transaction.amount operator', () => {
        expect(findFilter(filter, "transaction.amount").operator).toEqual('lt');
      });

      it('should not find transaction.creditDebitIndicator and return null', () => {
        expect(findFilter(filter, "transaction.creditDebitIndicator")).toBeNull();
      });
    });

    describe('Given a compound filter condition', () => {
      const filter = {
        and: [
          { eq: [{ pathValue: ["transaction.creditDebitIndicator"]},"CRDT"]},
          { gte: [{ pathValue: ["transaction.amount"]}, 100]}
        ],
      };

      it('should find transaction.amount value', () => {
        expect(findFilter(filter, "transaction.amount").value).toEqual(100);
      });

      it('should find transaction.amount operator', () => {
        expect(findFilter(filter, "transaction.amount").operator).toEqual('gte');
      });

      it('should find transaction.creditDebitIndicator value', () => {
        expect(findFilter(filter, "transaction.creditDebitIndicator").value).toEqual("CRDT");
      });

      it('should find transaction.creditDebitIndicator operator', () => {
        expect(findFilter(filter, "transaction.creditDebitIndicator").operator).toEqual("eq");
      });
    });


    describe('Given a complex compound filter condition', () => {
      const filter = {
        and: [
          { or: [
            { eq: [{ pathValue: ["transaction.creditDebitIndicator"]},"CRDT"] },
            { eq: [{ pathValue: ["transaction.currency"]},"EUR"] }
          ]},
          { gt: [{ pathValue: ["transaction.amount"]}, 100]}
        ],
      };

      it('should find transaction.amount value', () => {
        expect(findFilter(filter, "transaction.amount").value).toEqual(100);
      });

      it('should find transaction.amount operator', () => {
        expect(findFilter(filter, "transaction.amount").operator).toEqual('gt');
      });

      it('should find transaction.creditDebitIndicator value', () => {
        expect(findFilter(filter, "transaction.creditDebitIndicator").value).toEqual("CRDT");
      });

      it('should find transaction.creditDebitIndicator operator', () => {
        expect(findFilter(filter, "transaction.creditDebitIndicator").operator).toEqual("eq");
      });

      it('should find transaction.currency value', () => {
        expect(findFilter(filter, "transaction.currency").value).toEqual("EUR");
      });

      it('should find transaction.currency operator', () => {
        expect(findFilter(filter, "transaction.currency").operator).toEqual("eq");
      });

    });

  });

});
