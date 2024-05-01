export function isNumber(s: string): boolean {
  const separators = ['e', 'E'];
  const serapatorsRegex = new RegExp(separators.join('|'), 'g');

  const parts = s.split(serapatorsRegex);

  if (parts.length === 0 || parts.length >= 3) return false;

  if (parts.length === 1) return isValidInteger(parts[0]) || isValidDecimal(parts[0]);

  // redundant check
  if (parts.length === 2) return (isValidInteger(parts[0]) || isValidDecimal(parts[0])) && isValidInteger(parts[1]);

  // should never reach here
  return false;
}

function isValidInteger(s: string) {
  return /^[-+]?\d+$/.test(s);
}

function isValidDecimal(s: string) {
  return /^[-+]?\d+\.$/.test(s) || /^[-+]?\.\d+$/.test(s) || /^[-+]?\d+\.\d+$/.test(s);
}
