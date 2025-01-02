import { squareRoot } from '../operations';

describe("Square root functionality", () => {
  test("square root of simple number", () => {
    expect(squareRoot(25)).toEqual(5);
  });

  test("square root of fractional number", () => {
    expect(squareRoot(0.25)).toEqual(0.5);
  });

  test("square root of negative number", () => {
    expect(squareRoot(-25)).toEqual('Cannot be a negative number');
  });
});