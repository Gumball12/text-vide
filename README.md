# text-vide

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/text-vide)](https://www.npmjs.com/package/text-vide) ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Gumball12/text-vide?filename=packages%2Ftext-vide%2Fpackage.json) [![changelog](https://img.shields.io/badge/CHANGELOG-gray)](./CHANGELOG.md)

[![ci](https://github.com/Gumball12/text-vide/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/text-vide/actions/workflows/ci.yaml) [![codecov](https://codecov.io/gh/Gumball12/text-vide/branch/main/graph/badge.svg?token=MsLDgzri5B)](https://codecov.io/gh/Gumball12/text-vide)

![logo](./docs/logo-extended.png)

> **Support all languages that separate words with spaces**

> [Try on Runkit](https://npm.runkit.com/text-vide) or [Online Sandbox](https://gumball12.github.io/text-vide/)

An Open-Source JavaScript Implementation of [Bionic Reading API](https://bionic-reading.com/).

[How was this made?](./HOW.md)

## 💫 Features

| Feature                       | State                                                   |
| ----------------------------- | ------------------------------------------------------- |
| HTML Mode                     | ✅                                                      |
| Markdown Mode                 | ✅                                                      |
| Custom HTML or Markdown Style | ✅                                                      |
| Fixation-Points               | ✅                                                      |
| Saccade                       | [#21](https://github.com/Gumball12/text-vide/issues/21) |

## ⚙️ Install

```bash
npm i text-vide
yarn add text-vide
pnpm add text-vide
```

## 📖 Usage

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
}>;
```

#### `sep`

- Default Value: `['<b>', '</b>']`

Passing a string allows you to specify the Beginning and End of the highlighted word at once.

```ts
textVide('text-vide', '**'); // '**tex**t-**vid**e'
```

It can also set them up by passing a list of length 2.

```ts
textVide('text-vide', ['<strong>', '</strong>']); // '<strong>tex</strong>t-<strong>vid</strong>e'
```

#### `fixationPoint`

- Default Value: `1`
- Range: `[1, 5]`

```ts
// Default fixation-point: 1
textVide('text-vide'); // '<b>tex</b>t-<b>vid</b>e'

// Changed fixation-point: 5
textVide('text-vide', { fixationPoint: 5 }); // '<b>t</b>ext-<b>v</b>ide'
```

## License

[MIT](./LICENSE) @Gumball12
