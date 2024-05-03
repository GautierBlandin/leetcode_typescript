import { addBinary } from './addBinary';

describe('addBinary', () => {
  it.each([
    [['1', '11'], '100'],
    [['11', '1'], '100'],
    [['1010', '1011'], '10101'],
    [['0', '0'], '0'],
    [['11', '11'], '110'],
    [['111', '111'], '1110'],
  ])(
    'when input is %p, it should return %s',
    ([a, b], expected) => {
      expect(addBinary(a, b)).toEqual(expected);
    },
  );
});
