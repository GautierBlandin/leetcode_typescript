import { findRotationPoint, searchInRotatedArray } from './searchInRotatedArrays';

describe('find rotation point', () => {
  it('should find rotation point in single element array', () => {
    expect(findRotationPoint([0]).rotationIndex).toEqual(0);
  });

  it('should find rotation point in ordered array', () => {
    expect(findRotationPoint([0, 1, 2, 3, 4, 5, 6, 7, 8]).rotationIndex).toEqual(0);
  });

  it('should find rotation point in rotated array', () => {
    expect(findRotationPoint([6, 7, 8, 0, 1, 2, 3, 4, 5]).rotationIndex).toEqual(3);
  });

  it('should find rotation point in rotated array', () => {
    expect(findRotationPoint([3, 4, 5, 6, 7, 8, 0, 1, 2]).rotationIndex).toEqual(6);
  });
});

describe('searchInRotatedArray', () => {
  it('should find 5', () => {
    expect(searchInRotatedArray(5, [3, 4, 5, 6, 7, 8, 0, 1, 2])).toEqual(2);
  });

  it('should find 0', () => {
    expect(searchInRotatedArray(0, [3, 4, 5, 6, 7, 8, 0, 1, 2])).toEqual(6);
  });

  it('should find 1', () => {
    expect(searchInRotatedArray(1, [3, 4, 5, 6, 7, 8, 0, 1, 2])).toEqual(7);
  });

  it('should find 2', () => {
    expect(searchInRotatedArray(2, [3, 4, 5, 6, 7, 8, 0, 1, 2])).toEqual(8);
  });

  it('should find 3', () => {
    expect(searchInRotatedArray(3, [3, 4, 5, 6, 7, 8, 0, 1, 2])).toEqual(0);
  });

  it('should for every array of length 11', () => {
    for (let i = 0; i < 11; i += 1) {
      const arr: number[] = [];
      for (let j = 0; j < 11; j += 1) {
        arr.push((j + i) % 11);
      }

      for (let j = 0; j < 11; j += 1) {
        expect(searchInRotatedArray(j, arr)).toEqual((j - i + 11) % 11);
      }
    }
  });

  it('should work in log(n) time', () => {
    const arr = [];
    for (let i = 0; i < 20000; i += 1) {
      arr.push((i + 3000) % 20000);
    }
    expect(searchInRotatedArray(4000, arr)).toEqual(1000);
  });
});
