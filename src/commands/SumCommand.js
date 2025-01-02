import Command from "../command";
import { summarize } from "../operations";

class SumCommand extends Command {
  constructor(calculator, firstOperand, secondOperand) {
    super();
    this.calculator = calculator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.previousValue = this.calculator.results.pop();
  }

  execute() {
    const result = summarize(this.firstOperand, this.secondOperand);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default SumCommand;