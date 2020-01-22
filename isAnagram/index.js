const isAnagaram = (s, t) => {
  let map = {};
  s.split("").forEach(
    letter => (map[letter] = map[letter] ? map[letter] + 1 : 1)
  );
  t.split("").forEach(
    letter => (map[letter] = map[letter] ? map[letter] - 1 : -1)
  );
  return Object.keys(map).every(key => map[key] === 0);
};

console.log(isAnagaram("anagram", "anagrmar"));
