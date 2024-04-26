export function generateMatrix(n: number): number[][] {
  let i = 0;
  let j = 0;
  let rightBound = n;
  let downBound = n;
  let leftBound = 0;
  let upBound = 0;
  let direction = Direction.RIGHT;
  let numberToSet = 1;

  const matrix: (undefined | number)[][] = new Array(n).fill(undefined).map(() => new Array(n).fill(undefined));

  while (numberToSet <= n * n) {
    matrix[i][j] = numberToSet;
    numberToSet += 1;

    const [nextI, nextJ] = move(i, j, direction);
    if ((nextI < upBound || nextJ < leftBound || nextI >= downBound || nextJ >= rightBound)) {
      [rightBound, downBound, leftBound, upBound] = updateBounds(rightBound, downBound, leftBound, upBound, direction);
      direction = getNextDirection(direction);
    }

    [i, j] = move(i, j, direction);
  }

  return matrix as number[][];
}

enum Direction {
  RIGHT,
  DOWN,
  LEFT,
  UP,
}

function getNextDirection(direction: Direction) {
  switch (direction) {
    case Direction.RIGHT:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.LEFT;
    case Direction.LEFT:
      return Direction.UP;
    case Direction.UP:
      return Direction.RIGHT;
    default:
      throw (new Error('unexpected direction'));
  }
}

function move(i: number, j: number, direction: Direction): [number, number] {
  switch (direction) {
    case Direction.RIGHT:
      return [i, j + 1];
    case Direction.DOWN:
      return [i + 1, j];
    case Direction.LEFT:
      return [i, j - 1];
    case Direction.UP:
      return [i - 1, j];
    default:
      throw (new Error('unexpected direction'));
  }
}

function updateBounds(rightBound: number, downBound: number, leftBound: number, upBound: number, direction: Direction)
  : [number, number, number, number] {
  switch (direction) {
    case Direction.RIGHT:
      return [rightBound, downBound, leftBound, upBound + 1];
    case Direction.DOWN:
      return [rightBound - 1, downBound, leftBound, upBound];
    case Direction.LEFT:
      return [rightBound, downBound - 1, leftBound, upBound];
    case Direction.UP:
      return [rightBound, downBound, leftBound + 1, upBound];
    default:
      throw (new Error('unexpected direction'));
  }
}
