import { tenPower } from '../operations';

describe("TenPower functionality", () => {
  test("10 raised to the simple power", () => {
    expect(tenPower(5)).toEqual(100000);
  });

  test("10 raised to the fractional power", () => {
    expect(tenPower(0.5)).toEqual(3.1623);
  });

  test("10 raised to the negative power", () => {
    expect(tenPower(-5)).toEqual('Result is too small');
  });

  test("10 raised to the large power", () => {
    expect(tenPower(1001)).toEqual('Result too large');
  });
});