// Problem1) Write a function min that takes two arguments and returns their minimum.
function min(num1, num2) {
    return Math.min(num1, num2);
}
//Problem2) We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(num) {
    num = Math.abs(num);
    if (num == 0) {
        return true
    }
    else if (num == 1) {
        return false
    }
    else {
        return isEven(num - 2);
    }
}
// Problem 3)You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
function countBs(string) {
    if (/B/.test(string)) {
        return string.match(/B/g).length;
    }
    return 0;
}
function countChar(string, char) {
    const matchExp = new RegExp(char, "g");
    if (matchExp.test(string)) {
        return string.match(matchExp).length;
    }
    return 0;
}
module.exports = {min, isEven, countBs, countChar};