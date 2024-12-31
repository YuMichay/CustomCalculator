import Command from "../command";
import { factorial, undoFactorial } from "../operations";

class FactorialCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    if (this.value < 0) {
      this.calculator.setResult("No negative numbers");
    } else if (this.value > 20) {
      this.calculator.setResult("Only less than 20");
    } else {
      const result = factorial(this.value, 1);
      this.calculator.setResult(result);
    }
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default FactorialCommand;