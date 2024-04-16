import { rotate } from './rotate';

describe('rotate', () => {
  it('should rotate 1x1', () => {
    const matrix = [[1]];
    rotate(matrix);
    expect(matrix).toEqual([[1]]);
  });

  it('should rotate 2x2', () => {
    const matrix = [[1, 2], [3, 4]];
    rotate(matrix);
    expect(matrix).toEqual([[3, 1], [4, 2]]);
  });

  it('should rotate 3x3', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    rotate(matrix);
    expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });

  it('should rotate 4x4', () => {
    const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    rotate(matrix);
    expect(matrix).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
  });

  it('should rotate 5x5', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]];
    rotate(matrix);
    expect(matrix).toEqual([
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]]);
  });
});
