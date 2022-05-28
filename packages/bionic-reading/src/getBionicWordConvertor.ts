import { Options } from './types';

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

export default ({ highlightTag, markdown, markdownStyle }: Options) => {
  if (markdown) {
    return generateBionicWordConvertor(markdownStyle);
  }

  return generateBionicWordConvertor(`<${highlightTag}>`, `</${highlightTag}>`);
};
