import defaults from './utils/defaults';

type Options = Partial<{
  highlightTag: string;
}>;

const splitWord = (word: string): [string, string] => {
  const { length } = word;
  const midPoint = Math.round(length / 2);
  const first = word.slice(0, midPoint);
  const second = word.slice(midPoint);

  return [first, second];
};

const getBionicConvertor =
  (begin: string, end?: string) =>
  ([firstText, secondText]: [string, string]) =>
    `${begin}${firstText}${end ?? begin}${secondText}`;

export const bionicReading = (text: string, options: Options = {}) => {
  if (!text?.length) {
    return '';
  }

  const { highlightTag } = defaults<Required<Options>>(options, {
    highlightTag: 'b',
  });

  const bionicConvertor = getBionicConvertor(
    `<${highlightTag}>`,
    `</${highlightTag}>`,
  );

  const wordList = text.split(' ');
  const bionicWordList = wordList.map(splitWord).map(bionicConvertor);

  return bionicWordList.join(' ');
};
