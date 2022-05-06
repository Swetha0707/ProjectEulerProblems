function pandigitalMultiple() {
    for (let x = 9487; x >= 9234; x--) {
    let res = 100002 * x;
      if (isPandigital(res)) {
        return res;
      }
    }
    return null;
  }
  function isPandigital(n) {

    var m = 0;
  
    for (var i = 0; n > 0; i++) {
      m|= 1 << n % 10;
      n = n / 10 | 0;
    }
    return 2 + m === 1 << (i + 1);
  }
const solution=pandigitalMultiple();
console.log("The Largest Pandigital number "+solution);