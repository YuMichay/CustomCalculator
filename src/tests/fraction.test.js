import { fraction } from '../operations';

describe("Fraction functionality", () => {
  test("fraction from simple number", () => {
    expect(fraction('8')).toEqual(0.125);
  });

  test("fraction from fractional number", () => {
    expect(fraction('0.8')).toEqual(1.25);
  });

  test("fraction from zero", () => {
    expect(fraction('0')).toEqual('Cannot divide by zero');
  });

  test("fraction from negative number", () => {
    expect(fraction('-8')).toEqual(-0.125);
  });
});