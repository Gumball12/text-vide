# bionic-reading

[![ci](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/bionic-reading/actions/workflows/ci.yaml) [![codecov](https://codecov.io/gh/Gumball12/bionic-reading/branch/main/graph/badge.svg?token=MsLDgzri5B)](https://codecov.io/gh/Gumball12/bionic-reading)

[![changelog](https://img.shields.io/badge/CHANGELOG-blue)](./CHANGELOG.md)

Reading for everyone. [Bionic Reading API](https://bionic-reading.com/).

## ⚙️ Install

```bash
npm i bionic-reading
yarn add bionic-reading # or Yarn
pnpm add bionic-reading # or Pnpm
```

## 📖 Usage

### ESM (Browser)

```ts
import { bionicReading } from 'bionic-reading';

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const bionicText = bionicReading(text);

console.log(bionicText); // '<b>Bion</b>ic ... <b>conte</b>nt.'
```

### CommonJS (NodeJS)

```ts
const { bionicReading } = require('bionic-reading');

const text =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

const bionicText = bionicReading(text);

console.log(bionicText); // '<b>Bion</b>ic ... <b>conte</b>nt.'
```

## 📚 API

### `BionicReading(text: string, options?: Options)`

```ts
bionicReading('bionic-reading'); // '<b>bionic-</b>reading'
```

### Options

#### `highlightTag: string`

```ts
// default highlight tag: `<b>`
bionicReading('bionic-reading'); // '<b>bionic-</b>reading'
```

```ts
// changed highlight tag: `<strong>`
bionicReading('bionic-reading', { highlightTag: 'strong' }); // '<strong>bionic-</strong>reading'
```

## Motivations

- [bionic-reading.com](https://bionic-reading.com/)
- [ansh/bionic-reading](https://github.com/ansh/bionic-reading)

## License

[MIT](./LICENSE) @Gumball12
