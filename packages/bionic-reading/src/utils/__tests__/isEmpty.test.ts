import { describe, expect, it } from 'vitest';
import isEmpty from '../isEmpty';

describe('test isEmptyString util', () => {
  it('pass not empty string', () => {
    expect(isEmpty('NOT_EMPTY')).toBeFalsy();
  });

  it('pass empty string', () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it('pass null value', () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  it('pass undefined value', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });
});
