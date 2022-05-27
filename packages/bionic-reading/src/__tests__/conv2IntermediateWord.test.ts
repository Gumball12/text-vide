import { describe, expect, it } from 'vitest';
import conv2IntermediateWord from '../conv2IntermediateWord';

const splitByLen = (
  text: string,
  firstLength: number,
  lastLength: number,
): [string, string, string] => [
  text.slice(0, firstLength),
  text.slice(firstLength, text.length - lastLength),
  text.slice(text.length - lastLength),
];

const t = (text: string, expected: [string, string, string]) =>
  expect(conv2IntermediateWord(text)).toEqual(expected);

describe('test conv2IntermediateWord util function', () => {
  it('pass len 4 word', () => {
    const text = 'abcd';
    const expected = splitByLen(text, 0, 1); // ['', 'abc', 'd']
    t(text, expected);
  });

  it('pass len 1 word', () => {
    const text = 'a';
    const expected = splitByLen(text, 0, 1); // ['', '', 'a']
    t(text, expected);
  });

  it('pass 0 len word', () => {
    const text = '';
    const expected = splitByLen(text, 0, 0); // ['', '', '']
    t(text, expected);
  });
});

describe('special chars', () => {
  it('plain word :: OOOOO', () => {
    const text = 'apple';
    const expected = splitByLen(text, 0, 2); // ['', 'app', 'le']
    t(text, expected);
  });

  it('special char :: OOOOOS', () => {
    const text = 'apple;';
    const expected = splitByLen(text, 0, 3); // ['', 'app', 'le;']
    t(text, expected);
  });

  it('special char :: OOOOSO', () => {
    const text = 'appl;e';
    const expected = splitByLen(text, 0, 2); // ['', 'appl', ';e']
    t(text, expected);
  });

  it('special char :: OOOSOO', () => {
    const text = 'app;le';
    const expected = splitByLen(text, 0, 2); // ['', 'app;', 'le']
    t(text, expected);
  });

  it('special char :: OOSOOO', () => {
    const text = 'ap;ple';
    const expected = splitByLen(text, 0, 2); // ['', 'ap;p', 'le']
    t(text, expected);
  });

  it('special char :: OSOOOO', () => {
    const text = 'a;pple';
    const expected = splitByLen(text, 0, 2); // ['', 'a;pp', 'le']
    t(text, expected);
  });

  it('special char :: SOOOOO', () => {
    const text = ';apple';
    const expected = splitByLen(text, 1, 2); // [';', 'app', 'le']
    t(text, expected);
  });

  it('special char :: OOOOSSO', () => {
    const text = 'appl;;e';
    const expected = splitByLen(text, 0, 2); // ['', 'appl;', ';e']
    t(text, expected);
  });

  it('special char :: OSOSOSOSO', () => {
    const text = 'a;p;p;l;e';
    const expected = splitByLen(text, 0, 2); // ['', 'a;p;p;l', ';e']
    t(text, expected);
  });

  it('special char :: OSSOOOSSO', () => {
    const text = 'a;;ppl;e';
    const expected = splitByLen(text, 0, 2); // ['', 'a;;ppl', ';e']
    t(text, expected);
  });

  it('special char :: SSSSS', () => {
    const text = ';;;;;';
    const expected = splitByLen(text, 0, 5); // ['', '', ';;;;;']
    t(text, expected);
  });

  it('complex special char', () => {
    const text = `;:.';!.@;#.$;%.;`;
    const expected = splitByLen(text, 0, 16); // ['', '', ';:.';!.@;#.$;%.;']
    t(text, expected);
  });
});

// [0, 4] (4) = -1
// [5, 12] (7) = -2
// [13, 16] (4) = -3
// [17, 24] (6) = -4
// [25, 29] (4) = -5
// [30, 35] (5) = -6
// [36, 42] (6) = -7
// [43, 48] (5) = -8
// [49, infty] (don't care) = -9
describe('longest word', () => {
  it('51 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconiosisaaaaa';
    const expected = splitByLen(text, 0, 9); // ['', 'Pneumonoultramicroscopicsilicovolcanoconi', 'osisaaaaa']
    t(text, expected);
  });

  it('51 len (different letters)', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconiosisapple';
    const expected = splitByLen(text, 0, 9); // ['', 'Pneumonoultramicroscopicsilicovolcanoconi', 'osisapple']
    t(text, expected);
  });

  it('45 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
    const expected = splitByLen(text, 0, 8); // ['', 'Pneumonoultramicroscopicsilicovolcano', 'coniosis']
    t(text, expected);
  });

  it('44 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconiosi';
    const expected = splitByLen(text, 0, 8); // ['', 'Pneumonoultramicroscopicsilicovolcan', 'oconiosi']
    t(text, expected);
  });

  it('43 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconios';
    const expected = splitByLen(text, 0, 8); // ['', 'Pneumonoultramicroscopicsilicovolca', 'noconios']
    t(text, expected);
  });

  it('42 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconio';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilicovolca', 'noconio']
    t(text, expected);
  });

  it('41 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoconi';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilicovolc', 'anoconi']
    t(text, expected);
  });

  it('40 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanocon';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilicovol', 'canocon']
    t(text, expected);
  });

  it('39 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoco';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilicovo', 'lcanoco']
    t(text, expected);
  });

  it('38 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcanoc';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilicov', 'olcanoc']
    t(text, expected);
  });

  it('37 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcano';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilico', 'volcano']
    t(text, expected);
  });

  it('36 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolcan';
    const expected = splitByLen(text, 0, 7); // ['', 'Pneumonoultramicroscopicsilic', 'ovolcan']
    t(text, expected);
  });

  it('35 len', () => {
    const text = 'Pneumonoultramicroscopicsilicovolca';
    const expected = splitByLen(text, 0, 6); // ['', 'Pneumonoultramicroscopicsilic', 'ovolca']
    t(text, expected);
  });

  it('30 len', () => {
    const text = 'Pneumonoultramicroscopicsilico';
    const expected = splitByLen(text, 0, 6); // ['', 'Pneumonoultramicroscopic', 'silico']
    t(text, expected);
  });

  it('29 len', () => {
    const text = 'Pneumonoultramicroscopicsilic';
    const expected = splitByLen(text, 0, 5); // ['', 'Pneumonoultramicroscopic', 'silic']
    t(text, expected);
  });

  it('25 len', () => {
    const text = 'Pneumonoultramicroscopics';
    const expected = splitByLen(text, 0, 5); // ['', 'Pneumonoultramicrosc', 'opics']
    t(text, expected);
  });

  it('24 len', () => {
    const text = 'Pneumonoultramicroscopic';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultramicrosc', 'opic']
    t(text, expected);
  });

  it('21 len', () => {
    const text = 'Pneumonoultramicrosco';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultramicr', 'osco']
    t(text, expected);
  });

  it('20 len', () => {
    const text = 'Pneumonoultramicrosc';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultramic', 'rosc']
    t(text, expected);
  });

  it('19 len', () => {
    const text = 'Pneumonoultramicros';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultrami', 'cros']
    t(text, expected);
  });

  it('18 len', () => {
    const text = 'Pneumonoultramicro';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultram', 'icro']
    t(text, expected);
  });

  it('17 len', () => {
    const text = 'Pneumonoultramicro';
    const expected = splitByLen(text, 0, 4); // ['', 'Pneumonoultram', 'icro']
    t(text, expected);
  });

  it('13 len', () => {
    const text = 'Pneumonoultra';
    const expected = splitByLen(text, 0, 3); // ['', 'Pneumonoul', 'tra']
    t(text, expected);
  });

  it('12 len', () => {
    const text = 'Pneumonoultr';
    const expected = splitByLen(text, 0, 2); // ['', 'Pneumonoul', 'tr']
    t(text, expected);
  });
});
