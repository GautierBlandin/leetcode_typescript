import { minPathSum } from './minimumPathSum';

describe('minimumPathSum', () => {
  it('should work on example', () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toEqual(7);
  });

  it('should work on 1x1 grid', () => {
    expect(minPathSum([[1]])).toEqual(1);
  });

  it('should work on line grid', () => {
    expect(minPathSum([[1, 2]])).toEqual(3);
  });

  it('should work on column grid', () => {
    expect(minPathSum([[1], [2]])).toEqual(3);
  });
});
