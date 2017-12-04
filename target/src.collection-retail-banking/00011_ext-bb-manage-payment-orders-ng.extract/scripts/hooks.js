/* eslint-disable import/prefer-default-export */
import { Statuses } from './constants';

export const processPaymentOrders = (paymentOrders) =>
  paymentOrders
    .filter((paymentOrder) => Statuses.indexOf(paymentOrder.status) >= 0)
    .map(paymentOrder => Object.assign({}, paymentOrder,
      { transactionInformation: paymentOrder.creditTransferTransactionInformation[0] }
    ))
    .reduce((groupedByDate, paymentOrder) => {
      const datesObject = groupedByDate;
      // get only date part
      const bookingDateObj = new Date(paymentOrder.requestedExecutionDate);
      const date = bookingDateObj.toISOString().slice(0, 10);

      if (datesObject[date]) {
        let clearToAdd = true;

        datesObject[date].forEach((element) => {
          if (element.id === paymentOrder.id) {
            clearToAdd = false;
          }
        });

        if (clearToAdd) {
          datesObject[date].push(paymentOrder);
        }
      } else {
        datesObject[date] = [paymentOrder];
      }

      return datesObject;
    }, {});

export const processRequestParams = (params) => Object.assign({}, params, {
  orderBy: 'requestedExecutionDate',
});
