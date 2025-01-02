import Command from "../command";

class MemorySubCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.subFromMemory(this.value);
  }

  undo() {
    this.calculator.addToMemory(this.value);
  }
}

export default MemorySubCommand;