import { extractCatNameById, type CatId } from '@/features';
import { ExhaustiveError } from '@/utils';
import { describe, expect, it } from '@jest/globals';
import type { CatName } from '../../cat';

describe('src/features/cat.ts extractCatNameById TestCases', () => {
  type TestTable = {
    catId: CatId;
    expected: CatName;
  };

  it.each<TestTable>`
    catId     | expected
    ${'moko'} | ${'もこ'}
  `(
    'should return catName. catId: $catId',
    ({ catId, expected }: TestTable) => {
      expect(extractCatNameById(catId)).toStrictEqual(expected);
    },
  );

  it.each<TestTable>`
    catId
    ${'cat'}
    ${'unknown'}
  `('should ExhaustiveError Throw. catId: $catId', ({ catId }: TestTable) => {
    expect(() => extractCatNameById(catId)).toThrow(ExhaustiveError);
  });
});
