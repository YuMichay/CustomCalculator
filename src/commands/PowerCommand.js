import Command from "../command";
import { power, powerRoot } from "../operations";

class PowerCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    const result = power(this.firstOperand, this.secondOperand);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default PowerCommand;