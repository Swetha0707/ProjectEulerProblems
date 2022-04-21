/* Problem Statement

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

let a = 0, b = 0, c = 0;
const s = 1000;
let flag=0;
for (a = 1; a < s / 3; a++) {
    for (b = a; b < s / 2; b++) {
        c = s - a - b;
 
        if (a * a + b * b == c * c) {
            flag = 1;
            break;
        }
    }
 
    if (flag) {
        break;
    }
}
console.log("a ="+ a + " b = " + b + " c ="+c);
console.log("Product of abc = "+ a*b*c);