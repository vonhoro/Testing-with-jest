const analisys = require("../For_Testing/arrayAnalysis.js");
test("A string", () => {
  expect(analisys("cancion")).toBe("Not an array");
});
test("Empty Array", () => {
  expect(analisys([])).toBe("Empty array");
});
test("Array with letters", () => {
  expect(analisys([1, 3, "a"])).toBe("The array must only have numbers");
});
test("Normal stuff", () => {
  expect(analisys([1, 2, 4, 5])).toMatchObject({
    average: 3,
    min: 1,
    max: 5,
    length: 4,
  });
});
test("Normal stuff", () => {
  expect(analisys([9, 2, 4, 5, -5, -3])).toMatchObject({
    average: 2,
    min: -5,
    max: 9,
    length: 6,
  });
});
