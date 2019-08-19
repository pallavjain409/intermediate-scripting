//Write a function to take an input n and print first n terms of the Fibonacci series.

function fibonacciUptoNterms(n) {

    if (n <= 0) {
        return "Invalid Input";
    } else if (n == 1) {
        return `Fibonacci Series upto 1 term : 0 `;
    }

    let fibonnaciSeries = [0, 1];
    n = n - 2;

    function nextFibonacciTerm(curr, prev) {
        if (n === 0) {
            return `Fibonacci Series upto ${ fibonnaciSeries.length} terms : ${fibonnaciSeries.join()}`;
        }
        let next = curr + prev;
        fibonnaciSeries.push(next);
        prev = curr;
        curr = next;
        n--;
        return nextFibonacciTerm(curr, prev);
    }

    return nextFibonacciTerm(1, 0);
}
console.log(fibonacciUptoNterms(3));