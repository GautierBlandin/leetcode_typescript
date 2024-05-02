import { plusOne } from './plusOne';

describe('plusOne', () => {
  it.each([
    [[0], [1]],
    [[9], [1, 0]],
    [[1, 9], [2, 0]],
    [[9, 9, 9], [1, 0, 0, 0]],
    [[1, 2, 3], [1, 2, 4]],
  ])(
    'when input is %p, it should return %p',
    (input, expected) => {
      expect(plusOne(input)).toEqual(expected);
    },
  );
});
