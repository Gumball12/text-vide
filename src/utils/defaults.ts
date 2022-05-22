export default <T = unknown>(origin: Partial<T>, defaultValue: T) => ({
  ...defaultValue,
  ...origin,
});
