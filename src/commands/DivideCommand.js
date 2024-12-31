import Command from "../command";
import { divide, multiply } from "../operations";

class DivideCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    if (this.secondOperand == 0) {
      this.calculator.setResult('Cannot divide by zero');
    } else {
      const result = divide(this.firstOperand, this.secondOperand);
      this.calculator.setResult(result);
    }
  }

  undo() {
    const result = multiply(this.calculator.getResult(), this.secondOperand);
    this.calculator.setResult(result);
  }
}

export default DivideCommand;