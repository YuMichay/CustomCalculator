import Command from "../command";
import { sign } from "../operations";

class SignCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    const result = sign(this.value);
    this.calculator.setResult(result);
  }

  undo() {
    const result = sign(this.calculator.getReesult());
    this.calculator.setResult(result);
  }
}

export default SignCommand;