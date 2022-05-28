import { Options } from './types';
import defaults from './utils/defaults';

const DEFAULT_HIGHLIGHT_TAG = 'b';
const DEFAULT_MARKDOWN = false;
const DEFAULT_MARKDOWN_STYLE = '**';
const DEFAULT_FIXATION_POINT = 1;

export default (maybeOptions: Partial<Options>): Options =>
  defaults(maybeOptions, {
    highlightTag: DEFAULT_HIGHLIGHT_TAG,
    markdown: DEFAULT_MARKDOWN,
    markdownStyle: DEFAULT_MARKDOWN_STYLE,
    fixationPoint: DEFAULT_FIXATION_POINT,
  });
