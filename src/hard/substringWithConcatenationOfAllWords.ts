export function findSubstring(s: string, words: string[]): number[] {
  const totalWordsLength = words.join('').length;
  const wordsHash = hash(words.join(''));

  if (s.length < totalWordsLength) return [];

  const concatedSubstringIndexes: number[] = [];

  let i = 0;
  let currentHash = hash(s.substring(0, totalWordsLength));

  while (i + totalWordsLength <= s.length) {
    if (currentHash === wordsHash && verifyMatch(s.substring(i, i + totalWordsLength), words)) concatedSubstringIndexes.push(i);
    currentHash = computeNextHash(currentHash, s.charCodeAt(i), s.charCodeAt(i + totalWordsLength));
    i += 1;
  }

  return concatedSubstringIndexes;
}

function hash(s: string): number {
  let hashSum = 0;
  for (let i = 0; i < s.length; i += 1) {
    hashSum += s.charCodeAt(i);
  }
  return hashSum;
}

function computeNextHash(currentHash: number, firstLetterCode: number, nextLetterCode: number) {
  return currentHash - firstLetterCode + nextLetterCode;
}

/*
 * The goal of this function is to check if s matches any concatenated substring of words. s is expected to have the correct
 * length.
 */
export function verifyMatch(s: string, words: string[]): boolean {
  function verifyMatchRecursive(subString: string, subWords: string[]): boolean {
    if (subString.length === 0 && subWords.length === 0) return true;

    for (let i = 0; i < subWords.length; i += 1) {
      if (subString.substring(0, subWords[i].length) === subWords[i]) {
        const newSubString = subString.substring(subWords[i].length);
        subWords.splice(i, 1);
        return verifyMatchRecursive(newSubString, subWords);
      }
    }

    return false;
  }

  const wordsCopy = [...words];

  return verifyMatchRecursive(s, wordsCopy);
}
