import { createCommand } from "./createCommand";

export const finishOperation = (calculator, invoker, currentOperator, firstOperand, currentValue) => {
  if (currentOperator && firstOperand !== null) {
    const command = createCommand(calculator, currentOperator, firstOperand, currentValue);
    invoker.execute(command);
    return calculator.getResult();
  }
  return firstOperand;
}