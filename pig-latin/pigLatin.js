function translatePigLatin(str) {
  str.toLowerCase;
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  var regex = /[aeiou]/gi
  if (firstLetter.match(regex)) {
    str += "way";
    console.log(str);
    return str;

  }
  if (!(str.match(regex))) {
    str += 'ay';
    console.log(str);
    return str;
  }
  str = str.split("");
  for (let index in str) {
    if (str[index].match(regex)) {
      console.log(index);
      let str2 = str.splice(index);
      str2 = str2.join("");
      str = str.join("")
      console.log(str2);
      str = str2 + str + "ay";
      console.log(str);
      return str;
    }
  }

}

module.exports = translatePigLatin;
