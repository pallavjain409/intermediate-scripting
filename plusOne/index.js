var plusOne = function(digits) {
  let n = digits.length - 1;
  let digit = digits[n] + 1;
  if (digit === 10) {
   let carry = 1;
   while (n >= 0 && carry) {
      if (carry) {
        digits[n] += 1;
        carry = 0;
      }
      if (digits[n] === 10) {
        digits[n] = 0;
        carry = 1;
      }
      n--;
    } ;
    if (carry) {
      digits.unshift(1);
    }
  }
  else {
      digits[n] += 1
  }
  return digits;
};

console.log(plusOne([1,2,3]));
