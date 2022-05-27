import getBionicWordConvertor from './getBionicWordConvertor';
import { Options } from './types';
import conv2IntermediateWord from './conv2IntermediateWord';
import splitMap from './utils/splitMap';

export const bionicReading = (text: string, options: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const bionicWordConvertor = getBionicWordConvertor(options);

  const syllableToBionic = (syllable: string) => {
    const intermediate = conv2IntermediateWord(syllable);
    return bionicWordConvertor(intermediate);
  };
  const wordToSyllable = (word: string) =>
    splitMap(word, '-', '-', syllableToBionic);
  const paragraphToWord = (paragraph: string) =>
    splitMap(paragraph, ' ', ' ', wordToSyllable);
  const textToParagraph = (text: string) =>
    splitMap(text, /\r?\n/, '\n', paragraphToWord);

  const bionicText = textToParagraph(text);
  return bionicText;
};
