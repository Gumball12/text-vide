import { beforeAll, describe, expect, it } from 'vitest';
import conv2IntermediateWord from '../conv2IntermediateWord';
import getFixationPointSheet from './utils/getFixationPointLastLength';

const splitByLen = (
  text: string,
  lastLength: number,
  firstLength = 0,
): [string, string, string] => [
  text.slice(0, firstLength),
  text.slice(firstLength, text.length - lastLength),
  text.slice(text.length - lastLength),
];

const t = (text: string, expected: [string, string, string]) =>
  expect(conv2IntermediateWord(text, 1)).toEqual(expected);

describe('test conv2IntermediateWord util function', () => {
  it('pass len 4 word', () => {
    const text = 'abcd';
    const expected = splitByLen(text, 1); // ['', 'abc', 'd']
    t(text, expected);
  });

  it('pass len 1 word', () => {
    const text = 'a';
    const expected = splitByLen(text, 1); // ['', '', 'a']
    t(text, expected);
  });

  it('pass 0 len word', () => {
    const text = '';
    const expected = splitByLen(text, 0); // ['', '', '']
    t(text, expected);
  });
});

describe('special chars', () => {
  it('plain word :: OOOOO', () => {
    const text = 'apple';
    const expected = splitByLen(text, 2); // ['', 'app', 'le']
    t(text, expected);
  });

  it('special char :: OOOOOS', () => {
    const text = 'apple;';
    const expected = splitByLen(text, 3); // ['', 'app', 'le;']
    t(text, expected);
  });

  it('special char :: OOOOSO', () => {
    const text = 'appl;e';
    const expected = splitByLen(text, 2); // ['', 'appl', ';e']
    t(text, expected);
  });

  it('special char :: OOOSOO', () => {
    const text = 'app;le';
    const expected = splitByLen(text, 2); // ['', 'app;', 'le']
    t(text, expected);
  });

  it('special char :: OOSOOO', () => {
    const text = 'ap;ple';
    const expected = splitByLen(text, 2); // ['', 'ap;p', 'le']
    t(text, expected);
  });

  it('special char :: OSOOOO', () => {
    const text = 'a;pple';
    const expected = splitByLen(text, 2); // ['', 'a;pp', 'le']
    t(text, expected);
  });

  it('special char :: SOOOOO', () => {
    const text = ';apple';
    const expected = splitByLen(text, 2, 1); // [';', 'app', 'le']
    t(text, expected);
  });

  it('special char :: OOOOSSO', () => {
    const text = 'appl;;e';
    const expected = splitByLen(text, 2); // ['', 'appl;', ';e']
    t(text, expected);
  });

  it('special char :: OSOSOSOSO', () => {
    const text = 'a;p;p;l;e';
    const expected = splitByLen(text, 2); // ['', 'a;p;p;l', ';e']
    t(text, expected);
  });

  it('special char :: OSSOOOSSO', () => {
    const text = 'a;;ppl;e';
    const expected = splitByLen(text, 2); // ['', 'a;;ppl', ';e']
    t(text, expected);
  });

  it('special char :: SSSSS', () => {
    const text = ';;;;;';
    const expected = splitByLen(text, 5); // ['', '', ';;;;;']
    t(text, expected);
  });

  it('complex special char', () => {
    const text = `;:.';!.@;#.$;%.;`;
    const expected = splitByLen(text, 16); // ['', '', ';:.';!.@;#.$;%.;']
    t(text, expected);
  });
});

const getText = (length: number) => Array(length).fill('a').join('');

describe('fixation-points', async () => {
  const lastLength = {
    fp1: [] as number[],
    fp2: [] as number[],
    fp3: [] as number[],
    fp4: [] as number[],
    fp5: [] as number[],
  };

  beforeAll(async () => {
    const { fp1, fp2, fp3, fp4, fp5 } = await getFixationPointSheet();
    lastLength.fp1 = fp1;
    lastLength.fp2 = fp2;
    lastLength.fp3 = fp3;
    lastLength.fp4 = fp4;
    lastLength.fp5 = fp5;
  });

  it('fixation 1', () => {
    const { fp1 } = lastLength;

    for (let len = 1; len <= 50; len++) {
      const text = getText(len);
      const expected = splitByLen(text, fp1[len - 1]);
      expect(conv2IntermediateWord(text, 1)).toEqual(expected);
    }
  });

  it('fixation 2', () => {
    const { fp2 } = lastLength;

    for (let len = 1; len <= 50; len++) {
      const text = getText(len);
      const expected = splitByLen(text, fp2[len - 1]);
      expect(conv2IntermediateWord(text, 2)).toEqual(expected);
    }
  });

  it('fixation 3', () => {
    const { fp3 } = lastLength;

    for (let len = 1; len <= 50; len++) {
      const text = getText(len);
      const expected = splitByLen(text, fp3[len - 1]);
      expect(conv2IntermediateWord(text, 3)).toEqual(expected);
    }
  });

  it('fixation 4', () => {
    const { fp4 } = lastLength;

    for (let len = 1; len <= 50; len++) {
      const text = getText(len);
      const expected = splitByLen(text, fp4[len - 1]);
      expect(conv2IntermediateWord(text, 4)).toEqual(expected);
    }
  });

  it('fixation 5', () => {
    const { fp5 } = lastLength;

    for (let len = 1; len <= 50; len++) {
      const text = getText(len);
      const expected = splitByLen(text, fp5[len - 1]);
      expect(conv2IntermediateWord(text, 5)).toEqual(expected);
    }
  });
});
