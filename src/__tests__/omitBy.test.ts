import { describe, expect, it } from 'vitest';
import omitBy from '../utils/omitBy';

describe('test omitBy util function', () => {
  it('omit number values', () => {
    const symbolValue = Symbol();

    const obj = {
      a: 1,
      b: '2',
      c: false,
      d: undefined,
      e: null,
      f: symbolValue,
    };

    const omitted = omitBy(obj, value => typeof value === 'number');

    expect(omitted).toEqual({
      b: '2',
      c: false,
      d: undefined,
      e: null,
      f: symbolValue,
    });
  });

  it('omit empty string', () => {
    const obj = {
      a: '1',
      b: '2',
      c: '',
      d: undefined,
      e: null,
    };

    const omitted = omitBy(obj, value => value === '');

    expect(omitted).toEqual({
      a: '1',
      b: '2',
      d: undefined,
      e: null,
    });
  });
});
