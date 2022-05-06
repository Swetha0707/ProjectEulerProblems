/* Problem Statement

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/

function intToString(n, base1)
{
    let str="";
    while (n > 0)
    {
        let digit = n % base1;
        n = parseInt(n / base1, 10);
        str += String.fromCharCode(digit +
                                   '0'.charCodeAt());
    }
    return str;
}
function isPalindrome(i, k)
{
    let temp = i;
 
    // m stores reverse of a number
    let m = 0;
    while (temp > 0)
    {
        m = temp % 10 + m * 10;
        temp = parseInt(temp / 10, 10);
    }
 
    // If reverse is equal to number
    if (m == i)
    {
         
        // Converting to base k
        let str = intToString(m, k);
        let ch = str.split('');
        ch.reverse();
        let str1 = ch.join("");
         
        if (str == str1)
        {
            return i;
        }
    }
    return 0;
}
function sumPalindrome(n, k)
{
    let sum = 0;
    for(let i = 1; i < n; i++)
    {
        sum += isPalindrome(i, k);
    }
    console.log("The sum of Double Base Palindromes below 1000000 = "+sum);
}
 
// Driver code
let n = 1000000;
let k = 2;
 
sumPalindrome(n, k);