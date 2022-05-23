/* eslint-disable */

import './reset.css';
import './style.css';
import { bionicReading } from '../../src';

let options = {
  markdown: false,
  highlightTag: 'b',
  markdownStyle: '**',
};

const paragraph = document.querySelector('#paragraph')! as HTMLTextAreaElement;
paragraph.value =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const getText = () => paragraph.value;

const rendered = document.querySelector('#rendered')!;
const renderedRaw = document.querySelector('#rendered-raw')!;

const updateRender = (() => {
  let stored: number | undefined;

  return () => {
    if (stored) {
      cancelAnimationFrame(stored);
    }

    stored = requestAnimationFrame(() => {
      rendered.innerHTML = bionicReading(getText(), options);
      renderedRaw.textContent = bionicReading(getText(), options);
      stored = undefined;
    });
  };
})();

paragraph.addEventListener('input', updateRender);

const renderStyle = document.querySelector('#render-style')!;
renderStyle.addEventListener('click', ({ target }) => {
  if (!target || !(target instanceof HTMLInputElement)) {
    return;
  }

  const markdown = target.value === 'markdown';
  options.markdown = markdown;

  updateRender();
});

const domTagStyle = document.querySelector('#dom-tag-style')!;
domTagStyle.addEventListener('input', ({ target }) => {
  const { value: highlightTag } = target as HTMLInputElement;
  options.highlightTag = highlightTag;
  updateRender();
});

const markdownStyle = document.querySelector('#markdown-style')!;
markdownStyle.addEventListener('input', ({ target }) => {
  const { value: markdownStyle } = target as HTMLInputElement;
  options.markdownStyle = markdownStyle;
  updateRender();
});

updateRender();
