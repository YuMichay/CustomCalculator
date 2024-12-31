import Command from "../command";
import { fraction } from "../operations";

class FractionCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    if (this.value == 0) {
      this.calculator.setResult('Cannot divide by zero');
    } else {
      const result = fraction(this.value);
      this.calculator.setResult(result);
    }
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default FractionCommand;