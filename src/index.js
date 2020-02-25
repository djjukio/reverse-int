module.exports = function reverse (n) {
  let numStr = n.toString().split("").reverse().join("");
  let result = parseInt(numStr);
  return result;
}
