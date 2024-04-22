import { solveNQueens } from './nQueens';

describe('nQueens', () => {
  it('should work for n = 2', () => {
    expect(solveNQueens(2)).toEqual([]);
  });

  it('should work for n = 3', () => {
    expect(solveNQueens(3)).toEqual([]);
  });

  it('should work for n = 4', () => {
    expect(solveNQueens(4)).toEqual([['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]);
  });
});
