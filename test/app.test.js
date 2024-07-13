import { describe, it, expect } from 'vitest';
import { countSheeps } from './src/app.js'; 

describe("countSheeps", () => {
  it("Should return the number of sheeps in the list", () => {
    const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
    expect(countSheeps(list1)).toBe("There are 17 sheeps in total");
  });
  it("Should return UPS!!! Wolfs eaten Sheeps", () => {
    const list2 = [ false, false, false ]
    expect(countSheeps(list2)).toBe("UPS!!! Wolfs eaten Sheeps")
  })  
});