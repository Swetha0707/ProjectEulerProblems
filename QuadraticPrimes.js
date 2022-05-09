/*Problem Statement

Euler discovered the remarkable quadratic formula:


It turns out that the formula will produce 40 primes for the consecutive integer values . However, when  is divisible by 41, and certainly when  is clearly divisible by 41.

The incredible formula  was discovered, which produces 80 primes for the consecutive values . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

, where  and 

where  is the modulus/absolute value of 
e.g.  and 
Find the product of the coefficients,  and , for the quadratic expression that produces the maximum number of primes for consecutive values of , starting with .
*/
var a,b;
function solution() {

    var maxC = 0;
    var maxAB = 0;
    for (a = -999; a <= 999; a++) {
      for ( b = -1000; b <= 1000; b++) {
  
        var c = countConsecutivePrimes(a, b);
        if (c > maxC) {
          maxC = c;
          maxAB = a * b;
        }
      }
    }
    return maxAB;
  }
  
  function countConsecutivePrimes(a, b) {
  
    for (var n = 0; ; n++) {
      var t = n * n + a * n + b;
      if (!isPrime(t)) {
        return n;
      }
    }
  }
  function isPrime(n) {

  if (n < 2)
    return false;

  if (n % 2 === 0)
    return n === 2;

  if (n % 3 === 0)
    return n === 3;

  var h = Math.floor(1 + Math.sqrt(n));
  var i = 5;

  while (i <= h) {
    if (n % i === 0)
      return false;
    if (n % (i + 2) === 0)
      return false;
    i+= 6;
  }
  return true;
}

console.log( "Product of coefficients of a and b = "+solution());