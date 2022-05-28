// eslint-disable-next-line
// @ts-ignore
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

type Row = {
  '[fixation 1]\nlast length ': number;
  '[fixation 2]\nlast length ': number;
  '[fixation 3]\nlast length ': number;
  '[fixation 4]\nlast length ': number;
  '[fixation 5]\nlast length ': number;
  'len ': number;
};

const defaultLastLength = {
  ['[fixation 1]\nlast length ']: 0,
  ['[fixation 2]\nlast length ']: 0,
  ['[fixation 3]\nlast length ']: 0,
  ['[fixation 4]\nlast length ']: 0,
  ['[fixation 5]\nlast length ']: 0,
};

const fixationPointsSheetId = '1nG8OoYUK6rXsWdi-L8pWihx9i_aSn9V0eYfLKy9-B-U';
const parser = new PublicGoogleSheetsParser(fixationPointsSheetId);

export default async () => {
  const rowList = (await parser.parse()) as Row[];
  return rowList.reduceRight(
    (acc, maybeRow) => {
      const row = {
        ...defaultLastLength,
        ...maybeRow,
      };

      const fp1 = row['[fixation 1]\nlast length '];
      const fp2 = row['[fixation 2]\nlast length '];
      const fp3 = row['[fixation 3]\nlast length '];
      const fp4 = row['[fixation 4]\nlast length '];
      const fp5 = row['[fixation 5]\nlast length '];

      acc.fp1.push(fp1);
      acc.fp2.push(fp2);
      acc.fp3.push(fp3);
      acc.fp4.push(fp4);
      acc.fp5.push(fp5);

      return acc;
    },
    {
      fp1: [] as number[],
      fp2: [] as number[],
      fp3: [] as number[],
      fp4: [] as number[],
      fp5: [] as number[],
    },
  );
};
