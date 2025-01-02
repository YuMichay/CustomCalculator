import Command from "../command";
import { square, squareRoot } from "../operations";

class SquareCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.results.pop();
  }

  execute() {
    const result = square(this.value);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default SquareCommand;