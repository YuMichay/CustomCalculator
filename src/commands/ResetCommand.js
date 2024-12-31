import Command from "../command";

class ResetCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.reset();
  }

  undo() {
    this.calculator.setResult('No undo after reset');
  }
}

export default ResetCommand;