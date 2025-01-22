import { powerRoot } from '../operations';

describe("PowerRoot functionality", () => {
  test("simple root of simple number", () => {
    expect(powerRoot('81', '4')).toEqual(3);
  });

  test("simple root of fractional number", () => {
    expect(powerRoot('81', '0.4')).toEqual(59049);
  });

  test("simple root of negative number", () => {
    expect(powerRoot('81', '-4')).toEqual(0.3333);
  });

  test("fractional root of simple number", () => {
    expect(powerRoot('0.81', '4')).toEqual(0.9487);
  });

  test("fractional root of fractional number", () => {
    expect(powerRoot('0.81', '0.4')).toEqual(0.5905);
  });

  test("fractional root of negative number", () => {
    expect(powerRoot('0.81', '-4')).toEqual(1.0541);
  });

  test("negative root of simple number", () => {
    expect(powerRoot('-81', '4')).toEqual('Cannot be a negative number');
  });
  test("negative root of fractional number", () => {
    expect(powerRoot('-81', '0.4')).toEqual('Cannot be a negative number');
  });
  test("negative root of negative number", () => {
    expect(powerRoot('-81', '-4')).toEqual('Cannot be a negative number');
  });
});