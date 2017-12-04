import { PERIODS } from './constants';
import helper from './helpers';

const filtered = 'filtered';
const helpers = helper({
  $filter: () => () => filtered,
  getRule: () => () => {},
});

const currencyCode = 'EUR';
const model = {
  loadData: () => ({
    original: {
      turnovers: [
        { 
          balance: {
            currencyCode,
          },
        },
      ],
    },
  }),
};

describe('ext-bb-turnovers-ng:helpers', () => {
  describe('getPeriods', () => {
    it('should return array of periods', () => {
      const periods = helpers.getPeriods();
      expect(periods).toEqual(PERIODS);
    });
  });

  describe('getDefaultPeriod', () => {
    it('should return object with flag "default" set to true', () => {
      // prepend one additional item to be sure that
      // helper method is not returning item with index 0 regardless of the flag
      const periods = [{
        interval: 'MONTH',
        duration: 1,
      }].concat(helpers.getPeriods());

      const defaultPeriod = helpers.getDefaultPeriod();
      expect(defaultPeriod.default).toBe(true);
    });
  });

  describe('tick formatters', () => {
    it('should filter x axis ticks', () => {
      const ticks = [1, 2, 3];
      const formatted = helpers.formatX(ticks);
      expect(formatted.length).toBe(3);
      expect(formatted[0]).toBe(filtered);
    });

    it('should filter y axis ticks', () => {
      const ticks = [1, 2, 3];
      const data = model.loadData();
      const formatted = helpers.formatY(ticks, data);
      expect(formatted.length).toBe(3);
      expect(formatted[0]).toBe(filtered);
    });
  });
});
