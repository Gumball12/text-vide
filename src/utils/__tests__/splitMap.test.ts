import { describe, expect, it } from 'vitest';
import splitMap from '../splitMap';

const randomString = () => Math.random().toString(16).split('.')[1];

describe('test splitMap util', () => {
  it('does it return the same result', () => {
    const text = randomString();
    expect(splitMap(text, '', '', value => value)).toBe(text);
  });

  it('always has a specific value', () => {
    const text = '0123456789';
    const callbackResult = 'a';
    const expected = 'aaaaaaaaaa';
    expect(splitMap(text, '', '', () => callbackResult)).toBe(expected);
  });

  it('with only delimiter', () => {
    const text = 'abc-def';
    const expected = 'abcdef';
    expect(splitMap(text, '-', '', value => value)).toBe(expected);
  });

  it('with only separator', () => {
    const text = 'abcdef';
    const expected = 'a-b-c-d-e-f';
    expect(splitMap(text, '', '-', value => value)).toBe(expected);
  });
});
