export default <T extends object>(
  obj: T,
  omitFilter: (value: T[keyof typeof obj]) => boolean,
) => {
  const keyList = Object.keys(obj) as (keyof typeof obj)[];
  return keyList.reduce((obj, key) => {
    if (omitFilter(obj[key])) {
      delete obj[key];
    }

    return obj;
  }, obj);
};
