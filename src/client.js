import Calculator from './receiver';
import Invoker from './invoker';
import { createCommand } from './createCommand';
import { finishOperation } from './finishOperation';
import { formatNumber } from './formatNumber';

const keyboard = document.querySelector(".wrapper__keyboard");
const display = document.querySelector(".wrapper__number");
const unaryOperations = ['mc', 'm+', 'm-', 'mr', 'sign', 'percent', 'fraction', 'square', 'squareRoot', 'cube', 'cubeRoot', 'tenPower', 'factorial'];

const calculator = new Calculator(display);
const invoker = new Invoker();

let currentOperator = null;
let firstOperand = null;
let isEnteringSecondOperand = false;

keyboard.addEventListener('click', (e) => {
  const keyElement = e.target.closest('.key');

  if (e.target.classList.contains('digit') || e.target.classList.contains('digit-double')) {
    const digit = e.target.textContent;

    if (calculator.getResult() === 0 && digit !== '.') {
      calculator.setResult(digit);
      currentOperator = null;
    } else if (isEnteringSecondOperand) {
      calculator.setResult(digit);
      isEnteringSecondOperand = false;
    } else if (isNaN(calculator.getResult())) {
      // reset
      const command = createCommand(calculator, 'ac');
      invoker.execute(command);

      //and set new value
      calculator.setResult(digit);
    } else {
      calculator.setResult(`${calculator.getResult()}${digit}`);
    }
  }

  if (keyElement) {
    const operation = keyElement.dataset.operation;

    if (isNaN(calculator.getResult())) {
      const command = createCommand(calculator, 'ac');
      invoker.execute(command);

      firstOperand = null;
      currentOperator = null;
    }

    const currentValue = formatNumber(calculator.getResult());

    if (unaryOperations.includes(operation)) {
      // check the unfinished operation and finish it before making unary operation
      if (currentOperator && firstOperand !== null) {
        firstOperand = finishOperation(calculator, invoker, currentOperator, firstOperand, currentValue)
        currentOperator = null;
      }

      const command = createCommand(calculator, operation, calculator.getResult());
      invoker.execute(command);

      currentOperator = operation;
      isEnteringSecondOperand = true;
    } else if (operation === 'ac') {
      const command = createCommand(calculator, operation);
      invoker.execute(command);

      firstOperand = null;
      currentOperator = null;
      isEnteringSecondOperand = false;
    } else if (operation === 'total') {
      if (currentOperator && firstOperand !== null) {
        firstOperand = finishOperation(calculator, invoker, currentOperator, firstOperand, currentValue)
        currentOperator = null;
      }
    } else if (operation === 'undo') {
      if (firstOperand !== null || currentOperator !== null) {
        invoker.undo();
      } else {
        calculator.setResult('No operation to undo');
      }
    } else {
      if (currentOperator !== null && firstOperand !== null) {
        firstOperand = finishOperation(calculator, invoker, currentOperator, firstOperand, currentValue)
        currentOperator = null;
      } else {
        firstOperand = currentValue;
      }
      
      currentOperator = operation;
      isEnteringSecondOperand = true;
    }
  }
});