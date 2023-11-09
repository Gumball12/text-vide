import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Reducer, useEffect, useReducer } from 'react';
import { textVide } from 'text-vide';
import logo from './logo.png';

const DEBOUNCE_TIMEOUT = 400;
const COPIED_EFFECT_DEBOUNCE_TIMEOUT = 1200;

const INITIAL_INPUT =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

type Edits = {
  firstSep: string;
  secondSep: string;
  fixationPoint: string;
  ignoreHtmlTag: string;
  ignoreHtmlEntity: string;
  input: string;
};

const defaultEdits: Edits = {
  firstSep: '<b>',
  secondSep: '</b>',
  fixationPoint: '1',
  ignoreHtmlTag: '1', // 1 = true, 0 = false
  ignoreHtmlEntity: '1', // 1 = true, 0 = false
  input: INITIAL_INPUT,
};

const storeEdits = ({
  firstSep,
  secondSep,
  fixationPoint,
  input,
  ignoreHtmlTag,
  ignoreHtmlEntity,
}: Edits) => {
  const search = [
    `firstSep=${encodeURIComponent(firstSep)}`,
    `secondSep=${encodeURIComponent(secondSep)}`,
    `fixationPoint=${encodeURIComponent(fixationPoint)}`,
    `input=${encodeURIComponent(input)}`,
    `ignoreHtmlTag=${encodeURIComponent(ignoreHtmlTag)}`,
    `ignoreHtmlEntity=${encodeURIComponent(ignoreHtmlEntity)}`,
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

type State = Edits & {
  highlightedText: string;
  copiedEffect: boolean;
};

type Action = {
  type:
    | 'FIRST_SEP'
    | 'SECOND_SEP'
    | 'FIXATION_POINT'
    | 'INPUT'
    | 'HIGHLIGHTED_TEXT'
    | 'COPIED'
    | 'TOGGLE_IGNORE_HTML_TAG'
    | 'TOGGLE_IGNORE_HTML_ENTITY'
    | 'RESET';
  value: string;
  copied: boolean;
};

const reducer: Reducer<State, Action> = (state, { type, value, copied }) => {
  if (type === 'FIRST_SEP') {
    return { ...state, firstSep: value };
  }

  if (type === 'SECOND_SEP') {
    return { ...state, secondSep: value };
  }

  if (type === 'FIXATION_POINT') {
    return { ...state, fixationPoint: value };
  }

  if (type === 'INPUT') {
    return { ...state, input: value };
  }

  if (type === 'HIGHLIGHTED_TEXT') {
    return { ...state, highlightedText: value };
  }

  if (type === 'COPIED') {
    return { ...state, copiedEffect: copied };
  }

  if (type === 'TOGGLE_IGNORE_HTML_TAG') {
    const nextIgnoreHtmlTag = state.ignoreHtmlTag === '1' ? '0' : '1';
    return { ...state, ignoreHtmlTag: nextIgnoreHtmlTag };
  }

  if (type === 'TOGGLE_IGNORE_HTML_ENTITY') {
    const nextIgnoreHtmlEntity = state.ignoreHtmlEntity === '1' ? '0' : '1';
    return { ...state, ignoreHtmlEntity: nextIgnoreHtmlEntity };
  }

  if (type === 'RESET') {
    return {
      ...defaultEdits,
      highlightedText: '',
      copiedEffect: false,
    };
  }

  return state;
};

const App = () => {
  const [state, dispatchState] = useReducer(reducer, {
    ...initialEdits,
    highlightedText: '',
    copiedEffect: false,
  });

  const {
    firstSep,
    secondSep,
    input,
    fixationPoint,
    copiedEffect,
    highlightedText,
    ignoreHtmlTag,
    ignoreHtmlEntity,
  } = state;

  useEffect(() => {
    const store = setTimeout(() => {
      const options = {
        sep: [firstSep, secondSep],
        fixationPoint: parseInt(fixationPoint),
        ignoreHtmlTag: ignoreHtmlTag === '1',
        ignoreHtmlEntity: ignoreHtmlEntity === '1',
      };

      const highlightedText = textVide(input, options);

      dispatchState({
        type: 'HIGHLIGHTED_TEXT',
        value: highlightedText,
        copied: false,
      });

      storeEdits({
        firstSep,
        secondSep,
        input,
        fixationPoint,
        ignoreHtmlTag,
        ignoreHtmlEntity,
      });
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(store);
  }, [
    firstSep,
    secondSep,
    input,
    fixationPoint,
    ignoreHtmlTag,
    ignoreHtmlEntity,
  ]);

  const copyUrl = () => {
    const { href: url } = location;
    navigator.clipboard.writeText(url);
    dispatchState({ type: 'COPIED', value: '', copied: true });
  };

  useEffect(() => {
    const store = setTimeout(
      () => dispatchState({ type: 'COPIED', value: '', copied: false }),
      COPIED_EFFECT_DEBOUNCE_TIMEOUT,
    );

    return () => clearTimeout(store);
  }, [copiedEffect]);

  const reset = () =>
    dispatchState({ type: 'RESET', value: '', copied: false });

  const isResetDisabled =
    JSON.stringify(defaultEdits) ===
    JSON.stringify({
      firstSep,
      secondSep,
      fixationPoint,
      input,
      ignoreHtmlTag,
      ignoreHtmlEntity,
    });

  return (
    <div className="max-w-4xl m-auto sm:px-8 px-4 py-4 leading-tight">
      <header>
        <section>
          <img src={logo} className="h-20" />
        </section>
        <section className="flex justify-between mb-3">
          <h1 className="text-2xl">Text Vide Sandbox</h1>
          <Button variant="outlined" onClick={copyUrl}>
            Copy URL
          </Button>
        </section>
      </header>

      <main className="flex flex-col gap-y-8">
        <section className="flex flex-col gap-y-4">
          <section className="flex justify-between">
            <div className="flex gap-x-2">
              <TextField
                size="small"
                label="first sep"
                InputLabelProps={{ shrink: true }}
                value={firstSep}
                onInput={({ target }) =>
                  dispatchState({
                    type: 'FIRST_SEP',
                    value: (target as HTMLInputElement).value,
                    copied: false,
                  })
                }
                required
              />
              <TextField
                size="small"
                label="second sep"
                value={secondSep}
                onInput={({ target }) =>
                  dispatchState({
                    type: 'SECOND_SEP',
                    value: (target as HTMLInputElement).value,
                    copied: false,
                  })
                }
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </section>

          <section className="flex gap-2 flex-wrap">
            <ToggleButtonGroup
              size="small"
              exclusive
              color="primary"
              value={fixationPoint}
              onChange={(_, value) =>
                value &&
                dispatchState({ type: 'FIXATION_POINT', value, copied: false })
              }
            >
              <ToggleButton value="1">fixation - 1</ToggleButton>
              <ToggleButton value="2">2</ToggleButton>
              <ToggleButton value="3">3</ToggleButton>
              <ToggleButton value="4">4</ToggleButton>
              <ToggleButton value="5">5</ToggleButton>
            </ToggleButtonGroup>

            <Button
              variant="outlined"
              color="success"
              onClick={() =>
                dispatchState({
                  type: 'TOGGLE_IGNORE_HTML_TAG',
                  value: '',
                  copied: false,
                })
              }
            >
              {ignoreHtmlTag === '1'
                ? 'not ignore html tags'
                : 'ignore html tags'}
            </Button>

            <Button
              variant="outlined"
              color="success"
              onClick={() =>
                dispatchState({
                  type: 'TOGGLE_IGNORE_HTML_ENTITY',
                  value: '',
                  copied: false,
                })
              }
            >
              {ignoreHtmlEntity === '1'
                ? 'not ignore html entities'
                : 'ignore html entities'}
            </Button>
          </section>

          <section className="flex gap-2">
            <Button
              variant="outlined"
              color="error"
              onClick={reset}
              disabled={isResetDisabled}
            >
              reset
            </Button>
          </section>
        </section>

        <section>
          <p className="section-name mb-2px">Input</p>
          <textarea
            className="border-gray-100 resize-y w-full rounded outline-none p-2 text-lg shadow-md focus:shadow-lg transition-shadow-300 min-h-48"
            value={input}
            onInput={({ currentTarget: { value } }) =>
              dispatchState({ type: 'INPUT', value, copied: false })
            }
          />
        </section>

        <section>
          <p className="section-name">Rendered</p>
          <Box className="rendered-box">
            <pre
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: highlightedText }}
            />
          </Box>
        </section>

        <section>
          <p className="section-name">Raw Data</p>
          <Box className="rendered-box">
            <pre className="whitespace-pre-wrap text-sm">{highlightedText}</pre>
          </Box>
        </section>
      </main>

      <footer className="fixed right-4 bottom-4 bg-white px-2 py-1">
        <a
          className="text-gray-400 underline-gray-300"
          href="https://github.com/Gumball12/text-vide"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
