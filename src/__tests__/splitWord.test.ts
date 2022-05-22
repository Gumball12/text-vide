import { describe, expect, it } from 'vitest';
import splitWord from '../utils/splitWord';

describe('test splitWord util function', () => {
  it('pass len 4 word', () => {
    const text = 'abcd';
    const expected = ['ab', 'cd'];
    expect(splitWord(text)).toEqual(expected);
  });

  it('pass len 1 word', () => {
    const text = 'a';
    const expected = ['a', ''];
    expect(splitWord(text)).toEqual(expected);
  });

  it('pass 0 len word', () => {
    const text = '';
    const expected = ['', ''];
    expect(splitWord(text)).toEqual(expected);
  });
});
