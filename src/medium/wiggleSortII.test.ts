import { wiggleSort } from './wiggleSortII';

describe('wiggleSortII', () => {
  it('should wiggleSort example 1', () => {
    const nums = [1, 5, 1, 1, 6, 4];
    wiggleSort(nums);
    verifyWiggleSort(nums);
  });

  it('should wiggleSort example 2', () => {
    const nums = [1, 3, 2, 2, 3, 1];
    wiggleSort(nums);
    verifyWiggleSort(nums);
  });

  it('should wiggleSort failed test', () => {
    const nums = [1, 1, 2, 1, 2, 2, 1];
    wiggleSort(nums);
    verifyWiggleSort(nums);
  });

  it('should wiggleSort other failed test', () => {
    const nums = [1, 4, 3, 4, 1, 2, 1, 3, 1, 3, 2, 3, 3];
    wiggleSort(nums);
    verifyWiggleSort(nums);
  });

  it('should wiggleSort third failed test', () => {
    const nums = [10, 1, 7, 2, 10, 5, 8, 4, 9, 4, 10, 8, 8, 1, 5, 6, 8, 9, 2, 1];
    wiggleSort(nums);
    verifyWiggleSort(nums);
  });

  it('should wiggleSort array of length 1', () => {
    const nums = [0];
    wiggleSort(nums);
    expect(nums).toEqual([0]);
  });

  it('should wiggleSort array of length 0', () => {
    const nums: number[] = [];
    wiggleSort(nums);
    expect(nums).toEqual([]);
  });
});

function verifyWiggleSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      checkEventWiggleSort(i);
    }
  }

  function checkEventWiggleSort(i: number) {
    if (i === 0) {
      expect(nums[0] < nums[1]).toBe(true);
    } else if (i === nums.length - 1) {
      expect(nums[nums.length - 1] < nums[nums.length - 2]).toBe(true);
    } else {
      expect(nums[i] < nums[i - 1]).toBe(true);
      expect(nums[i] < nums[i + 1]).toBe(true);
    }
  }
}
