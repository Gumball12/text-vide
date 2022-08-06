const HTML_TAG_REGEX = /(<!--[\s\S]*?-->)|(<[^>]*>)/g;

export const useCheckIsHtmlTag = (text: string) => {
  const htmlTagMatchList = text.matchAll(HTML_TAG_REGEX);
  const htmlTagRangeList = getHtmlTagRangeList(htmlTagMatchList);
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

const getHtmlTagRangeList = (
  htmlTagMatchList: IterableIterator<RegExpMatchArray>,
) =>
  [...htmlTagMatchList].map(htmlTagMatch => {
    const startIndex = htmlTagMatch.index!;
    const [tag] = htmlTagMatch;
    const { length: tagLength } = tag;

    return [startIndex, startIndex + tagLength - 1];
  });
