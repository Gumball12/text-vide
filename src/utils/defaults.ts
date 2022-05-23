export default <T>(origin: Partial<T>, defaultValue: T): T => ({
  ...defaultValue,
  ...origin,
});
