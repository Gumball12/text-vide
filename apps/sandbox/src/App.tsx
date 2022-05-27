import {
  Box,
  SvgIcon,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Html as HTMLIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { bionicReading } from 'bionic-reading/src';

const DEBOUNCE_TIMEOUT = 400;
const INITIAL_INPUT =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const MarkdownIcon = () => (
  <SvgIcon width="208" height="128" viewBox="0 0 208 128">
    <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z" />
  </SvgIcon>
);

const App = () => {
  const [renderStyle, setRenderStyle] = useState<'html' | 'markdown'>('html');
  const [tagStyle, setTagStyle] = useState<string>('b');
  const [mdStyle, setMdStyle] = useState<string>('**');
  const [input, setInput] = useState<string>(INITIAL_INPUT);
  const [bionicReadingText, setBionicReadingText] = useState<string>('');

  useEffect(() => {
    const store = setTimeout(() => {
      const options = {
        markdown: renderStyle === 'markdown',
        highlightedTag: tagStyle,
        markdownStyle: mdStyle,
      };

      const bionicReadingText = bionicReading(input, options);
      setBionicReadingText(bionicReadingText);
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(store);
  }, [renderStyle, tagStyle, mdStyle, input]);

  return (
    <div className="max-w-4xl m-auto sm:px-8 px-4 py-4 leading-tight">
      <header className="mb-3">
        <h1 className="text-2xl">Bionic Reading Sandbox</h1>
      </header>

      <main className="flex flex-col gap-y-8">
        <section>
          <section className="mb-4">
            <ToggleButtonGroup
              exclusive
              color="primary"
              value={renderStyle}
              onChange={(_, value) => value && setRenderStyle(value)}
            >
              <ToggleButton value="html">
                <HTMLIcon />
              </ToggleButton>
              <ToggleButton value="markdown">
                <MarkdownIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </section>

          <section className="flex gap-x-2">
            <TextField
              label="HTML Tag Style"
              size="small"
              value={tagStyle}
              onChange={({ target: { value } }) => setTagStyle(value)}
              disabled={renderStyle !== 'html'}
            />
            <TextField
              label="Markdown Style"
              size="small"
              value={mdStyle}
              onChange={({ target: { value } }) => setMdStyle(value)}
              disabled={renderStyle !== 'markdown'}
            />
          </section>
        </section>

        <section>
          <p className="section-name">Input</p>
          <textarea
            className="border-gray-100 resize-y w-full rounded outline-none p-2 text-lg shadow-md focus:shadow-lg transition-shadow-300 min-h-48"
            value={input}
            onInput={({ currentTarget: { value } }) => setInput(value)}
          />
        </section>

        <section>
          <p className="section-name">Rendered</p>
          <Box className="rendered-box">
            <pre
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: bionicReadingText }}
            />
          </Box>
        </section>

        <section>
          <p className="section-name">Raw Data</p>
          <Box className="rendered-box">
            <pre className="whitespace-pre-wrap text-sm">
              {bionicReadingText}
            </pre>
          </Box>
        </section>
      </main>

      <footer className="absolute right-4 bottom-4">
        <a
          className="text-gray-400 underline-gray-300"
          href="https://github.com/Gumball12/bionic-reading"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
