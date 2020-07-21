const calculator = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => {
    if (b === 0) return "Can't divide by zero";
    return a / b;
  },
};
module.exports = calculator;
