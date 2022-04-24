/**
 * 
 * Problem Statement
 * 
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
 */
function powerDigitSum(exp) {

    var order = 0;
    var digits = Math.floor(1 + exp * Math.LN2 / Math.LN10);

    var number = new Uint8Array(digits);

    number[0] = 1;

    for (var i = 0; i < exp; i++) {

        var carry = 0;

        for (var j = 0; j <= order; j++) {

            var product = 2 * number[j] + carry;
            number[j] = product % 10;
            carry = product / 10 | 0;

            if (j === order && carry > 0) {
                order++;
            }
        }
    }
    return number.reduce((p, x) => x + p, 0);
}

console.log("The sum of digits of the number 2^1000 =" +powerDigitSum(1000));