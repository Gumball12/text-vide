import { Options } from './types';
import getOptions from './getOptions';
import getFixationLength from './getFixationLength';
import getHighlightedText from './getHighlightedText';

const CONVERTIBLE_REGEX = /(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu;

export const textVide = (text: string, maybeOptions: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const { fixationPoint, sep } = getOptions(maybeOptions);
  const convertibleMatchList = text.matchAll(CONVERTIBLE_REGEX);

  let result = '';
  let lastMatchedIndex = 0;

  for (const match of convertibleMatchList) {
    const startIndex = match.index!;
    const endIndex = startIndex + getFixationLength(match[0], fixationPoint);

    const plainText = text.slice(lastMatchedIndex, startIndex);
    result += plainText;

    if (startIndex !== endIndex) {
      result += getHighlightedText(text.slice(startIndex, endIndex), sep);
    }

    lastMatchedIndex = endIndex;
  }

  const remainText = text.slice(lastMatchedIndex);
  return result + remainText;
};
