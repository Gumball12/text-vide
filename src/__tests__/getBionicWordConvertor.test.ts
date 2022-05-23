import { describe, expect, it } from 'vitest';
import getBionicWordConvertor from '../getBionicWordConvertor';

describe('test getBionicConvertor function', () => {
  it('test that it returns the correct value :: 1-len word', () => {
    const options = {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    };

    const bionicWordConvertor = getBionicWordConvertor(options);

    const plainSplittedWord: [string, string] = ['a', ''];
    const expectedBionicWord = '<b>a</b>';

    expect(bionicWordConvertor(plainSplittedWord)).toBe(expectedBionicWord);
  });

  it('test that it returns the correct value :: random-len word', () => {
    const options = {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    };

    const bionicWordConvertor = getBionicWordConvertor(options);

    const plainSplittedWord = (0xffffff * Math.random())
      .toString(16)
      .slice(Math.floor(Math.random() * 3) + 1)
      .split('.') as [string, string];
    const expectedBionicWord = `<b>${plainSplittedWord[0]}</b>${plainSplittedWord[1]}`;

    expect(bionicWordConvertor(plainSplittedWord)).toBe(expectedBionicWord);
  });

  it('test returns the correct value (markdown)', () => {
    const options = {
      highlightTag: 'b',
      markdown: true, // changed
      markdownStyle: '**',
    };

    const bionicWordConvertor = getBionicWordConvertor(options);

    const plainSplittedWord: [string, string] = ['ab', 'c'];
    const expectedBionicWord = '**ab**c';

    expect(bionicWordConvertor(plainSplittedWord)).toBe(expectedBionicWord);
  });

  it('test returns the correct value (markdown w/ style)', () => {
    const options = {
      highlightTag: 'b',
      markdown: true,
      markdownStyle: '_', // changed
    };

    const bionicWordConvertor = getBionicWordConvertor(options);

    const plainSplittedWord: [string, string] = ['ab', 'c'];
    const expectedBionicWord = '_ab_c';

    expect(bionicWordConvertor(plainSplittedWord)).toBe(expectedBionicWord);
  });
});
