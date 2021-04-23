const countCharacMoreThanOne = str => {
  str.toLowerCase();
  let duplicates = [];
  for (let index = 0; index < str.length; index++) {
    if (str.indexOf(str[index]) !== index) {
      if (duplicates.includes(str[index]) == false) {
        duplicates.push(str[index]);
      }
    }
  }
  return duplicates.length;
};


console.log(countCharacMoreThanOne("abcde")); //  -> 0 # no characters repeats more than once
console.log(countCharacMoreThanOne("aabbcde")); //  -> 2 # 'a' and 'b'
console.log(countCharacMoreThanOne("aabbcdeB")); //  -> 2 # 'a' and 'b'
console.log(countCharacMoreThanOne("indivisibility")); //  -> 1 # 'i'
console.log(countCharacMoreThanOne("Indivisibilities")); //  -> 2 # 'i' and 's'
console.log(countCharacMoreThanOne("aa11")); //  -> 2 # 'a' and '1'
