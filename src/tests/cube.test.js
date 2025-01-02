import { cube } from '../operations';

describe("Cube functionality", () => {
  test("cube of simple number", () => {
    expect(cube(5)).toEqual(125);
  });

  test("cube of fractional number", () => {
    expect(cube(0.5)).toEqual(0.125);
  });

  test("cube of negative number", () => {
    expect(cube(-5)).toEqual(-125);
  });
});