import {
  DEFAULT_HIGHLIGHT_TAG,
  DEFAULT_MARKDOWN,
  DEFAULT_MARKDOWN_STYLE,
} from './constants';
import { Options } from './types';
import defaults from './utils/defaults';

const getGuaranteedOptions = (options: Partial<Options>): Options =>
  defaults<Options>(options, {
    highlightTag: DEFAULT_HIGHLIGHT_TAG,
    markdown: DEFAULT_MARKDOWN,
    markdownStyle: DEFAULT_MARKDOWN_STYLE,
  });

const generateBionicWordConvertor =
  (begin: string, end?: string) =>
  ([firstText, secondText]: [string, string]) => {
    if (!firstText?.length) {
      return '';
    }

    return `${begin}${firstText}${end ?? begin}${secondText}`;
  };

export default (options: Partial<Options>) => {
  const { highlightTag, markdown, markdownStyle } =
    getGuaranteedOptions(options);

  if (markdown) {
    return generateBionicWordConvertor(markdownStyle);
  }

  return generateBionicWordConvertor(`<${highlightTag}>`, `</${highlightTag}>`);
};
