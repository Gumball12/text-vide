import isEmpty from './isEmpty';
import omitBy from './omitBy';

export default <T>(origin: Partial<T>, defaultValue: T): T => ({
  ...defaultValue,
  ...omitBy(origin, isEmpty),
});
