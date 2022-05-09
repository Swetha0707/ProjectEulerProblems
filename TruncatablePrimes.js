


let N = 1000000;

// To check if a number is prime or not
let prime = new Array(N);
	
// function to find all prime numbers
function isPrime()
{
	for(let i = 0; i < prime.length; i++)
	{
		prime[i] = true;
	}
	prime[1] = false;
	prime[0] = false;
   


	for(let i = 2; i < N; i++)
	{
     
		if (prime[i])
		{
			for(let j = i * 2; j < N; j += i)
			{
				prime[j] = false;
			}
		}
	}
}


function sumTruncatablePrimes(n)
{
	
	// To store the required sum
	let sum = 0;

	// Check every number below n
	for(let i = 10; i < n; i++)
	{
		let num = i;
		let flag = true;

		// Check from right to left
		while (num > 0)
		{
			
			// If number is not prime at any stage
			if (!prime[num])
			{
				flag = false;
				break;
			}
			num = Math.floor(num / 10);
		}

		num = i;
		let power = 10;

		// Check from left to right
		while (num / power > 0)
		{

			// If number is not prime at any stage
			if (!prime[num % power])
			{
				flag = false;
				break;
			}
			power *= 10;
		}

		
		if (flag)
		{
			sum += i;
		}
	}

	return sum;
}


let n = 1000000;
isPrime();

console.log("Truncatable prime Numbers sum ="+sumTruncatablePrimes(n));


