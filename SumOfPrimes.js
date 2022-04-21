 /*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

   Find the sum of all the primes below two million.
   
 */

     let sumOfPrime=0;
        let start=2,end=2000000;
      
     function isPrime(n){
        for(let i=2;i<=n/2;i++) {
            if (n % i == 0) {
                return 0;
            }
        }
          return 1;
    }
      for(let i=start;i<=end;i++) {
            if (isPrime(i)) {
                sumOfPrime=sumOfPrime+i;
            }
            }
            
            console.log("Sum of Primes below 2000000 = "+sumOfPrime);