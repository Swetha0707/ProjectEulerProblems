/**
Problem Statement

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */
 var sumOfnum = 0;
function sigma(n) {
  var sum = 1;
  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167];

  if (n < 4) {
    return 1;
  }

  for (var i = 0; i < primes.length; i++) {

    var p = primes[i];

    if (0 === n % p) {

      var t = p * p;
      n/= p;
      while (0 === n % p) {
        t*= p;
        n/= p;
      }
      sum = sum * (t - 1) / (p - 1);
    }
    if (p * p > n) {
      break;
    }
  }

  if (n > 1) {
    sum*= n + 1;
  }
  return sum;
}

var cache = {};
function isAbundant(n) {

  if (n < 10)
    return false;

  if (cache[n]) {
    return cache[n];
  }
  return cache[n] = (sigma(n) - n > n);
}

function isSumOfTwoAbundants(n) {

  for (var i = 1; i <= n; i++) {
    if (isAbundant(i) && isAbundant(n - i))
      return true;
  }
  return false;
}

var abundants = [];
for (var i = 1; i <= 28123; i++) {
  if (isAbundant(i))
    abundants.push(i);
}
function isSumOfTwoAbundants(n) {
  for (var i = 0; i < abundants.length; i++) {
    if (isAbundant(n - abundants[i]))
      return true;
  }
  return false;
}

var isSumOfTwoAbundants = new Array(28123 + 1);
for (var i = 0; i < abundants.length; i++) {
  for (var j = i; j < abundants.length; j++) {
    if (abundants[i] + abundants[j] <= 28123) {
      isSumOfTwoAbundants[abundants[i] + abundants[j]] = true;
    } else {
      break;
    }
  }
}
function solution() {

 
  for (var i = 1; i <= 28123; i++) {
    if (!isSumOfTwoAbundants[i]) {
      sumOfnum+= i;
    }
  }
  return sumOfnum;
}
console.log("The sum of all numbers that cannot be written as the sum of two abundant numbers = "+solution());