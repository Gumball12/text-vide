# How was this made?

This module was developed by referring to the official [BR API](https://rapidapi.com/bionic-reading-bionic-reading-default/api/bionic-reading1/). However, there is a difference in that it is implemented with a slightly different logic, such as not highlighting special characters. I'm going to talk about this here.

## The Rules

First, I found the rule below through the BR API call result.

- [Rules for the Number of Characters](#char-length-rules)
- [Rules for Special Characters](#special-chars-rules)
- [Rules for Numbers](#number-rules)

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

The above is a description of the `fixationPoint` option value of `1`, and the same is done for other cases. [See here](https://docs.google.com/spreadsheets/d/1nG8OoYUK6rXsWdi-L8pWihx9i_aSn9V0eYfLKy9-B-U/edit?usp=sharing) for a complete list of test results for Fixation Points.

### Rules for Special Characters<a id="special-chars-rules"></a>

Special characters at the Beginning or End of a word are **not** highlighted.

```ts
';apple;' -> ';<b>app</b>le;'
```

Special characters placed **inside words** are treated the same as Regular characters.

```ts
'a;ppl;e' -> '<b>a;ppl</b>;e'
```

However, a Dash (`-`) among special characters located inside a word is treated the same as a Space.

```ts
'app-le' -> '<b>ap</b>p-<b>l</b>e'
```

> I thought it was awkward to highlight special characters, so I implemented it to divide them based on special characters.
>
> ```ts
> // Origin
> 'a;ppl;e' -> '<b>a;ppl</b>;e'
> 'app-le' -> '<b>ap</b>p-<b>l</b>e'
>
> // This module
> 'a;ppl;e' -> 'a;<b>pp</b>l;e'
> 'app-le' -> '<b>ap</b>p-<b>l</b>e'
> ```

### Rules for numbers<a id="number-rules"></a>

If there are only numbers, highlight nothing.

```ts
'1234567890' -> '1234567890'
```

If there is a dash between the numbers, it is also not highlighted.

```ts
'1234-567890' -> '1234-567890'
```

When numbers and letters are used together, they are treated as regular characters.

```ts
'a1234567890' -> '<b>a12345678</b>90'
'1234567890a' -> '<b>123456789</b>0a'
'1234a567890' -> '<b>1234a5678</b>90'
```

If a special character other than a dash is between numbers, treat it like a regular character.

```ts
'1234!567890' -> '<b>1234!5678</b>90'
```

Otherwise, it doesn't highlight anything.

```ts
'!1234567890' -> '!1234567890'
'1234567890!' -> '1234567890!'
```

Note: Emojis are treated as special characters, not dashes.

> This module does not highlight even if there are special characters between numbers.
>
> ```ts
> // Origin
> '1234!567890' -> '<b>1234!5678</b>90'
>
> // This module
> '1234!567890' -> '1234!567890'
> ```
