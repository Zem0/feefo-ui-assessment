import { showFirstLetter } from './strings';

describe('showFirstLetter', () => {
  test('should return the first letter of a string', () => {
    const string = 'Feefo';

    const result = showFirstLetter(string);

    expect(result).toBe('F');
  });

  test('should return undefined for an empty string', () => {
    const string = '';

    const result = showFirstLetter(string);

    expect(result).toBeUndefined();
  });
});