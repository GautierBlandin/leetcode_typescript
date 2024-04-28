export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const pathsGrid: (number | undefined)[][] = new Array(obstacleGrid.length)
    .fill(undefined).map(() => new Array(obstacleGrid[0].length).fill(undefined));

  if (obstacleGrid[0][0] === 1) {
    pathsGrid[0][0] = 0;
  } else {
    pathsGrid[0][0] = 1;
  }

  for (let i = 1; i < obstacleGrid.length; i += 1) {
    if (obstacleGrid[i][0] === 1) {
      pathsGrid[i][0] = 0;
      continue;
    }

    // eslint-disable-next-line prefer-destructuring
    pathsGrid[i][0] = pathsGrid[i - 1][0];
  }

  for (let j = 1; j < obstacleGrid[0].length; j += 1) {
    if (obstacleGrid[0][j] === 1) {
      pathsGrid[0][j] = 0;
      continue;
    }

    pathsGrid[0][j] = pathsGrid[0][j - 1];
  }

  for (let i = 1; i < obstacleGrid.length; i += 1) {
    for (let j = 1; j < obstacleGrid[0].length; j += 1) {
      if (obstacleGrid[i][j] === 1) {
        pathsGrid[i][j] = 0;
        continue;
      }

      pathsGrid[i][j] = pathsGrid[i - 1][j]! + pathsGrid[i][j - 1]!;
    }
  }

  return pathsGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]!;
}
