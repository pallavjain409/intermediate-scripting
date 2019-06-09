function binaryAgent(str) {
  return  str.split(" ").map(binary => {
    return String.fromCharCode(parseInt(binary, 2))
  }).join("");

}
module.exports = binaryAgent;
