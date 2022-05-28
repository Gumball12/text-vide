import isEmpty from './isEmpty';

export default (maybeNumberString: unknown) =>
  !isEmpty(maybeNumberString) &&
  typeof maybeNumberString === 'string' &&
  !isNaN(Number(maybeNumberString));
