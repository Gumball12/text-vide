import { describe, expect, it } from 'vitest';
import isEmptyString from '../utils/isEmptyString';

describe('test isEmptyString util', () => {
  it('pass not empty string', () => {
    expect(isEmptyString('NOT_EMPTY')).toBeFalsy();
  });

  it('pass empty string', () => {
    expect(isEmptyString('')).toBeTruthy();
  });

  it('pass null value', () => {
    expect(isEmptyString(null)).toBeTruthy();
  });

  it('pass undefined value', () => {
    expect(isEmptyString(undefined)).toBeTruthy();
  });
});
