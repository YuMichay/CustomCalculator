import { sign } from '../operations';

describe("Sign functionality", () => {
  test("sign change from positive to negative", () => {
    expect(sign('2')).toEqual(-2);
  });

  test("sign change from negative to positive", () => {
    expect(sign('-2')).toEqual(2);
  });

  test("sign change from fractional number", () => {
    expect(sign('0.2')).toEqual(-0.2);
  });

  test("sign change from negative fractional number", () => {
    expect(sign('-0.2')).toEqual(0.2);
  });
});