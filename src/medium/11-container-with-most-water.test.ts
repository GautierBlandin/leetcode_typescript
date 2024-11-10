function maxArea(heights: number[]): number {
  // Brute force approach
  // We are going to go through every possible combination of two pillars.
  // For each combination, we will compute the area it would result in, while keeping track of the
  // maximum found possible area.
  // We will return the maximum area at the end
  let maxFoundArea = 0;

  for (let i = 0; i < heights.length; i += 1) {
    // Starting from i + 1 is a small optimization that avoids going over the same pair twice in reverse order.
    for (let j = i + 1; j < heights.length; j += 1) {
      maxFoundArea = Math.max(maxFoundArea, (j - i) * Math.min(heights[i], heights[j]));
    }
  }

  return maxFoundArea;
}

describe('container with most water', () => {
  it('works on example 2', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('works on example 1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('works container with only extremes', () => {
    expect(maxArea([1, 0, 0, 1])).toBe(3);
  });

  it('works with height 2', () => {
    expect(maxArea([2, 0, 2])).toBe(4);
  });

  it('uses the smaller of the two heights for computing the area', () => {
    expect(maxArea([2, 0, 1])).toBe(2);
  });

  it('successfully discriminates between several options, picking the wider one', () => {
    expect(maxArea([1, 2, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 2])).toBe(30);
  });

  it('successfully discriminates between several options, picking the taller one', () => {
    expect(maxArea([1, 2, 0, 0, 0, 20, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 2])).toBe(40);
  });
});
