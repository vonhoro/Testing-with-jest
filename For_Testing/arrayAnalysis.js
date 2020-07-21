const Analisys = (numbers) => {
  if (!Array.isArray(numbers)) return "Not an array";
  let length = numbers.length;
  if (length === 0) return "Empty array";
  let firstNumber = numbers[0];
  let min = firstNumber;
  let max = firstNumber;
  let sum = 0;
  for (const number of numbers) {
    if (isNaN(number)) return "The array must only have numbers";
    max = max > number ? max : number;
    min = min < number ? min : number;
    sum += number;
  }
  let average = sum / length;
  return { average, min, max, length };
};
module.exports = Analisys;
