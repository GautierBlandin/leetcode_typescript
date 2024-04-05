import { trappingRainwater } from './trappingRainwater';

describe('trappingRainWater', () => {
  it('should work on example 1', () => {
    expect(trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });

  it('should work on example 2', () => {
    expect(trappingRainwater([4, 2, 0, 3, 2, 5])).toEqual(9);
  });

  it('should work on example 3', () => {
    expect(trappingRainwater([0, 4, 7, 0, 0, 4, 5, 6, 7, 4, 7])).toEqual(23);
  });
});
