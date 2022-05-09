function getDigit(n) {
    var r, s = 0, k = 0;
    while (s < n) {
      r = s;
      s+= 9 * 10**k++ * k;
    }
    var h = n - r - 1;
    var t = 10**(k - 1) + h / k;
    var p = h % k;
    return +String(t)[p];
   }
   let solution=1;
   let N=1;
   while(N!=10000000){
       solution*=getDigit(N);
       N*=10;
   }
   console.log("The solution for d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000 = "+solution);
