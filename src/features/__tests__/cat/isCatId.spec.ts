import { describe, it, expect } from "@jest/globals";
import { isCatId, type CatId } from '@/features';

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
