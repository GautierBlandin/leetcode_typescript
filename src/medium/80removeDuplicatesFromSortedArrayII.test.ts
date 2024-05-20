import { removeDuplicates } from './80removeDuplicatesFromSortedArrayII';

describe('removeDuplicatesFromSortedArrayII', () => {
  it.each([
    [[1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3]],
    [[0, 0, 1, 1, 1, 1, 2, 3, 3], [0, 0, 1, 1, 2, 3, 3]],
  ])('should work', (input, expected) => {
    const result = removeDuplicates(input);

    expect(result).toEqual(expected.length);

    for (let i = 0; i < expected.length; i += 1) {
      expect(expected[i]).toEqual(input[i]);
    }
  });
});
