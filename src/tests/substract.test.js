import { subtract } from '../operations';

describe("Substract functionality", () => {
  test("simple substraction", () => {
    expect(subtract('8', '2')).toEqual(6);
  });

  test("substraction with fractional numbers", () => {
    expect(subtract('0.3', '0.2')).toEqual(0.1);
  });
  
  test("substraction with negative number", () => {
    expect(subtract('-2', '8')).toEqual(-10);
  });
});