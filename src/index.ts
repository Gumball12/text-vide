import defaults from './utils/defaults';
import splitWord from './utils/splitWord';

type Options = Partial<{
  highlightTag: string;
  markdown: boolean;
  markdownStyle: string;
}>;

const getBionicConvertor =
  (begin: string, end?: string) =>
  ([firstText, secondText]: [string, string]) =>
    `${begin}${firstText}${end ?? begin}${secondText}`;

export const bionicReading = (text: string, options: Options = {}) => {
  if (!text?.length) {
    return '';
  }

  const { highlightTag, markdown, markdownStyle } = defaults<Required<Options>>(
    options,
    {
      highlightTag: 'b',
      markdown: false,
      markdownStyle: '**',
    },
  );

  let bionicConvertor = getBionicConvertor(
    `<${highlightTag}>`,
    `</${highlightTag}>`,
  );

  if (markdown) {
    bionicConvertor = getBionicConvertor(markdownStyle);
  }

  const wordList = text.split(' ');
  const bionicWordList = wordList.map(splitWord).map(bionicConvertor);

  return bionicWordList.join(' ');
};
