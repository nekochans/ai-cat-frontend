import { isCatId, type CatId } from '@/features';
import { describe, expect, it } from 'vitest';

describe('src/features/cat.ts isCatId TestCases', () => {
  type TestTable = {
    catId: CatId;
  };

  it.each<TestTable>`
    catId
    ${'moko'}
  `('should return true. catId: $catId', ({ catId }: TestTable) => {
    expect(isCatId(catId)).toBeTruthy();
  });

  it.each<TestTable>`
    catId
    ${'cat'}
    ${'unknown'}
  `('should return false. catId: $catId', ({ catId }: TestTable) => {
    expect(isCatId(catId)).toBeFalsy();
  });
});
