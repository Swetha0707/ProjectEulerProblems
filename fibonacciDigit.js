/*Problem Statement

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

let first = 1;
let second = 1;
let third;
let index = 2;
let res=4;

const count = n => String((Math.abs(n))).length;

while (first <= 20000) {

    third = first + second;
    index++;
    if(res==count(third)){
    console.log("The index of the first term in the Fibonacci sequence to contain 1000 digits= "+index);
    break;
    }
    first = second;
    second = third;

}
