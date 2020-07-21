const calculator = require("../For_Testing/calculator.js");
test("Add", () => {
  expect(calculator.suma(4, 9)).toBe(13);
});
test("Substrac", () => {
  expect(calculator.resta(4, 9)).toBe(-5);
});
test("multiiply", () => {
  expect(calculator.mult(4, 9)).toBe(36);
});
test("division", () => {
  expect(calculator.div(18, 9)).toBe(2);
});
test("division by 0", () => {
  expect(calculator.div(18, 0)).toBe("Can't divide by zero");
});
