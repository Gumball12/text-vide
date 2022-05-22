import { describe, expect, it } from 'vitest';
import defaults from '../utils/defaults';

describe('test defaultValue util function', () => {
  it('tests including default values', () => {
    const defaultValue = {
      a: 1,
      b: '2',
      c: false,
    };

    const value = {
      a: 3,
      c: true,
    };

    const expected = {
      a: 3,
      b: '2',
      c: true,
    };

    expect(defaults(value, defaultValue)).toEqual(expected);
  });

  it('pass empty object', () => {
    expect(defaults({}, {})).toEqual({});
  });

  it('pass empty default object', () => {
    expect(defaults({ a: 1 }, {})).toEqual({ a: 1 });
  });

  it('pass empty value object', () => {
    expect(defaults({}, { a: 1 })).toEqual({ a: 1 });
  });
});
