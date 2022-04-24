/*

  Problem Statement

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/
function collatz(n){
 let counter = 1
 while (n>1){
  if (n%2 == 0){
   n = n/2
   counter += 1
  }
  else{
   n = 3*n+1
   counter += 1
  }
  if(n==1){
   return counter
}
}
}

let largest_number = 0


let large_seq = 0


for (let i=2;i<=1000000;i++){
 n = collatz(i)

 if (n > large_seq){
  largest_number = i
  large_seq = n
}
}

console.log ("Largest collatz sequence producing number "+largest_number + " with a sequence of "+ large_seq);