import { MatchRange } from './utils';

const getHtmlTagRangeList = (text: string): MatchRange[] => {
  const htmlTagRangeList: MatchRange[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const openIndex = text.indexOf('<', cursor);
    if (openIndex === -1) {
      break;
    }

    if (text.startsWith('<!--', openIndex)) {
      const closeIndex = text.indexOf('-->', openIndex + 4);
      if (closeIndex === -1) {
        break;
      }

      htmlTagRangeList.push([openIndex, closeIndex + 2]);
      cursor = closeIndex + 3;
      continue;
    }

    const closeIndex = text.indexOf('>', openIndex + 1);
    if (closeIndex === -1) {
      break;
    }

    if (closeIndex > openIndex + 1) {
      htmlTagRangeList.push([openIndex, closeIndex]);
    }

    cursor = closeIndex + 1;
  }

  return htmlTagRangeList;
};

export const useCheckIsHtmlTag = (text: string) => {
  const htmlTagRangeList = getHtmlTagRangeList(text);
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
