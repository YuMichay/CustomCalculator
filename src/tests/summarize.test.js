import { summarize } from '../operations';

describe("Summarize functionality", () => {
  test("simple sum", () => {
    expect(summarize('8', '2')).toEqual(10);
  });

  test("sum with fractional numbers", () => {
    expect(summarize('0.3', '0.2')).toEqual(0.5);
  });
  
  test("sum with negative number", () => {
    expect(summarize('2', '-8')).toEqual(-6);
  });
});