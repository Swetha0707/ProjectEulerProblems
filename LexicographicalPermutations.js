/**
Problem Statement

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?


 */

var fac = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function solution(num) {

  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var ret = "";

  num--;
  for (var i = arr.length - 1; i >= 0; i--) {
    var t = num / fac[i] | 0;
    num%= fac[i];
    ret+= arr[t];
    arr.splice(t, 1);
  }
  return ret;
}

console.log("the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 = "+solution(1e6));