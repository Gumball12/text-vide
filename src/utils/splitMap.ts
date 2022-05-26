export default (
  text: string,
  delimiter: string | RegExp,
  separator: string,
  callback: (value: string) => string,
) => text.split(delimiter).map(callback).join(separator);
