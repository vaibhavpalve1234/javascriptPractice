"use strict";

var _require = require("console"),
    count = _require.count;

function countPrimes(n) {
  var primes = new Array(n).fill(true);
  primes[0] = false, primes[1] = false;

  for (var i = 2; i < n; i++) {
    for (var j = Math.pow(i, 2); j < n; j += i) {
      primes[j] = false;
    }
  }

  return primes.filter(function (bool) {
    return bool == true;
  }).length;
}

;
var n = 10;
console.log(countPrimes(n));