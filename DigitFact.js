/* Problem Statement

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.
*/
FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]

function factorialSum(n) {

    var sum = 0;
    while (n > 0) {
        sum+= FACT[n % 10];
        n = n / 10 | 0;
    }
    return sum;
}
function solution() {
    var sum = 0;
    for (var i = 10; i <= 1499999; i++) {
        if (i === factorialSum(i)) {
            sum+= i;
        }
    }
    return sum;
}
console.log("The sum of factorial to their digits = "+solution());
