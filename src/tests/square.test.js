import { square } from '../operations';

describe("Square functionality", () => {
  test("square of simple number", () => {
    expect(square(8)).toEqual(64);
  });

  test("square of fractional number", () => {
    expect(square(0.8)).toEqual(0.64);
  });

  test("square of negative number", () => {
    expect(square(-8)).toEqual(64);
  });
});