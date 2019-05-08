function binaryAgent(str) {
  var englishSentence = str.split(" ").map(binary => {
    return String.fromCharCode(parseInt(binary, 2))
  }).join("");
  return englishSentence;
}
module.exports = binaryAgent;
