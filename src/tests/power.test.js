import { power } from '../operations';

describe("Power functionality", () => {
  test("simple power for simple number", () => {
    expect(power('2', '5')).toEqual(32);
  });

  test("simple power for fractional number", () => {
    expect(power('2', '0.5')).toEqual(1.4142);
  });

  test("simple power for negative number", () => {
    expect(power('2', '-5')).toEqual(0.0313);
  });

  test("fractional power for simple number", () => {
    expect(power('0.2', '5')).toEqual(0.0003);
  });

  test("fractional power for fractional number", () => {
    expect(power('0.2', '0.5')).toEqual(0.4472);
  });

  test("fractional power for negative number", () => {
    expect(power('0.2', '-5')).toEqual(3125);
  });

  test("negative power for simple number", () => {
    expect(power('-2', '5')).toEqual(-32);
  });

  test("negative power for fractional number", () => {
    expect(power('-2', '0.5')).toEqual('Cannot raised negative to fractional power');
  });

  test("negative power for negative number", () => {
    expect(power('-2', '-5')).toEqual(-0.0313);
  });
});