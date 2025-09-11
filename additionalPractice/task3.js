"use strict;"
function findPrimes(start, end) {
  if (start < 1 || end > 100_000_000 || start > end) {
    console.error("Invalid range");
    return;
  }

  const primes = [];
  const chunkSize = Math.ceil((end - start + 1) / 100);
  let current = start;
  const startTime = performance.now();

  let progressCheckpoint = 10;

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function processChunk() {
    const endChunk = Math.min(current + chunkSize - 1, end);
    for (let i = current; i <= endChunk; i++) {
      if (isPrime(i)) primes.push(i);
    }

    current = endChunk + 1;

    const percentDone = Math.floor(((current - start) / (end - start + 1)) * 100);
    if (percentDone >= progressCheckpoint) {
      console.log(`Progress: ${percentDone}%`);
      progressCheckpoint += 10;
    }

    if (current <= end) {
      setTimeout(processChunk, 0);
    } else {
      const duration = ((performance.now() - startTime) / 1000).toFixed(2);
      console.log(`Found ${primes.length} primes in ${duration} seconds`);
    }
  }

  processChunk();
}

findPrimes(1, 1000000);