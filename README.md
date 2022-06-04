# bionic-reading

> This project will be changed to another name soon. ([#27](https://github.com/Gumball12/bionic-reading/issues/27))

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/bionic-reading)](https://www.npmjs.com/package/bionic-reading) ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Gumball12/bionic-reading?filename=packages%2Fbionic-reading%2Fpackage.json) [![changelog](https://img.shields.io/badge/CHANGELOG-gray)](./CHANGELOG.md)

[![ci](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml) [![codecov](https://codecov.io/gh/Gumball12/bionic-reading/branch/main/graph/badge.svg?token=MsLDgzri5B)](https://codecov.io/gh/Gumball12/bionic-reading)

![logo](./docs/logo-extended.png)

> **Support all languages that separate words with spaces**

> [Try on Runkit](https://npm.runkit.com/bionic-reading) or [Online Sandbox](https://gumball12.github.io/bionic-reading/)

An Open-Source JavaScript Implementation of [Bionic Reading API](https://bionic-reading.com/).

[How was this made?](./HOW.md)

## 💫 Features

| Feature                       | State                                                        |
| ----------------------------- | ------------------------------------------------------------ |
| HTML Mode                     | ✅                                                           |
| Markdown Mode                 | ✅                                                           |
| Custom HTML or Markdown Style | ✅                                                           |
| Fixation-Points               | ✅                                                           |
| Saccade                       | [#21](https://github.com/Gumball12/bionic-reading/issues/21) |

## ⚙️ Install

```bash
npm i bionic-reading
yarn add bionic-reading
pnpm add bionic-reading
```

## 📖 Usage

### ESM (Browser)

```ts
import { bionicReading } from 'bionic-reading';

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const bionicText = bionicReading(text);

console.log(bionicText); // '<b>Bion</b>ic <b>Readi</b>ng ... <b>writt</b>en <b>conte</b>nt.'
```

### CommonJS (NodeJS)

```ts
const { bionicReading } = require('bionic-reading');

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const bionicText = bionicReading(text);

console.log(bionicText); // '<b>Bion</b>ic <b>Readi</b>ng ... <b>writt</b>en <b>conte</b>nt.'
```

## 📚 API

### `BionicReading(text: string, options?: Options)`

```ts
bionicReading('bionic-reading');
bionicReading('bionic-reading', {
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
bionicReading('bionic-reading', '**'); // '**bion**ic-**readi**ng'
```

It can also set them up by passing a list of length 2.

```ts
bionicReading('bionic-reading', ['<strong>', '</strong>']); // '<strong>bion</strong>ic-<strong>readi</strong>ng'
```

#### `fixationPoint`

- Default Value: `1`
- Range: `[1, 5]`

```ts
// Default fixation-point: 1
bionicReading('bionic-reading'); // '<b>bion</b>ic-<b>readi</b>ng'

// Changed fixation-point: 5
bionicReading('bionic-reading', { fixationPoint: 5 }); // '<b>bi</b>onic-<b>re</b>ading'
```

## License

[MIT](./LICENSE) @Gumball12
