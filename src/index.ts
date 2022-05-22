import defaults from './utils/defaults';

type Options = Partial<{
  highlightTag: string;
}>;

const splitWord = (word: string) => {
  const { length } = word;
  const midPoint = Math.round(length / 2);
  const first = word.slice(0, midPoint);
  const second = word.slice(midPoint);

  return [first, second];
};

const getTagGenerator = (highlightTag: string) => (text: string) =>
  `<${highlightTag}>${text}</${highlightTag}>`;

export const bionicReading = (text: string, options: Options = {}) => {
  if (!text?.length) {
    return '';
  }

  const { highlightTag } = defaults<Required<Options>>(options, {
    highlightTag: 'b',
  });

  const getTag = getTagGenerator(highlightTag);

  const wordList = text.split(' ');
  const bionicWordList = wordList
    .map(splitWord)
    .map(([first, second]) => `${getTag(first)}${second}`);

  return bionicWordList.join(' ');
};
