import { generateMatrix } from './spiralMatrixII';

describe('spiralMatrixII', () => {
  it('should work on example 1', () => {
    expect(generateMatrix(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it('should work on example 2', () => {
    expect(generateMatrix(1)).toEqual([[1]]);
  });
});
