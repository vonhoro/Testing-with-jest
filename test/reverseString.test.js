const reverseString = require("../For_Testing/reverseString.js");
test("A string", () => {
  expect(reverseString("cancion")).toBe("noicnac");
});
