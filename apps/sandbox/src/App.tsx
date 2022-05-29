import {
  Box,
  Button,
  SvgIcon,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Html as HTMLIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { bionicReading } from 'bionic-reading';

const DEBOUNCE_TIMEOUT = 400;
const COPIED_EFFECT_DEBOUNCE_TIMEOUT = 1200;

const INITIAL_INPUT =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const MarkdownIcon = () => (
  <SvgIcon width="208" height="128" viewBox="0 0 208 128">
    <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z" />
  </SvgIcon>
);

type Edits = {
  renderStyle: 'html' | 'markdown';
  tagStyle: string;
  mdStyle: string;
  fixationPoint: string;
  input: string;
};

const defaultEdits: Edits = {
  renderStyle: 'html',
  tagStyle: 'b',
  mdStyle: '**',
  input: INITIAL_INPUT,
  fixationPoint: '1',
};

const storeEdits = ({
  renderStyle,
  tagStyle,
  mdStyle,
  input,
  fixationPoint,
}: Edits) => {
  const search = [
    `renderStyle=${encodeURIComponent(renderStyle)}`,
    `tagStyle=${encodeURIComponent(tagStyle)}`,
    `mdStyle=${encodeURIComponent(mdStyle)}`,
    `fixationPoint=${encodeURIComponent(fixationPoint)}`,
    `input=${encodeURIComponent(input)}`,
  ].join('&');

  // eslint-disable-next-line
  // @ts-ignore
  history.replaceState(null, null, `?${search}`);
};

const getEdits = (): Edits => {
  const maybeEditsString = location.search.slice(1);

  if (!maybeEditsString?.length) {
    return defaultEdits;
  }

  const maybeEdits = maybeEditsString.split('&').reduce((maybeEdits, str) => {
    const [maybeKey, maybeValue] = str.split('=');

    if (!maybeKey.length) {
      return maybeEdits;
    }

    const key = maybeKey as keyof Edits;
    const value = maybeValue ?? defaultEdits[key];

    if (!value) {
      return maybeEdits;
    }

    // eslint-disable-next-line
    // @ts-ignore
    maybeEdits[key] = decodeURIComponent(value);
    return maybeEdits;
  }, {} as Partial<Edits>);

  return {
    ...defaultEdits,
    ...maybeEdits,
  };
};

const initialEdits = getEdits();

const App = () => {
  const [renderStyle, setRenderStyle] = useState<'html' | 'markdown'>(
    initialEdits.renderStyle,
  );
  const [tagStyle, setTagStyle] = useState<string>(initialEdits.tagStyle);
  const [mdStyle, setMdStyle] = useState<string>(initialEdits.mdStyle);
  const [fixationPoint, setFixationPoint] = useState<string>(
    initialEdits.fixationPoint,
  );

  const [input, setInput] = useState<string>(initialEdits.input);
  const [bionicReadingText, setBionicReadingText] = useState<string>('');
  const [copiedEffect, setCopiedEffect] = useState<boolean>(false);

  useEffect(() => {
    const store = setTimeout(() => {
      const options = {
        markdown: renderStyle === 'markdown',
        highlightTag: tagStyle,
        markdownStyle: mdStyle,
        fixationPoint: parseInt(fixationPoint),
      };

      const bionicReadingText = bionicReading(input, options);
      setBionicReadingText(bionicReadingText);
      storeEdits({
        renderStyle,
        tagStyle,
        mdStyle,
        input,
        fixationPoint,
      });
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(store);
  }, [renderStyle, tagStyle, mdStyle, input, fixationPoint]);

  const copyUrl = () => {
    const { href: url } = location;
    navigator.clipboard.writeText(url);
    setCopiedEffect(true);
  };

  useEffect(() => {
    const store = setTimeout(
      () => setCopiedEffect(false),
      COPIED_EFFECT_DEBOUNCE_TIMEOUT,
    );

    return () => clearTimeout(store);
  }, [copiedEffect]);

  const reset = () => {
    const { renderStyle, tagStyle, mdStyle, input, fixationPoint } =
      defaultEdits;

    setRenderStyle(renderStyle);
    setTagStyle(tagStyle);
    setMdStyle(mdStyle);
    setInput(input);
    setFixationPoint(fixationPoint);
  };

  return (
    <div className="max-w-4xl m-auto sm:px-8 px-4 py-4 leading-tight">
      <header className="flex justify-between mb-3">
        <h1 className="text-2xl">Bionic Reading Sandbox</h1>
        <Button variant="outlined" onClick={copyUrl}>
          Copy URL
        </Button>
      </header>

      <main className="flex flex-col gap-y-8">
        <section className="flex flex-col gap-y-4">
          <section className="flex justify-between">
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

            <Button variant="outlined" color="error" onClick={reset}>
              reset
            </Button>
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

          <section>
            <ToggleButtonGroup
              size="small"
              exclusive
              color="primary"
              value={fixationPoint}
              onChange={(_, value) => value && setFixationPoint(value)}
            >
              <ToggleButton value="1">fixation point - 1</ToggleButton>
              <ToggleButton value="2">2</ToggleButton>
              <ToggleButton value="3">3</ToggleButton>
              <ToggleButton value="4">4</ToggleButton>
              <ToggleButton value="5">5</ToggleButton>
            </ToggleButtonGroup>
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

      <footer className="fixed right-4 bottom-4 bg-white px-2 py-1">
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
