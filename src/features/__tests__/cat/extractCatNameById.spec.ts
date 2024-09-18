import type { CatName } from '../../cat';
import { type CatId, extractCatNameById } from '@/features';
import { ExhaustiveError } from '@/utils';
import { describe, expect, it } from 'vitest';

describe('src/features/cat.ts extractCatNameById TestCases', () => {
  type TestTable = {
    catId: CatId;
    expected: CatName;
  };

  it.each`
    catId     | expected
    ${'moko'} | ${'もこ'}
  `(
    'should return catName. catId: $catId',
    ({ catId, expected }: TestTable) => {
      expect(extractCatNameById(catId)).toStrictEqual(expected);
    },
  );

  it.each`
    catId
    ${'cat'}
    ${'unknown'}
  `('should ExhaustiveError Throw. catId: $catId', ({ catId }: TestTable) => {
    expect(() => extractCatNameById(catId)).toThrow(ExhaustiveError);
  });
});
