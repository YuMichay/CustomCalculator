import { cubeRoot } from '../operations';

describe("Cube root functionality", () => {
  test("cube root of simple number", () => {
    expect(cubeRoot('27')).toEqual(3);
  });

  test("cube root of fractional number", () => {
    expect(cubeRoot('0.27')).toEqual(0.6463);
  });

  test("cube root of negative number", () => {
    expect(cubeRoot('-27')).toEqual('Cannot be a negative number');
  });
});