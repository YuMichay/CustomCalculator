class Invoker {
  constructor() {
    this.commands = [];
  }

  execute(command) {
    command.execute();
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    if (command) {
      command.undo();
    }
  }
};

export default Invoker;