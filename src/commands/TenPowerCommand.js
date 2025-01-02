import Command from "../command";
import { tenPower } from "../operations";

class TenPowerCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.results.pop();
  }

  execute() {
    const result = tenPower(this.value);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default TenPowerCommand;