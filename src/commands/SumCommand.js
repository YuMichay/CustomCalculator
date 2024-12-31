import Command from "../command";
import { subtract, summarize } from "../operations";

class SumCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    const result = summarize(this.firstOperand, this.secondOperand);
    this.calculator.setResult(result);
  }

  undo() {
    const result = subtract(this.calculator.getResult(), this.secondOperand);
    this.calculator.setResult(result);
  }
}

export default SumCommand;