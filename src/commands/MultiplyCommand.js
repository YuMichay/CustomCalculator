import Command from "../command";
import { divide, multiply } from "../operations";

class MultiplyCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    const result = multiply(this.firstOperand, this.secondOperand);
    this.calculator.setResult(result);
  }

  undo() {
    const result = divide(this.calculator.getResult(), this.secondOperand);
    this.calculator.setResult(result);
  }
}

export default MultiplyCommand;