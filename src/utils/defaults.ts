import isEmptyString from './isEmptyString';
import omitBy from './omitBy';

export default <T>(origin: Partial<T>, defaultValue: T): T => ({
  ...defaultValue,
  ...omitBy(origin, isEmptyString),
});
