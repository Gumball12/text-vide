export default (word: string): [string, string] => {
  const { length } = word;
  const midPoint = Math.round(length / 2);
  const first = word.slice(0, midPoint);
  const second = word.slice(midPoint);

  return [first, second];
};
