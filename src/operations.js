import { formatNumber } from "./formatNumber";

export const divide = (firstOperand, secondOperand) => formatNumber(firstOperand / secondOperand);
export const multiply = (firstOperand, secondOperand) => formatNumber(firstOperand * secondOperand);
export const subtract = (firstOperand, secondOperand) => formatNumber((firstOperand * 10 - secondOperand * 10) / 10);
export const summarize = (firstOperand, secondOperand) => formatNumber((firstOperand * 10 + secondOperand * 10) / 10);
export const sign = (firstOperand) => formatNumber(firstOperand * -1);
export const percent = (firstOperand) => formatNumber(firstOperand / 100);
export const undoPercent = (firstOperand) => formatNumber(firstOperand * 100);
export const fraction = (firstOperand) => formatNumber(1 / firstOperand);
export const square = (firstOperand) => formatNumber(firstOperand ** 2);
export const squareRoot = (firstOperand) => formatNumber(firstOperand ** (1 / 2));
export const cube = (firstOperand) => formatNumber(firstOperand ** 3);
export const cubeRoot = (firstOperand) => formatNumber(firstOperand ** (1 / 3));
export const power = (firstOperand, secondOperand) => formatNumber(firstOperand ** secondOperand);
export const powerRoot = (firstOperand, secondOperand) => formatNumber(firstOperand ** (1 / secondOperand));
export const tenPower = (firstOperand) => formatNumber(10 ** firstOperand);
export const undoTenPower = (firstOperand) => {
  let n = 0;
  let powerResult = 1;

  while (powerResult < firstOperand) {
    n++;
    powerResult *= 10;
  }

  while (powerResult > firstOperand) {
    n--;
    powerResult /= 10;
  }

  return formatNumber(n);
};
export const factorial = (firstOperand, secondOperand) => {
  for (let i = 2; i <= firstOperand; i++) {
    secondOperand *= i;
  }
  return formatNumber(secondOperand);
};
export const undoFactorial = (firstOperand) => {
  let n = 1;
  let factorial = 1;

  while (factorial < firstOperand) {
    n++;
    factorial *= n;
  }

  return factorial === firstOperand ? formatNumber(n) : null;
};