import { commands } from './commands';

export const createCommand = (calculator, operator, firstOperand = null, secondOperand = null) => {
  const CurrentCommand = commands[operator];
  return new CurrentCommand(calculator, firstOperand, secondOperand);
}