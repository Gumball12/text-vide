import isNumberString from './utils/isNumberString';

type IntermediateWord = [string, string, string];

const WORD_WITHOUT_SPECIAL_CHAR_REGEX =
  /[^._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/;
const CONVERTIBLE_WORD_REGEX_UPPER_LEN_2 = new RegExp(
  [
    WORD_WITHOUT_SPECIAL_CHAR_REGEX.source,
    '.*',
    WORD_WITHOUT_SPECIAL_CHAR_REGEX.source,
  ].join(''),
);

const FIXATION_POINT_1_BOUNDARY = [0, 4, 12, 17, 24, 29, 35, 42, 48];
const FIXATION_POINT_2_BOUNDARY = [
  1, 2, 7, 10, 13, 14, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49,
];
const FIXATION_POINT_3_BOUNDARY = [
  1, 2, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41,
  43, 45, 47, 49,
];
const FIXATION_POINT_4_BOUNDARY = [
  0, 2, 4, 5, 6, 8, 9, 11, 14, 15, 17, 18, 20, 0, 21, 23, 24, 26, 27, 29, 30,
  32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48,
];
const FIXATION_POINT_5_BOUNDARY = [
  0, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 17, 19, 20, 21, 23, 24, 25, 26, 28,
  29, 30, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48,
];

const getBoundaryList = (fixationPoint: number) => {
  if (fixationPoint === 2) {
    return FIXATION_POINT_2_BOUNDARY;
  }

  if (fixationPoint === 3) {
    return FIXATION_POINT_3_BOUNDARY;
  }

  if (fixationPoint === 4) {
    return FIXATION_POINT_4_BOUNDARY;
  }

  if (fixationPoint === 5) {
    return FIXATION_POINT_5_BOUNDARY;
  }

  return FIXATION_POINT_1_BOUNDARY;
};

const getSplitPoint = (length: number, fixationPoint: number) => {
  const boundaryList = getBoundaryList(fixationPoint);
  const boundaryIndex = boundaryList.findIndex(boundary => length <= boundary);

  let secondLength = boundaryIndex;

  if (boundaryIndex === -1) {
    const maximumLength = boundaryList.length;
    secondLength = maximumLength;
  }

  return Math.max(length - secondLength, 0);
};

const getConvertibleWord = (word: string) => {
  if (isNumberString(word)) {
    return '';
  }

  let convertibleWord: string | undefined;

  if (word.length <= 1) {
    convertibleWord = word.match(WORD_WITHOUT_SPECIAL_CHAR_REGEX)?.[0];
  } else {
    convertibleWord = word.match(CONVERTIBLE_WORD_REGEX_UPPER_LEN_2)?.[0];
  }

  if (convertibleWord && isNumberString(convertibleWord)) {
    return '';
  }

  return convertibleWord ?? '';
};

export default (word: string, fixationPoint: number): IntermediateWord => {
  const convertibleWord = getConvertibleWord(word);
  const { length } = convertibleWord;

  const splitPoint = getSplitPoint(length, fixationPoint);
  const firstEndIndex = word.indexOf(convertibleWord);
  const lastStartIndex = firstEndIndex + splitPoint;

  const first = word.slice(0, firstEndIndex);
  const middle = convertibleWord.slice(0, splitPoint);
  const last = word.slice(lastStartIndex);

  return [first, middle, last];
};
