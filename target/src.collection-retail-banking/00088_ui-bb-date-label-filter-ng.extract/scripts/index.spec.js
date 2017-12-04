import dateLabelFilterModuleKey, { TimePeriod } from './index';

describe('ui-bb-date-label-filter-ng', () => {
  it('exports an angular DI key', () => {
    expect(dateLabelFilterModuleKey).toBeNonEmptyString();
  });

  it('exports time periods', () => {
    expect(TimePeriod).toBeNonEmptyObject();
  });
});
