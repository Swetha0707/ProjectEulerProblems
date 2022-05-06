/*  Problem Statement


The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

*/

function isPrime(n)
    {
          
        // Corner cases
        if (n <= 1)
            return false;
        if (n <= 3)
            return true;
        if (n % 2 == 0 || n % 3 == 0)
            return false;
  
        for (let i = 5; i * i <= n; i = i + 6)
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
  
        return true;
    }
    function checkCircular(N)
    {
          
        // Count digits.
        let count = 0, temp = N;
        while (temp > 0)
        {
            count++;
            temp = parseInt(temp / 10, 10);
        }
  
        let num = N;
        while (isPrime(num))
        {
            let rem = num % 10;
            let div = parseInt(num / 10, 10);
            num = ((Math.pow(10, count - 1)) * rem) + div;
            if (num == N)
                return true;
        }
        return false;
    }
let Number=1000000;
let countOfCircularPrimes=0
for(let i=0;i<Number;i++){
    if(checkCircular(i)){
     countOfCircularPrimes++
    }
}

console.log(countOfCircularPrimes);