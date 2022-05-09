//let primes=new Array(987654321);
  let result = 0;

function isPandigital(n) {

    var m = 0;
  
    for (var i = 0; n > 0; i++) {
      m|= 1 << n % 10;
      n = n / 10 | 0;
    }
    return 2 + m === 1 << (i + 1);
  }

  
 
for (let i = 987654321; i >= 0; i--) {
    if(isPandigital(i)&&prime(i)){
        result = i;
        break;
    }
}
function prime(n){
    for(let i=2;i<=n/2;i++) {
        if (n % i == 0) {
            return 0;
        }
    }
      return 1;
}

console.log("The largest n-digit pandigital prime is ="+result);