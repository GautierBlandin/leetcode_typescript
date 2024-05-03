import { fullJustify } from './textJustification';

describe('testJustification', () => {
  it.each([
    [[['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16],
      ['This    is    an', 'example  of text', 'justification.  ']],
    [[['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16],
      ['What   must   be', 'acknowledgment  ', 'shall be        ']],
    [[['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to',
      'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'], 20],
    ['Science  is  what we', 'understand      well', 'enough to explain to',
      'a  computer.  Art is', 'everything  else  we', 'do                  ']],
  ])(
    'when input is %p, it should return %p',
    ([words, width], justifiedText) => {
      expect(fullJustify(words as string[], width as number)).toEqual(justifiedText);
    },
  );
});
