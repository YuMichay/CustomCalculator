import Command from "../command";

class ShowMemoryCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.showMemory();
  }

  undo() {}
}

export default ShowMemoryCommand;