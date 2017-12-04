import utils from './formatting-utils';

describe('formatting-utils', function() {
  it('should find diff of two strings', () => {
    expect(utils.diffChars('111.00', '111.00')).toEqual([]);
    expect(utils.diffChars('1111.00', '1,111.00')).toEqual([',']);
    expect(utils.diffChars('1,111,111.00', '111,1111.00')).toEqual([',']);
  });
});
