function pairElement(str) {
  let arr = [];
  for (let char of str) {
    switch (char) {
      case "A":
        {
          arr.push(["A", "T"]);
          break;
        }
      case "T":
        {
          arr.push(["T", "A"]);
          break;
        }
      case "C":
        {
          arr.push(["C", "G"]);
          break;
        }
      case "G":
        {
          arr.push(["G", "C"]);
          break;
        }
    }
  }
  return arr;
}

module.exports = pairElement;
