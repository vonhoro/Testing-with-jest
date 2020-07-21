const capitalize = require("../For_Testing/capitalize.js");

test("A string", () => {
  expect(capitalize("cancion")).toBe("Cancion");
});
test("A number", () => {
  expect(capitalize(8)).toBe(8);
});
test("one letter", () => {
  expect(capitalize("a")).toBe("A");
});
test("Empty", () => {
  expect(capitalize()).toBe("");
});
