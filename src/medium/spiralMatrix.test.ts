import { spiralOrder } from './spiralMatrix';

describe('spiral matrix', () => {
  it('should work on example 1', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      .toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('should work on example 2', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
      .toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
