# bionic-reading

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/bionic-reading)](https://www.npmjs.com/package/bionic-reading) ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Gumball12/bionic-reading?filename=packages%2Fbionic-reading%2Fpackage.json) [![changelog](https://img.shields.io/badge/CHANGELOG-gray)](./CHANGELOG.md)

[![ci](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml) [![codecov](https://codecov.io/gh/Gumball12/bionic-reading/branch/main/graph/badge.svg?token=MsLDgzri5B)](https://codecov.io/gh/Gumball12/bionic-reading)

> **Support all languages that separate words with spaces**

> [Try on Runkit](https://npm.runkit.com/bionic-reading) or [Online Sandbox](https://gumball12.github.io/bionic-reading/)

An Open-Source JavaScript Implementation of [Bionic Reading API](https://bionic-reading.com/).

[How was this made?](./HOW.md)

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
bionicReading('bionic-reading'); // '<b>bion</b>ic-<b>readi</b>ng'
```

### Options

```ts
type Options = Partial<{
  highlightTag: string;
  markdown: boolean;
  markdownStyle: string;
}>;
```

#### `highlightTag`

- Default Value: `'b'`

```ts
// default highlight tag: `<b>`
bionicReading('bionic-reading'); // '<b>bion</b>ic-<b>readi</b>ng'
```

```ts
// changed highlight tag: `<strong>`
bionicReading('bionic-reading', { highlightTag: 'strong' }); // '<strong>bion</strong>ic-<strong>readi</strong>ng'
```

#### `markdown`

- Default Value: `false`

```ts
bionicReading('bionic-reading', { markdown: true, highlightTag: 'strong' }); // '**bion**ic-**readi**ng'
```

If true, the `highlightTag` option is ignored.

#### `markdownStyle`

- Default Value: `'**'`

```ts
bionicReading('bionic-reading', { markdown: true, markdownStyle: '__' }); // '__bion__ic-__readi__ng'
```

If the `markdown` option is false, this option is ignored.

## Motivations

- [bionic-reading.com](https://bionic-reading.com/)
- [ansh/bionic-reading](https://github.com/ansh/bionic-reading)

## License

[MIT](./LICENSE) @Gumball12
