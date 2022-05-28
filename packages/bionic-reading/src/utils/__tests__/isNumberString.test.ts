import { describe, expect, it } from 'vitest';
import isNumberString from '../isNumberString';

describe('test isNumberString util', () => {
  it('pass invalid number-string', () => {
    expect(isNumberString('')).toBeFalsy();
    expect(isNumberString(false)).toBeFalsy();
    expect(isNumberString(true)).toBeFalsy();
    expect(isNumberString(undefined)).toBeFalsy();
    expect(isNumberString(null)).toBeFalsy();
    expect(isNumberString({})).toBeFalsy();
    expect(isNumberString('a!')).toBeFalsy();
    expect(isNumberString('a')).toBeFalsy();
    expect(isNumberString('1!')).toBeFalsy();
    expect(isNumberString('!!')).toBeFalsy();
  });

  it('pass valid number-string', () => {
    expect(isNumberString('0')).toBeTruthy();
    expect(isNumberString('00')).toBeTruthy();
    expect(isNumberString('000')).toBeTruthy();
    expect(isNumberString('101')).toBeTruthy();
    expect(isNumberString('-4440')).toBeTruthy();
  });
});
