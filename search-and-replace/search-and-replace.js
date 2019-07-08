function myReplace(str, before, after) {
  if (before[0] >= 'A' && before[0] <= 'Z') {
    after = after[0].toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

module.exports = myReplace;
