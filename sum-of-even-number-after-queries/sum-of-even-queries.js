var sumEvenAfterQueries = function(A, queries) {
  let answer = [];
  let sum = getSumOfEvenDigits(A)
  for (let i = 0; i < queries.length; i++) {
    let index = queries[i][1];
    let value = queries[i][0];
    let total = A[index] + value;
    if (isEven(A[index])) {
      sum = sumForEvenNumber(A[index], value, sum, total);
    } else {
      sum = sumForOddNumber(A[index], sum, total);
    }
    answer.push(sum);
    A[index] = A[index] + value;
  }
  return answer;
};

function getSumOfEvenDigits(arr) {
  return arr.filter(number => isEven(number)).reduce((total, current) => total + current, 0)
}

function isEven(number) {
  return number % 2 == 0;
}

function sumForEvenNumber(Avalue, queriesValue, sum, total) {
  if (isEven(total)) {
    sum = sum + queriesValue;
  } else {
    sum = sum - Avalue;
  }
  return sum;
}

function sumForOddNumber(Avalue, sum, total) {
  if (isEven(total)) {
    sum = sum + total;
  }
  return sum;
}
