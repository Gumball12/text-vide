import { Options } from './types';
import defaults from 'utils/defaults';

const DEFAULT_SEP = ['<b>', '</b>'];
const DEFAULT_FIXATION_POINT = 1;
const DEFAULT_IGNORE_HTML_TAG = true;
const DEFAULT_IGNORE_HTML_ENTITY = true;

export default (maybeOptions: Partial<Options>): Options =>
  defaults(maybeOptions, {
    sep: DEFAULT_SEP,
    fixationPoint: DEFAULT_FIXATION_POINT,
    ignoreHtmlTag: DEFAULT_IGNORE_HTML_TAG,
    ignoreHtmlEntity: DEFAULT_IGNORE_HTML_ENTITY,
  });
