import Command from "../command";

class MemoryAddCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.addToMemory(this.value);
  }

  undo() {
    this.calculator.subFromMemory(this.value);
  }
}

export default MemoryAddCommand;