import Command from "../command";
import { cube, cubeRoot } from "../operations";

class CubeCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    const result = cube(this.value);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default CubeCommand;