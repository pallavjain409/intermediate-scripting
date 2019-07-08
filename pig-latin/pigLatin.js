function translatePigLatin(str) {
  str.toLowerCase;
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  var regex = /[aeiou]/gi
  if (firstLetter.match(regex)) {
    str += "way";
    return str;

  }
  if (!(str.match(regex))) {
    str += 'ay';
    return str;
  }
  str = str.split("");
  for (let index in str) {
    if (str[index].match(regex)) {
      let str2 = str.splice(index);
      str2 = str2.join("");
      str = str.join("")
      str = str2 + str + "ay";
      return str;
    }
  }

}

module.exports = translatePigLatin;
