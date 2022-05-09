/* Problem Statement

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/
function digtCancelling() {

    var dp = 1;
    var np = 1;
  
    for (var c = 1; c <= 9; c++) {
      for (var d = 1; d < c; d++) {
        for (var n = 1; n < d; n++) {
          if ((n * 10 + c) * d === (c * 10 + d) * n) {
            np*= n;
            dp*= d;
          }
        }
      }
    }
    return dp / gcd(np, dp);
  }
  function gcd( x, y){
      let gcdi=1;
    for(let i = 1; i <= x && i <= y; i++)  
    {  
    //returns true if both conditions are satisfied   
    if(x%i==0 && y%i==0)  
    //storing the variable i in the variable gcd  
    gcdi = i;  
    }  
    return gcdi;
  }
  console.log(digtCancelling());