# How was this made?

This module was developed using the [Official Bionic-Reading API](https://rapidapi.com/bionic-reading-bionic-reading-default/api/bionic-reading1/).

I composed some example sentences and the API request results for them as [Test Cases](./src/__tests__/conv2IntermediateWord.test.ts), and I also found some Rules together in the process.

- [Rules for the Number of Characters](#char-length-rules)
- [Rules for Special Characters](#special-chars-rules)

### Conversion Process

<p align="center">
  <a href="https://mermaid.live/edit#pako:eNp1kcFugzAQRH_F2nPyAxx6cNJDKiohGYkD5uBgt1g1NjKmLQr59xqwBYrSPe3hzWhn9ga14QIS-LSsa1COqUZ-srzMFJMa5eLXVeh4fJlIp6RD1xGlUosJZWkg05JCxixbDMqKwgNOOlZ7vgh8MfOFsbysnsBn1jcTIoElM0tGpdhViT1_MvpbWIecQRfthG0Fl8wJFNl-Qpf36DJv3mcP_uOFpdGy3rvgaIIXjxV4dtGb8WX9SNesEXCMi4tN95h604SOcCwVZ5vqSbebcP0FzoMsL0OE5W1UwwFaH5pJ7j98myEKrhGtoJD4lTP7RYHqu-eGjvtiXrl0xkLywVQvDsAGZ8ioa0icHUSEznI-qA3U_Q8fWL9T">
    <img alt="mermaid image" src="https://mermaid.ink/img/pako:eNp1kcFugzAQRH_F2nPyAxx6cNJDKiohGYkD5uBgt1g1NjKmLQr59xqwBYrSPe3hzWhn9ga14QIS-LSsa1COqUZ-srzMFJMa5eLXVeh4fJlIp6RD1xGlUosJZWkg05JCxixbDMqKwgNOOlZ7vgh8MfOFsbysnsBn1jcTIoElM0tGpdhViT1_MvpbWIecQRfthG0Fl8wJFNl-Qpf36DJv3mcP_uOFpdGy3rvgaIIXjxV4dtGb8WX9SNesEXCMi4tN95h604SOcCwVZ5vqSbebcP0FzoMsL0OE5W1UwwFaH5pJ7j98myEKrhGtoJD4lTP7RYHqu-eGjvtiXrl0xkLywVQvDsAGZ8ioa0icHUSEznI-qA3U_Q8fWL9T">
  </a>
</p>

### Rules for the Number of Characters<a id="char-length-rules"></a>

At first, I tried to find a Pattern by adding characters one by one. Below is the result:

| Length (Min) | Length (Max) | Max - Min | Number of Non-Highlighted Chars |
| ------------ | ------------ | --------- | ------------------------------- |
| 0            | 4            | 4         | 1                               |
| 5            | 12           | 7         | 2                               |
| 13           | 16           | 3         | 3                               |
| 17           | 24           | 7         | 4                               |
| 25           | 29           | 4         | 5                               |
| 30           | 35           | 5         | 6                               |
| 36           | 42           | 6         | 7                               |
| 43           | 48           | 5         | 8                               |

I couldn't find a specific pattern here but thought I could use a Heuristic instead.

> [Pneumonoultramicroscopicsilicovolcanoconiosis](https://en.wikipedia.org/wiki/Longest_word_in_English#cite_note-p45-6) (45 Letters)

The above word is the longest word that exists in the dictionary. That means, the number of characters will never exceed 46. So, I implemented the logic that I don't care about characters longer than a specific number of characters.

Below are the final rules for character count:

| Length (Min) | Length (Max) | Max - Min | Number of Non-Bold Chars |
| ------------ | ------------ | --------- | ------------------------ |
| 0            | 4            | 4         | 1                        |
| 5            | 12           | 7         | 2                        |
| 13           | 16           | 3         | 3                        |
| 17           | 24           | 7         | 4                        |
| 25           | 29           | 4         | 5                        |
| 30           | 35           | 5         | 6                        |
| 36           | 42           | 6         | 7                        |
| 43           | 48           | 5         | 8                        |
| 49           | infinity     | infinity  | 9                        |

[conv2IntermediateWord.ts](./packages/bionic-reading/src/conv2IntermediateWord.ts)

The above is a description of the `fixationPoint` option value of `1`, and the same is done for other cases. [See here](https://docs.google.com/spreadsheets/d/1nG8OoYUK6rXsWdi-L8pWihx9i_aSn9V0eYfLKy9-B-U/edit?usp=sharing) for a complete list of test results for Fixation Points. (Note: The test results on the sheet are [automatically interlocked](./packages/bionic-reading/src/__tests__/utils/getFixationPointLastLength.ts) with the actual project test case.)

### Rules for Special Characters<a id="special-chars-rules"></a>

Special characters at the Beginning or End of a word are **not** highlighted.

```ts
bionicReading(';apple;'); // ';<b>app</b>le;'
```

Special characters placed **inside words** are treated the same as Regular characters.

```ts
bionicReading('a;ppl;e'); // '<b>a;ppl</b>;e'
```

However, a Dash (`-`) among special characters located inside a word is treated the same as a Space.

```ts
bionicReading('app-le'); // '<b>ap</b>p-<b>l</b>e'
```
