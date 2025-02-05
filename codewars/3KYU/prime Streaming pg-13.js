// Create an endless stream that yields prime numbers. 
// The stream must be able to produce a million primes in a few seconds.

class Primes {
    static *stream() {
      yield 2; // First prime
      let primes = [2]; // Store found primes
      let num = 3; // Start checking from 3
  
      while (true) {
        let isPrime = true;
  
        // Check divisibility only up to sqrt(num) using known primes
        let sqrtNum = Math.sqrt(num);
        for (let p of primes) {
          if (p > sqrtNum) break; // No need to check further
          if (num % p === 0) {
            isPrime = false;
            break;
          }
        }
  
        if (isPrime) {
          primes.push(num);
          yield num;
        }
  
        num += 2; // Skip even numbers
      }
    }
  }
  
  // Usage example:
  const primeGen = Primes.stream();
  console.log(primeGen.next().value); // 2
  console.log(primeGen.next().value); // 3
  console.log(primeGen.next().value); // 5
  console.log(primeGen.next().value); // 7
  console.log(primeGen.next().value); // 11
  
  // Generate 1 million primes (performance test)
  const startTime = performance
  