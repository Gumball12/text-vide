type IntermediateWord = [string, string, string];

const getSplitPoint = (length: number) => {
  const boundList = [4, 12, 16, 24, 29, 35, 42, 48];
  const boundIndex = boundList.findIndex(bound => length <= bound);

  let secondLength = boundIndex + 1;

  if (boundIndex === -1) {
    secondLength = 9;
  }

  return Math.max(length - secondLength, 0);
};

const getConvertibleWord = (word: string) =>
  word.match(/\w[\W|\w]*\w/)?.[0] ?? '';

export default (word: string): IntermediateWord => {
  const convertibleWord = getConvertibleWord(word);
  const { length } = convertibleWord;

  const splitPoint = getSplitPoint(length);
  const firstEndIndex = word.indexOf(convertibleWord);
  const lastStartIndex = firstEndIndex + splitPoint;

  const first = word.slice(0, firstEndIndex);
  const middle = convertibleWord.slice(0, splitPoint);
  const last = word.slice(lastStartIndex);

  return [first, middle, last];
};
