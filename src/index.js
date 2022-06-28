module.exports = function reverse (n) {
    n = Math.abs(n);
  let string = n.toString();
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    newString = string[i] + newString;
  }
  return newString - 0;
}
