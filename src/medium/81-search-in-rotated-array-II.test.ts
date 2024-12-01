import { search } from './81-search-in-rotated-array';

describe('search', () => {
  it('returns true if the target is in the array', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
  });

  it('returns false if the target is not in the array', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], -1)).toBe(false);
  });

  it('works when the array is not pivoted', () => {
    expect(search([0, 0, 1, 2, 2, 5, 6], 2)).toBe(true);
  });

  it('works when the target is the highest number', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 6)).toBe(true);
  });

  it('works when the target is higher than the highest number', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 7)).toBe(false);
  });

  it('finds the target in an array of length 1', () => {
    expect(search([1], 1)).toBe(true);
  });

  it('finds the target is not present in an array of length 1', () => {
    expect(search([1], 2)).toBe(false);
  });
});
