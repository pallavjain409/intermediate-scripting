function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let obj of collection) {
    if (!obj[pre]) {
      return false;
    }
  }
  return true;
}

module.exports = truthCheck;
