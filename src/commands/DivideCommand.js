import Command from "../command";
import { divide, multiply } from "../operations";

class DivideCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.previousValue = this.calculator.results.pop();
  }

  execute() {
    const result = divide(this.firstOperand, this.secondOperand);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default DivideCommand;