import { Options } from './types';
import getOptions from './getOptions';
import getFixationLength from './getFixationLength';
import getHighlightedText from './getHighlightedText';
import { useCheckIsHtmlTag } from './useCheckIsHtmlTag';
import { useCheckIsHtmlEntity } from './useCheckIsHtmlEntity';

const CONVERTIBLE_REGEX = /(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu;

export const textVide = (text: string, maybeOptions: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const { fixationPoint, sep, ignoreHtmlTag, ignoreHtmlEntity } =
    getOptions(maybeOptions);
  const convertibleMatchList = Array.from(text.matchAll(CONVERTIBLE_REGEX));

  let result = '';
  let lastMatchedIndex = 0;

  let checkIsHtmlTag: ReturnType<typeof useCheckIsHtmlTag> | undefined;
  if (ignoreHtmlTag) {
    checkIsHtmlTag = useCheckIsHtmlTag(text);
  }

  let checkIsHtmlEntity: ReturnType<typeof useCheckIsHtmlEntity> | undefined;
  if (ignoreHtmlEntity) {
    checkIsHtmlEntity = useCheckIsHtmlEntity(text);
  }

  for (const match of convertibleMatchList) {
    const isHtmlTag = checkIsHtmlTag?.(match);
    if (isHtmlTag) {
      continue;
    }

    const isHtmlEntity = checkIsHtmlEntity?.(match);
    if (isHtmlEntity) {
      continue;
    }

    const [matchedWord] = match;
    const startIndex = match.index!;
    const endIndex = startIndex + getFixationLength(matchedWord, fixationPoint);

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
