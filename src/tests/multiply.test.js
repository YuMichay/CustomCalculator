import { multiply } from '../operations';

describe("Multiply functionality", () => {
  test("simply multiplication", () => {
    expect(multiply('2', '3')).toEqual(6);
  });

  test("zero multiplication", () => {
    expect(multiply('0', '3')).toEqual(0);
  });
  
  test("multiplication of fractional number", () => {
    expect(multiply('1.2345', '3')).toEqual(3.7035);
  });

  test("multiplication with negative number", () => {
    expect(multiply('2', '-3')).toEqual(-6);
  });
});