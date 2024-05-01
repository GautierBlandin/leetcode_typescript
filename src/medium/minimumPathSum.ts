export function minPathSum(grid: number[][]): number {
  const minDistTable: number[][] = new Array(grid.length).fill(undefined)
    .map(() => new Array(grid[0].length).fill(-1));

  minDistTable[0][0] = grid[0][0];

  for (let i = 1; i < grid.length; i += 1) {
    minDistTable[i][0] = minDistTable[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < grid[0].length; j += 1) {
    minDistTable[0][j] = minDistTable[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < grid.length; i += 1) {
    for (let j = 1; j < grid[0].length; j += 1) {
      minDistTable[i][j] = Math.min(minDistTable[i - 1][j], minDistTable[i][j - 1]) + grid[i][j];
    }
  }

  return minDistTable[grid.length - 1][grid[0].length - 1];
}
