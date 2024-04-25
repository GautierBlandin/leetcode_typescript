import { insert } from './insertInterval';

describe('insertInterval', () => {
  it('should work on example 1', () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
  });

  it('should work on example 2', () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
  });

  it('should work on type 1', () => {
    expect(insert([[3, 5]], [2, 6])).toEqual([[2, 6]]);
  });

  it('should work on type 2', () => {
    expect(insert([[3, 5], [7, 10]], [5, 7])).toEqual([[3, 10]]);
  });

  it('should work on type 3', () => {
    expect(insert([[1, 2], [3, 4]], [5, 6])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  it('should work on type 4', () => {
    expect(insert([[3, 4], [5, 6]], [1, 2])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  it('should work on type 5', () => {
    expect(insert([[1, 2], [5, 6]], [3, 4])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  it('should work on empty intervals edge-case', () => {
    expect(insert([], [1, 2])).toEqual([[1, 2]]);
  });
});
