/* Problem Statement

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

*/

let result = 0;

for (let i = 2; i < 355000; i++) {
    let sumOfPowers = 0;
    let number = i;
    while (number > 0) {
        let d = number % 10;
        number = number / 10 | 0;

        let temp = d;
        for (let j = 1; j < 5; j++) {
            temp *= d;
        }
        sumOfPowers += temp;
    }

    if (sumOfPowers === i) {
        result += i;
    }
}

console.log("The sum of all the numbers that can be written as the sum of fifth powers of their digits " + result);
