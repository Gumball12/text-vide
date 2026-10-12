import { describe, expect, it, vi } from 'vitest';
import { textVide } from '..';

describe('HTML comment scanning', () => {
  it('searches for a missing comment terminator only once per input', () => {
    const text = '<!--0>'.repeat(1000);
    const indexOf = vi.spyOn(String.prototype, 'indexOf');

    try {
      const result = textVide(text);
      // Bound the expensive searches without relying on machine-specific timing.
      const commentEndSearches = indexOf.mock.calls.filter(
        ([search]) => search === '-->',
      ).length;

      expect(result).toBe(text);
      expect(commentEndSearches).toBe(1);
    } finally {
      indexOf.mockRestore();
    }
  });

  it('preserves tags after repeated unterminated comments', () => {
    const text = '<!--0><!--1><p>ab</p><!--2><i>cd</i>';
    const expected = '<!--0><!--1><p><b>a</b>b</p><!--2><i><b>c</b>d</i>';

    expect(textVide(text)).toBe(expected);
  });

  it('keeps searching when a comment terminator exists later in the input', () => {
    const text = '<!--0><!--1--> <p>ab</p>';
    const expected = '<!--0><!--1--> <p><b>a</b>b</p>';

    expect(textVide(text)).toBe(expected);
  });

  it('handles unterminated comments after a closed comment', () => {
    const text = '<!-- closed --> <!--0><!--1><p>ab</p>';
    const expected = '<!-- closed --> <!--0><!--1><p><b>a</b>b</p>';

    expect(textVide(text)).toBe(expected);
  });

  it('does not reuse a failed search across calls', () => {
    expect(textVide('<!--0><!--1>')).toBe('<!--0><!--1>');
    expect(textVide('<!-- hidden words --> ab')).toBe(
      '<!-- hidden words --> <b>a</b>b',
    );
  });
});
