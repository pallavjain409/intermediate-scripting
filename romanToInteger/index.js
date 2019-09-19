var romanToInt = function (s) {
    if(!s){
        return undefined;
    }
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let count = s.length - 1;
    let int = 0;
    let prev = roman[s[count]]; 

    while (count >= 0) {
        let curr = roman[s[count]];
        if (curr >= prev) {
            int += curr;
        } else {
            int = int - curr;
        }
        prev = curr;
        count--;
    }
    return int;
};
console.log(romanToInt(""))