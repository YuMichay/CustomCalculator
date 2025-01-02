import Command from "../command";
import { factorial, undoFactorial } from "../operations";

class FactorialCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.results.pop();
  }

  execute() {
    const result = factorial(this.value, 1);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default FactorialCommand;