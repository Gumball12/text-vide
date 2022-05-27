import {
  DEFAULT_HIGHLIGHT_TAG,
  DEFAULT_MARKDOWN,
  DEFAULT_MARKDOWN_STYLE,
} from './constants';
import { Options } from './types';
import defaults from './utils/defaults';

const getGuaranteedOptions = (options: Partial<Options>): Options =>
  defaults(options, {
    highlightTag: DEFAULT_HIGHLIGHT_TAG,
    markdown: DEFAULT_MARKDOWN,
    markdownStyle: DEFAULT_MARKDOWN_STYLE,
  });

const getStringElement =
  (begin: string, end?: string) => (textContent: string) => {
    if (!textContent.length) {
      return '';
    }

    return `${begin}${textContent}${end ?? begin}`;
  };

const generateBionicWordConvertor =
  (begin: string, end?: string) =>
  ([firstText, middleText, lastText]: [string, string, string]) =>
    `${firstText}${getStringElement(begin, end)(middleText)}${lastText}`;

export default (options: Partial<Options>) => {
  const { highlightTag, markdown, markdownStyle } =
    getGuaranteedOptions(options);

  if (markdown) {
    return generateBionicWordConvertor(markdownStyle);
  }

  return generateBionicWordConvertor(`<${highlightTag}>`, `</${highlightTag}>`);
};
