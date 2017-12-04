export default params => ({
  initialLoading: true,
  error: null,
  paymentOrders: {
    rawData: null,
    data: null,
    loading: false,
    loadedAll: false,
    totalCount: 0,
    requestParams: {
      from: 0,
      size: params.pageSize,
    },
  },
});
