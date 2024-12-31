import Command from "../command";
import { tenPower, undoTenPower } from "../operations";

class TenPowerCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    if (this.value > 1000) {
      this.calculator.setResult('Result too large');
    } else {
      const result = tenPower(this.value);
      this.calculator.setResult(result);
    }
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default TenPowerCommand;