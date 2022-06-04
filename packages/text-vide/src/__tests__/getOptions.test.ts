import { describe, expect, it } from 'vitest';
import getOptions from '../getOptions';

describe('test getOptions()', () => {
  it('pass empty object', () => {
    const expected = {
      sep: ['<b>', '</b>'],
      fixationPoint: 1,
    };

    expect(getOptions({})).toEqual(expected);
  });

  it('pass undefined value', () => {
    const maybeOptions = {
      sep: undefined,
      fixationPoint: undefined,
    };

    const expected = {
      sep: ['<b>', '</b>'],
      fixationPoint: 1,
    };

    expect(getOptions(maybeOptions)).toEqual(expected);
  });

  it('pass empty string value', () => {
    const maybeOptions = {
      sep: ['', ''],
      fixationPoint: undefined,
    };

    const expected = {
      sep: ['', ''],
      fixationPoint: 1,
    };

    expect(getOptions(maybeOptions)).toEqual(expected);
  });

  it('pass valid value', () => {
    const expected = {
      sep: ['a', 'b'],
      fixationPoint: 0, // but it's okay
    };

    expect(getOptions(expected)).toEqual(expected);
  });
});
