import * as hooks from './default-hooks';

describe('widget-bbm-product-details-ng::default-hooks', () => {
  describe('processProductDetails', () => {
    it('should return given product', () => {
      const productDetails = {
        "id": "1234-5678-9014",
        "currency": "EUR",
        "amount": 1234,
        "name": "Product Name"
      };

      expect(hooks.processProductDetails(productDetails)).toEqual({
        "id": "1234-5678-9014",
        "currency": "EUR",
        "amount": 1234,
        "name": "Product Name"
      });
    });
  });
});
