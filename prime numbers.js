function isPrimeNumber(number) {
  let flag = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    return true;
  } else {
    return false;
  }
}

function sumPrimes(num) {
  let sum = 0;
  for (let number = 2; number <= num; number++) {
    if (isPrimeNumber(number)) {
      sum += number;
    }
  }
  return sum;
}

sumPrimes(10);
