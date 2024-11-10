function maxAreaBruteForce(heights: number[]): number {
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
