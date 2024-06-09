import { minDistance } from './72editDistance';

describe('editDistance', () => {
  it.each([
    [{ word1: 'horse', word2: 'ros' }, 3],
    [{ word1: 'intention', word2: 'execution' }, 5],
    [{ word1: '', word2: '' }, 0],
    [{ word1: '', word2: 'aaaa' }, 4],
    [{ word1: 'abcd', word2: 'abcd' }, 0],
  ])('should work', (input, expected) => {
    expect(minDistance(input.word1, input.word2)).toBe(expected);
  });
});
