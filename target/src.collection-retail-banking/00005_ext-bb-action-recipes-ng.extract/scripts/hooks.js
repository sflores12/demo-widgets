import { CreditTransactionFilter, CREDIT_TRANSACTION_TYPE } from './recipes/credit-transaction';

export default {
  createRecipeFilter(specification, trigger, accounts) {
    switch (specification.type) {
      case CREDIT_TRANSACTION_TYPE:
        return new CreditTransactionFilter(trigger, accounts);
      default:
        return null;
    }
  },
};
