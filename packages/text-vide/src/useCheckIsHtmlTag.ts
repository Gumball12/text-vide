import { extractMatchRangeList } from './utils';

const HTML_TAG_REGEX = /(<!--[^]*?-->)|(<[^>]+>)/g;

export const useCheckIsHtmlTag = (text: string) => {
  const htmlTagMatchList = text.matchAll(HTML_TAG_REGEX);
  const htmlTagRangeList = extractMatchRangeList(htmlTagMatchList);
  const reversedHtmlTagRangeList = htmlTagRangeList.reverse();

  return (match: RegExpMatchArray) => {
    const startIndex = match.index!;
    const tagRange = reversedHtmlTagRangeList.find(
      ([rangeStart]) => startIndex > rangeStart,
    );

    if (!tagRange) {
      return false;
    }

    const [, rangeEnd] = tagRange;
    const isInclude = startIndex < rangeEnd;
    return isInclude;
  };
};
