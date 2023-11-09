import { extractMatchRangeList } from './utils';

const HTML_ENTITY_REGEX = /(&[\w#]+;)/g;

export const useCheckIsHtmlEntity = (text: string) => {
  const htmlEntityMatchList = text.matchAll(HTML_ENTITY_REGEX);
  const htmlEntityRangeList = extractMatchRangeList(htmlEntityMatchList);
  const reversedHtmlEntityRangeList = htmlEntityRangeList.reverse();

  return (match: RegExpMatchArray) => {
    const startIndex = match.index!;
    const entityRange = reversedHtmlEntityRangeList.find(
      ([rangeStart]) => startIndex > rangeStart,
    );

    if (!entityRange) {
      return false;
    }

    const [, rangeEnd] = entityRange;
    const isInclude = startIndex < rangeEnd;
    return isInclude;
  };
};
