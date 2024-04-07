import { addString, multiply } from './multiplyString';

describe('addStrings', () => {
  it('should add string', () => {
    expect(addString('123', '123')).toEqual('246');
  });

  it('should carry the last digit', () => {
    expect(addString('635', '400')).toEqual('1035');
  });
});

describe('multiplyString', () => {
  it('should work', () => {
    expect(multiply('123', '567')).toEqual('69741');
  });

  it('should work on 0 input', () => {
    expect(multiply('0', '0')).toEqual('0');
  });

  it('should work on 0 input 2', () => {
    expect(multiply('0', '12345')).toEqual('0');
  });
});
