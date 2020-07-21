const capitalize = (string) => {
  // Convert arguments object to an array
  if (string === undefined) return "";
  if (!isNaN(string)) return string;
  const stringCapitilized = string.replace(string[0], string[0].toUpperCase());
  return stringCapitilized;
};
module.exports = capitalize;
