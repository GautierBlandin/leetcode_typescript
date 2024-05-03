export function fullJustify(words: string[], maxWidth: number): string[] {
  const justifiedStrings: string[] = [];

  let startIndex = 0;

  while (startIndex < words.length) {
    let endIndex = startIndex + 1;
    let lineLength = words[startIndex].length;
    let wordsLength = words[startIndex].length;

    while (endIndex < words.length && (lineLength + words[endIndex].length + 1) <= maxWidth) {
      lineLength += words[endIndex].length + 1;
      wordsLength += words[endIndex].length;
      endIndex += 1;
    }

    let line: string = words[startIndex];
    if (endIndex < words.length) {
      const freeSpaces = maxWidth - wordsLength;
      const gap = Math.floor(freeSpaces / Math.max(endIndex - startIndex - 1, 1));
      let extraSpaces = freeSpaces % Math.max(endIndex - startIndex - 1, 1);

      for (let i = startIndex + 1; i < endIndex; i += 1) {
        line += ' '.repeat(gap);
        if (extraSpaces > 0) {
          line += ' ';
          extraSpaces -= 1;
        }
        line += words[i];
      }
      while (line.length < maxWidth) {
        line += ' ';
      }
    } else {
      for (let i = startIndex + 1; i < endIndex; i += 1) {
        line += ' ';
        line += words[i];
      }
      while (line.length < maxWidth) {
        line += ' ';
      }
    }

    justifiedStrings.push(line);
    startIndex = endIndex;
  }

  return justifiedStrings;
}
