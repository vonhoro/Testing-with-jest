const reverseString = (string) => {
  const stringArray = string.split("");
  const reverseStringArray = stringArray.reverse();
  let reversing = "";
  for (const letter of reverseStringArray) {
    reversing += letter;
  }
  return reversing;
};
module.exports = reverseString;
