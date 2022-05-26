import getBionicWordConvertor from './getBionicWordConvertor';
import { Options } from './types';
import conv2IntermediateWord from './conv2IntermediateWord';

const convertParagraphToBionicParagraph =
  (bionicWordConvertor: ReturnType<typeof getBionicWordConvertor>) =>
  (paragraph: string) => {
    const wordList = paragraph.split(' ');
    const dashedWordList = wordList.map(word => word.split('-'));

    const splittedDashedWordList = dashedWordList.map(dashedWord =>
      dashedWord.map(conv2IntermediateWord),
    );
    const bionicSplittedDashedWordList = splittedDashedWordList.map(
      splittedDashedWord => splittedDashedWord.map(bionicWordConvertor),
    );

    const dashedBionicWordList = bionicSplittedDashedWordList.map(
      bionicSplittedDashedWord => bionicSplittedDashedWord.join('-'),
    );
    return dashedBionicWordList.join(' ');
  };

export const bionicReading = (text: string, options: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const bionicWordConvertor = getBionicWordConvertor(options);
  const bionicParagraphConvertor =
    convertParagraphToBionicParagraph(bionicWordConvertor);

  const paragraphList = text.split(/\r?\n/);
  const bionicParagraphList = paragraphList.map(bionicParagraphConvertor);

  const bionicText = bionicParagraphList.join('\n');
  return bionicText;
};
