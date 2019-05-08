function myReplace(str, before, after) {
  console.log(before[0])
  if (before[0] >= 'A' && before <= 'Z') {
    after = after[0].toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

module.exports = myReplace;
