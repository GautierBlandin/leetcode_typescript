export function maxAreaBruteForce(heights: number[]): number {
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

export function maxArea(heights: number[]): number {
  // Approach:
  // Start with a pointer on the left and a pointer on the right.

  let leftPointer = 0;
  let maximumLeftHeight = heights[leftPointer];
  let rightPointer = heights.length - 1;
  let maximumRightHeight = heights[rightPointer];
  let maximumArea = Math.min(maximumLeftHeight, maximumRightHeight) * (rightPointer - leftPointer);

  while (leftPointer < rightPointer) {
    if (maximumLeftHeight <= maximumRightHeight) {
      // increment left pointer
      leftPointer += 1;
      // check if the height is greater than the current maximum height
      if (heights[leftPointer] > maximumLeftHeight) {
        // if that is the case, we have a candidate for a new maximum area
        // check if the new area is bigger, and update the height either way
        maximumArea = Math.max(maximumArea, Math.min(heights[leftPointer], maximumRightHeight) * (rightPointer - leftPointer));
        maximumLeftHeight = heights[leftPointer];
      }
    } else {
      // maximumLeftHeight > maximumRightHeight here
      // decrement right pointer
      rightPointer -= 1;
      // check if the right height is greater than the current maximum right height
      if (heights[rightPointer] > maximumRightHeight) {
        maximumArea = Math.max(maximumArea, Math.min(maximumLeftHeight, heights[rightPointer]) * (rightPointer - leftPointer));
        maximumRightHeight = heights[rightPointer];
      }
    }
  }

  return maximumArea;
}
