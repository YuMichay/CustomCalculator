import { factorial } from '../operations';

describe("Factorial functionality", () => {
  test("factorial of the simple number", () => {
    expect(factorial('5', '1')).toEqual(120);
  });

  test("factorial of the fractional number", () => {
    expect(factorial('0.5', '1')).toEqual('Number should be an integer');
  });

  test("factorial of the negative number", () => {
    expect(factorial('-5', '1')).toEqual('Cannot be a negative number');
  });

  test("factorial of the large number", () => {
    expect(factorial('21', '1')).toEqual('Number is too large');
  });
});