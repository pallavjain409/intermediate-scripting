const patternByDuplicates = (str) =>{
    let hash = {}
    str = str.toLowerCase()
    for (let character of str){
        hash[character] = (hash[character] || 0) + 1
    }
    let newStr = "";
    for (let character of str){
        newStr += hash[character] == 1 ? '(' : ')';
    }
    return newStr

}

console.log(patternByDuplicates("din"))     //    (((
console.log(patternByDuplicates("recede"))  //    ()()()
console.log(patternByDuplicates("Success")) //    )())())
console.log(patternByDuplicates("(( @"))   //     ))((