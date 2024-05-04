export function simplifyPath(path: string): string {
  let i = 0;
  const pathStack: string[] = [];

  while (i < path.length) {
    while (path[i] === '/') i += 1;
    let nextWord = '';
    while (i < path.length && path[i] !== '/') {
      nextWord += path[i];
      i += 1;
    }
    if (nextWord === '.' || nextWord === '') { /* empty */ } else if (nextWord === '..') {
      pathStack.pop();
    } else {
      pathStack.push(nextWord);
    }
  }

  if (pathStack.length === 0) return '/';

  let result = '';

  for (let index = 0; index < pathStack.length; index += 1) {
    result += `/${pathStack[index]}`;
  }
  return result;
}
