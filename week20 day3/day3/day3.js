const { count } = require("console");

function countPrimes (n) {
  let primes = new Array(n).fill(true);
  primes[0] = false, primes[1] = false;
  for (let i = 2; i < n; i++) {
      for (let j = i**2; j < n; j += i) {
          primes[j] = false;
      }
  }
  return primes.filter(bool => bool == true).length;
};

let n = 10;
console.log(countPrimes(n));
