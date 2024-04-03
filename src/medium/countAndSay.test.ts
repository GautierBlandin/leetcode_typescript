import { countAndSay } from './countAndSay';

describe('countAndSay', () => {
  it('should work on base case', () => {
    expect(countAndSay(1)).toEqual('1');
  });

  it('should work for n = 2', () => {
    expect(countAndSay(2)).toEqual('11');
  });

  it('should work for n = 3', () => {
    expect(countAndSay(3)).toEqual('21');
  });

  it('should work for n = 4', () => {
    expect(countAndSay(4)).toEqual('1211');
  });

  it('should work for n = 5', () => {
    expect(countAndSay(5)).toEqual('111221');
  });

  it('should work for n = 6', () => {
    expect(countAndSay(6)).toEqual('312211');
  });

  it('should work for n = 7', () => {
    expect(countAndSay(7)).toEqual('13112221');
  });

  it('should work for n = 8', () => {
    expect(countAndSay(8)).toEqual('1113213211');
  });

  it('should work for n = 9', () => {
    expect(countAndSay(9)).toEqual('31131211131221');
  });

  it('should work for n = 10', () => {
    expect(countAndSay(10)).toEqual('13211311123113112211');
  });

  it('should work for n = 11', () => {
    expect(countAndSay(11)).toEqual('11131221133112132113212221');
  });

  it('should work for n = 12', () => {
    expect(countAndSay(12)).toEqual('3113112221232112111312211312113211');
  });
});
