const Cipher = (string, num) => {
  if (num < 0) return "Use a positive number";
  let number = 0;
  if (num > 25) {
    number = num % 25;
  } else number = num;

  let stringArray = string.split("");
  let codedString = "";
  for (const letter of stringArray) {
    let code = letter.charCodeAt(0);
    let newCode = 0;
    if (code > 64 && code < 91) {
      newCode = code + number;
      if (newCode > 90) {
        newCode = newCode - 90 + 64;
      }
      codedString += String.fromCharCode(newCode);
    } else if (code > 96 && code < 123) {
      newCode = code + number;
      if (newCode > 122) {
        newCode = newCode - 122 + 96;
      }
      codedString += String.fromCharCode(newCode);
    } else {
      codedString += letter;
    }
  }
  return codedString;
};
module.exports = Cipher;
