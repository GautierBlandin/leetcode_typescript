import { jump } from './jumpGame2';

describe('jump', () => {
  it('should work on example 1', () => {
    expect(jump([2, 3, 1, 1, 4])).toEqual(2);
  });

  it('should work on example 2', () => {
    expect(jump([2, 3, 0, 1, 4])).toEqual(2);
  });

  it('should work on array of length 1', () => {
    expect(jump([1])).toEqual(0);
  });
});
