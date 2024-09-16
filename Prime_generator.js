
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  
  function* generatePrimes(limit) {
    let number = 2; 
    while (number <= limit) {
      if (isPrime(number)) {
        yield number; 
      }
      number++; 
    }
  }
  
  
  const primeGenerator = generatePrimes(21);
  
  
  for (let prime of primeGenerator) {
    console.log(prime); 
  }
  