import Model from './appointments';

describe('model-training-appointments-ng::model', function() {
  function getModel() {
    return Model(Promise);
  }

  beforeEach(function() {
    // ...
  });

  describe('load()', function() {
    it('loads some data', function(done) {
      let model = getModel();

      model.load()
        .then(function(data) {
          // expect(...).toBe(...);
        })
        .then(done);
    });
  });
});
