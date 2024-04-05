/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 * Example 2:
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 *
 * Constraints:
 *
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */

export function trappingRainwater(heights: number[]): number {
  /**
   * Principle for the algorithm:
   * Index the array into a Map<height, positions>.
   * Go through the heights in decreasing order.
   * At each step, keep in memory the position of the left-most and right-most maximum heights.
   * Remove from the total water amount pillars that do not belong to the maximum.
   */
  const heightPositionMap = indexHeightPositionMap(heights);

  const heightKeys = [...heightPositionMap.keys()];

  heightKeys.sort((a, b) => b - a);

  const firstHeightPositions = heightPositionMap.get(heightKeys[0])!;
  firstHeightPositions.sort((a, b) => (a - b));

  let curHeightIndex: number = 1;
  const curHeight = heightKeys[0];
  let curLeftMostPosition = firstHeightPositions[0];
  let curRightMostPosition = firstHeightPositions[firstHeightPositions.length - 1];
  let trappedWater = curHeight * ((curRightMostPosition - curLeftMostPosition) - heightPositionMap.get(heightKeys[0])!.length + 1);

  while (curHeightIndex < heightKeys.length) {
    const nextHeight = heightKeys[curHeightIndex];

    const nextHeightPositions = heightPositionMap.get(nextHeight)!;
    nextHeightPositions.sort((a, b) => (a - b));

    const nextLeftMostPosition = nextHeightPositions[0];
    const nextRightMostPosition = nextHeightPositions[nextHeightPositions.length - 1];

    if (nextLeftMostPosition < curLeftMostPosition) {
      trappedWater += (curLeftMostPosition - nextLeftMostPosition) * nextHeight;
      curLeftMostPosition = nextLeftMostPosition;
    }

    if (nextRightMostPosition > curRightMostPosition) {
      trappedWater += (nextRightMostPosition - curRightMostPosition) * nextHeight;
      curRightMostPosition = nextRightMostPosition;
    }

    trappedWater -= nextHeight * nextHeightPositions.length;

    curHeightIndex += 1;
  }

  return trappedWater;
}

function indexHeightPositionMap(heights: number[]): Map<number, number[]> {
  const heightPositionMap: Map<number, number[]> = new Map();

  heights.forEach((height, position) => {
    if (!heightPositionMap.has(height)) {
      heightPositionMap.set(height, [position]);
    } else {
      heightPositionMap.set(height, [...heightPositionMap.get(height)!, position]);
    }
  });

  return heightPositionMap;
}
