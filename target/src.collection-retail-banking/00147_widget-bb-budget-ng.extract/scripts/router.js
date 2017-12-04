export default (stateContainer) => {
  let subscribers = [];

  const setRoute = stateContainer.createAction((state, { name, params }) => ({
    ...state,
    route: {
      name,
      params,
    },
  }));

  const notifySubscribers = (name, params) => {
    subscribers.forEach(subscriber => {
      subscriber(name, params);
    });
  };

  return {
    goto: (name, params) => {
      setRoute({ name, params });
      notifySubscribers(name, params);
    },

    getParams: stateContainer.createSelector(state => state.route.params),

    getRoute: stateContainer.createSelector(state => state.route.name),

    subscribe: (callback) => {
      subscribers = [...subscribers, callback];
      return () => {
        subscribers = subscribers.filter(sub => sub !== callback);
      };
    },
  };
};
