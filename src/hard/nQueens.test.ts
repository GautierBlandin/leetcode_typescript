import { nQueens } from './nQueens';

describe('nQueens', () => {
  it('should work for n = 2', () => {
    expect(nQueens(2)).toEqual([]);
  });

  it('should work for n = 3', () => {
    expect(nQueens(3)).toEqual([]);
  });

  it('should work for n = 4', () => {
    expect(nQueens(4)).toEqual([['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]);
  });
});
