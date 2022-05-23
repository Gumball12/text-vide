import getBionicWordConvertor from './getBionicWordConvertor';
import { Options } from './types';
import splitWord from './utils/splitWord';

const convertParagraphToBionicParagraph =
  (bionicWordConvertor: ReturnType<typeof getBionicWordConvertor>) =>
  (paragraph: string) => {
    const wordList = paragraph.split(' ');
    const splittedWordList = wordList.map(splitWord);
    const bionicWordList = splittedWordList.map(bionicWordConvertor);

    return bionicWordList.join(' ');
  };

export const bionicReading = (text: string, options: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const bionicWordConvertor = getBionicWordConvertor(options);
  const bionicParagraphConvertor =
    convertParagraphToBionicParagraph(bionicWordConvertor);

  const paragraphList = text.split('\n');
  const bionicParagraphList = paragraphList.map(bionicParagraphConvertor);

  const bionicText = bionicParagraphList.join('\n');
  return bionicText;
};
