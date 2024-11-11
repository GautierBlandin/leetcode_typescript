import { maxArea } from './11-container-with-most-water';

describe('container with most water', () => {
  it('works on example 2', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('works on example 1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('works container with only extremes', () => {
    expect(maxArea([1, 0, 0, 1])).toBe(3);
  });

  it('works with height 2', () => {
    expect(maxArea([2, 0, 2])).toBe(4);
  });

  it('uses the smaller of the two heights for computing the area', () => {
    expect(maxArea([2, 0, 1])).toBe(2);
  });

  it('successfully discriminates between several options, picking the wider one', () => {
    expect(maxArea([1, 2, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 2])).toBe(30);
  });

  it('successfully discriminates between several options, picking the taller one', () => {
    expect(maxArea([1, 2, 0, 0, 0, 20, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 2])).toBe(40);
  });
});
