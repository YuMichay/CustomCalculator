import { divide } from '../operations';

describe("Divide functionality", () => {
  test("simple division", () => {
    expect(divide('6', '2')).toEqual(3);
  });

  test("zero division", () => {
    expect(divide('0', '2')).toEqual(0);
  });

  test("fractional number result after division", () => {
    expect(divide('5', '2')).toEqual(2.5);
  });

  test("fractional number result after division rounded", () => {
    expect(divide('5', '9')).toEqual(0.5556);
  });

  test("division by zero", () => {
    expect(divide('5', '0')).toEqual('Cannot divide by zero');
  });

  test("division by negative number", () => {
    expect(divide('5', '-1')).toEqual(-5);
  });
});