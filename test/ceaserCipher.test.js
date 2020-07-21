const cipher = require("../For_Testing/ceaserCipher.js");

test("between 0 and 25", () => {
  expect(cipher("a aaz", 1)).toBe("b bba");
});
test("between 0 and 25", () => {
  expect(cipher("a aCa", 7)).toBe("h hJh");
});
test("between 0 and 25 with numbers", () => {
  expect(cipher("a 9aCa", 7)).toBe("h 9hJh");
});
test("biger than 25", () => {
  expect(cipher("a 9aCa", 32)).toBe("h 9hJh");
});
test("biger than 25", () => {
  expect(cipher("Eres bien Maricoz! 898", 254)).toBe("Iviw fmir Qevmgsd! 898");
});
test("Lower than 0 ", () => {
  expect(cipher("Eres bien Maricoz! 898", -254)).toBe("Use a positive number");
});
