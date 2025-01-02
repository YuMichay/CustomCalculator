import { percent } from '../operations';

describe("Persent functionality", () => {
  test("simple number to persent", () => {
    expect(percent(8)).toEqual(0.08);
  });

  test("fractional number to persent", () => {
    expect(percent(0.08)).toEqual(0.0008);
  });

  test("too small fractional number to persent", () => {
    expect(percent(0.0008)).toEqual('Number is too small');
  });

  test("negative number to persent", () => {
    expect(percent(-8)).toEqual(-0.08);
  });
});