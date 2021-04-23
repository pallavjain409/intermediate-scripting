function getShortestUniqueSubstring(arr, str) {
  if (arr.length > str.length) {
    return "";
  }
  let l = 0;
  let r = 0;
  let mapt = {};
  let maps = {};
  let n = str.length - 1;
  arr.forEach(key => (mapt[key] = (mapt[key] || 0) + 1));
  let count = Object.keys(mapt).length;
  let formed = 0;
  let min = [0, 0, Number.MAX_SAFE_INTEGER];
  while (r <= n) {
    let char = str.charAt(r);
    maps[char] = (maps[char] || 0) + 1;
    if (mapt[char] && mapt[char] === maps[char]) {
      formed++;
    }
    console.log(maps);
    while (formed == count) {
      if (min[2] > r - l + 1) {
        min = [l, r, r - l + 1];
      }
      let cL = str.charAt(l);
      maps[cL]--;
      if (mapt[cL] && mapt[cL] > maps[cL]) {
        formed--;
      }
      l++;
    }

    r++;
  }

  if (min[2] === Number.MAX_SAFE_INTEGER) {
    return "";
  }
  console.log(min);
  return str.substring(min[0], min[1] + 1);
}
let arr = ["x", "y", "z"];
let str = "xyyzyzyx";
console.log("output", getShortestUniqueSubstring(arr, str));
