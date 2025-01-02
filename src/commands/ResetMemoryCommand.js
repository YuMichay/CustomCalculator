import Command from "../command";

class ResetMemoryCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.resetMemory();
  }

  undo() {
    this.calculator.setResult('No undo after reset');
  }
}

export default ResetMemoryCommand;