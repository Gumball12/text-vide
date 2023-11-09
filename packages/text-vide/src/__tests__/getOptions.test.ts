import { describe, expect, it } from 'vitest';
import getOptions from '../getOptions';
import { Options } from '../types';

describe('test getOptions()', () => {
  it('pass empty object', () => {
    const expected: Options = {
      sep: ['<b>', '</b>'],
      fixationPoint: 1,
      ignoreHtmlTag: true,
      ignoreHtmlEntity: true,
    };

    expect(getOptions({})).toEqual(expected);
  });

  it('pass undefined value', () => {
    const undefinedOptionValues = {
      sep: undefined,
      fixationPoint: undefined,
      ignoreHtmlTag: undefined,
      ignoreHtmlEntity: undefined,
    };

    const expected: Options = {
      sep: ['<b>', '</b>'],
      fixationPoint: 1,
      ignoreHtmlTag: true,
      ignoreHtmlEntity: true,
    };

    expect(getOptions(undefinedOptionValues)).toEqual(expected);
  });

  it('pass empty string value', () => {
    const maybeOptions = {
      sep: ['', ''],
      fixationPoint: undefined,
      ignoreHtmlTag: undefined,
      ignoreHtmlEntity: undefined,
    };

    const expected: Options = {
      sep: ['', ''],
      fixationPoint: 1,
      ignoreHtmlTag: true,
      ignoreHtmlEntity: true,
    };

    expect(getOptions(maybeOptions)).toEqual(expected);
  });

  it('pass valid value', () => {
    const expected: Options = {
      sep: ['a', 'b'],
      fixationPoint: 0, // but it's okay
      ignoreHtmlTag: false,
      ignoreHtmlEntity: false,
    };

    expect(getOptions(expected)).toEqual(expected);
  });
});
