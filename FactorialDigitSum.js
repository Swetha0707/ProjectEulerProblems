
/*

Problem Statement

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/


let result=0
function factorial(n){
  if(n===0 || n===1){
    return n;
  }
  else{
    return n*factorial(n-1);
  }
}
let fact=factorial(100);
    
    console.log(fact);
    
    while(fact>0){
  result+=parseInt(fact%10)

  fact=Math.floor(fact/10);
 
}
console.log("The sum of the digits in the 100! = " +result);