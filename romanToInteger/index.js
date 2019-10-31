var romanToInt = function (s) {
    if (!s) {
        return;
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
    let integer = 0;
    let prev = roman[s[count]];

    while (count >= 0) {
        if (!prev) {
            return "Invalid roman number";
        }
        let curr = roman[s[count]];
        if (curr >= prev) {
            integer += curr;
        } else {
            integer = integer - curr;
        }
        prev = curr;
        count--;
    }
    return integer;
};
console.log(romanToInt("II"));