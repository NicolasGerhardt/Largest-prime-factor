// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const target = 600851475143;
let primes = [2, 3];
let date = new Date();
const startTime = date.getTime();

function LastInArray(arr) {
  return arr[arr.length-1];
}

function IsPrime(num) {
  if (num <= 1) return false;

  for (let i = 0; i < primes.length; i++) {
    if (num == primes[i]) return true;
    if (num % primes[i] == 0) return false;
  }

  for (let i = LastInArray(primes); i < Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }

  primes.push(num);
  console.log({primes});
  return true;
}

let record = 1;
let i = record;
while (i < target/record) {
  i += 2;
  if (target % i == 0 && IsPrime(i)) {
    record = i;
  }
}

date = new Date();
const endTime = date.getTime();
const span = endTime - startTime;
console.log("record: " + record);
console.log("found in " + span + " ms")