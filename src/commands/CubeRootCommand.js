import Command from "../command";
import { cube, cubeRoot } from "../operations";

class CubeRootCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.previousValue = this.calculator.getResult();
  }

  execute() {
    const result = cubeRoot(this.value);
    this.calculator.setResult(result);
  }

  undo() {
    this.calculator.setResult(this.previousValue);
  }
}

export default CubeRootCommand;