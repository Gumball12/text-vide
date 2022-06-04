export default (text: string, sep: string | string[]) => {
  if (typeof sep === 'string') {
    return `${sep}${text}${sep}`;
  }

  return `${sep[0]}${text}${sep[1]}`;
};
