function perimeter(n) {
    var max = 0, maxp = null;
    for (var p = 2; p <= n; p+= 2) {
      var c = 0;
      for (var a = 2; a < p / 3; a++) {
        if (p * (p - 2 * a) % (2 * (p - a)) == 0)
          c++;
      }
      if (c > max) {
        max = c;
        maxp = p;
      }
    }
    return maxp;
  }
  const solution=perimeter(1000);
  console.log("The number of solutions is maximised for p = "+solution);