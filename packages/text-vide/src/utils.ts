export const extractMatchRangeList = (
  matchList: IterableIterator<RegExpMatchArray>,
) =>
  Array.from(matchList).map(match => {
    const startIndex = match.index!;
    const [matchedWord] = match;
    const { length: matchedWordLength } = matchedWord;

    return [startIndex, startIndex + matchedWordLength - 1];
  });
