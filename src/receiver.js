class Calculator {
  constructor(display) {
    this.display = display;
    this.result = 0;
    this.memory = 0;
  }

  setResult(value) {
    console.log(value)
    this.result = value;
    this.updateDisplay(this.result);
  }

  getResult() {
    return this.result;
  }

  reset() {
    this.result = 0;
    this.updateDisplay(this.result);
  }

  addToMemory(value) {
    if (!isNaN(value)) this.memory += +value;
  }

  subFromMemory(value) {
    if (!isNaN(value)) this.memory -= +value;
  }

  resetMemory() {
    this.memory = 0;
  }

  showMemory() {
    this.setResult(this.memory);
  }

  updateDisplay(value) {
    this.display.value = value;
  }
};

export default Calculator;