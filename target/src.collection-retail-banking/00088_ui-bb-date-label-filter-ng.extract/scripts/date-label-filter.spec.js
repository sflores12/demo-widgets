import dateLabelFilter from './date-label-filter';

describe('date-label-filter', () => {

  it('should return "now" label', function() {
    expect(dateLabelFilter(Date.now())).toEqual('now');
  });

  it('should return "today" label', function() {
    expect(dateLabelFilter(new Date().toDateString())).toEqual('today');
  });

  it('should return "yesterday" label', function() {
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);
    expect(dateLabelFilter(yesterday)).toEqual('yesterday');
  });

  it('should return passed date if it is not "now", "today" or "yesterday" ', function () {
    const date = Date.now() + 1000 * 60;
    expect(dateLabelFilter(date)).toEqual(date);
  });
});
