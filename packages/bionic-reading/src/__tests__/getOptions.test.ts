import { describe, expect, it } from 'vitest';
import getOptions from '../getOptions';

describe('test getOptions()', () => {
  it('pass empty object', () => {
    const expected = {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    };

    expect(getOptions({})).toEqual(expected);
  });

  it('pass undefined value', () => {
    const maybeOptions = {
      highlightTag: undefined,
      markdown: undefined,
      markdownStyle: undefined,
    };

    const expected = {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    };

    expect(getOptions(maybeOptions)).toEqual(expected);
  });

  it('pass empty string value', () => {
    const maybeOptions = {
      highlightTag: '',
      markdown: undefined,
      markdownStyle: '',
    };

    const expected = {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    };

    expect(getOptions(maybeOptions)).toEqual(expected);
  });

  it('pass valid value', () => {
    const expected = {
      highlightTag: 'strong',
      markdown: true,
      markdownStyle: '__',
    };

    expect(getOptions(expected)).toEqual(expected);
  });
});
