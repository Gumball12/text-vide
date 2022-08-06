# TextVide (vide; Latin for "see")

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/text-vide)](https://www.npmjs.com/package/text-vide) ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Gumball12/text-vide?filename=packages%2Ftext-vide%2Fpackage.json) [![changelog](https://img.shields.io/badge/CHANGELOG-gray)](./CHANGELOG.md)

[![ci](https://github.com/Gumball12/text-vide/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/text-vide/actions/workflows/ci.yaml) [![codecov](https://codecov.io/gh/Gumball12/text-vide/branch/main/graph/badge.svg?token=MsLDgzri5B)](https://codecov.io/gh/Gumball12/text-vide)

![logo](./docs/logo-extended.png)

> **Support all languages that separate words with spaces**

> [Try on Runkit](https://npm.runkit.com/text-vide) or [Online Sandbox](https://gumball12.github.io/text-vide/)

An Open-Source JavaScript Implementation of [Bionic Reading API](https://bionic-reading.com/).

- _[How was this made?](./HOW.md)_
- _[I don't think it's going to be more readable](./ABOUT_READABILITY.md)_
- _[CONTRIBUTING.md](./CONTRIBUTING.md)_

## 💫 Features

| Feature                                                                 | State |
| ----------------------------------------------------------------------- | ----- |
| [Support all languages](https://github.com/Gumball12/text-vide/pull/16) | ✅    |
| [Support ESM and CommonJS](#usage)                                      | ✅    |
| [Custom `sep` Style](#options-sep)                                      | ✅    |
| [Fixation-Points](#options-fixationpoint)                               | ✅    |
| [Ignore HTML Tags](#options-ignorehtmltag)                              | ✅    |

### Work in Progress

| Feature | Issues                                                  |
| ------- | ------------------------------------------------------- |
| Saccade | [#21](https://github.com/Gumball12/text-vide/issues/21) |

### Benchmark

```
Sun Aug 07 2022 01:33:40 GM +0900
length of normal text: 590
length of text with html tags: 1579

normal#ignoreHtmlTags x 46,106 ops/sec ±4.22% (86 runs sampled)
normal#notIgnoreHtmlTags x 53,200 ops/sec ±0.93% (89 runs sampled)
withHtmlTags#ignoreHtmlTags x 3,213 ops/sec ±0.92% (87 runs sampled)
withHtmlTags#notIgnoreHtmlTags x 3,605 ops/sec ±1.59% (87 runs sampled)
```

[code](./apps/benchmark/index.js)

## ⚙️ Install

```bash
npm i text-vide
yarn add text-vide
pnpm add text-vide
```

## 📖 Usage<a id="usage"></a>

### ESM (Browser)

```ts
import { textVide } from 'text-vide';

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const highlightedText = textVide(text);

console.log(highlightedText); // '<b>Bion</b>ic <b>Readi</b>ng ... <b>writt</b>en <b>conte</b>nt.'
```

### CommonJS (NodeJS)

```ts
const { textVide } = require('text-vide');

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const highlightedText = textVide(text);

console.log(highlightedText); // '<b>Bion</b>ic <b>Readi</b>ng ... <b>writt</b>en <b>conte</b>nt.'
```

## 📚 API

### `textVide(text: string, options?: Options)`

```ts
textVide('text-vide');
textVide('text-vide', {
  // ... Options
});
```

### Options

```ts
type Options = Partial<{
  sep: string | string[];
  fixationPoint: number;
  ignoreHtmlTag: boolean;
}>;
```

#### `sep`<a id="options-sep"></a>

- Default Value: `['<b>', '</b>']`

Passing a string allows you to specify the Beginning and End of the highlighted word at once.

```ts
textVide('text-vide', '**'); // '**tex**t-**vid**e'
```

It can also set them up by passing a list of length 2.

```ts
textVide('text-vide', ['<strong>', '</strong>']); // '<strong>tex</strong>t-<strong>vid</strong>e'
```

#### `fixationPoint`<a id="options-fixationpoint"></a>

- Default Value: `1`
- Range: `[1, 5]`

```ts
// Default fixation-point: 1
textVide('text-vide'); // '<b>tex</b>t-<b>vid</b>e'

// Changed fixation-point: 5
textVide('text-vide', { fixationPoint: 5 }); // '<b>t</b>ext-<b>v</b>ide'
```

#### `ignoreHtmlTag`<a id="options-ignorehtmltag"></a>

- Default Value: `true`

If this option is `true`, HTML tags are not highlighted.

```ts
textVite('<div>abcd</div>efg'); // '<div><b>abc</b>d</div><b>ef</b>g'
textVite('<div>abcd</div>efg', { ignoreHtmlTag: false }); // '<<b>di</b>v><b>abc</b>d</<b>di</b>v><b>ef</b>g'
```

## License

[MIT](./LICENSE) @Gumball12
