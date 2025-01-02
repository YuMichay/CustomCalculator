import { formatNumber } from "./formatNumber";

export const divide = (firstOperand, secondOperand) => secondOperand === 0 ? 'Cannot divide by zero' : formatNumber(firstOperand / secondOperand);
export const multiply = (firstOperand, secondOperand) => formatNumber(firstOperand * secondOperand);
export const subtract = (firstOperand, secondOperand) => formatNumber((firstOperand * 10 - secondOperand * 10) / 10);
export const summarize = (firstOperand, secondOperand) => formatNumber((firstOperand * 10 + secondOperand * 10) / 10);
export const sign = (firstOperand) => formatNumber(firstOperand * -1);
export const percent = (firstOperand) => !Number.isInteger(firstOperand) && firstOperand.toString().length > 4 ? 'Number is too small' : formatNumber(firstOperand / 100);
export const fraction = (firstOperand) => firstOperand === 0 ? 'Cannot divide by zero' : formatNumber(1 / firstOperand);
export const square = (firstOperand) => formatNumber(firstOperand ** 2);
export const squareRoot = (firstOperand) => firstOperand < 0 ? 'Cannot be a negative number' : formatNumber(firstOperand ** (1 / 2));
export const cube = (firstOperand) => formatNumber(firstOperand ** 3);
export const cubeRoot = (firstOperand) => firstOperand < 0 ? 'Cannot be a negative number' : formatNumber(firstOperand ** (1 / 3));
export const power = (firstOperand, secondOperand) => firstOperand < 0 && secondOperand % 1 !== 0 ? 'Cannot raised negative to fractional power' : formatNumber(firstOperand ** secondOperand);
export const powerRoot = (firstOperand, secondOperand) => firstOperand < 0 ? 'Cannot be a negative number' : formatNumber(firstOperand ** (1 / secondOperand));
export const tenPower = (firstOperand) => {
  if (firstOperand > 1000) {
    return 'Result too large';
  }
  if (firstOperand < -4) {
    return 'Result is too small';
  }

  return formatNumber(10 ** firstOperand);
}
export const factorial = (firstOperand, secondOperand) => {
  if (firstOperand < 0) {
    return 'Cannot be a negative number';
  }
  if (firstOperand > 20) {
    return 'Number is too large';
  }
  if (!Number.isInteger(firstOperand)) {
    return 'Number should be an integer';
  }

  for (let i = 2; i <= firstOperand; i++) {
    secondOperand *= i;
  }

  return formatNumber(secondOperand);
};