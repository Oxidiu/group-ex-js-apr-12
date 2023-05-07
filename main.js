let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}



function double(arr){
  let doubled = arr.map((nr) => nr * 2);
  return doubled;
}
const doubled = double(data)
// console.log(doubled)

function getPrimes(arr){
  let primes = arr.filter (isPrime);
  return primes;
}
// console.log(getPrimes(data))
let primes = getPrimes(data);
const primeConvert = () => {
  
  let primesConverted = [];
  for (let i = 0; i < primes.length; i++) {
    let prime = {number: primes[i], isPrime: true}
    primesConverted.push(prime)
  }
  return primesConverted;
}
let primesConverted = primeConvert(data);

// console.log(primesConverted)

const highestPrime = () => {
  //how to use reduce method to get the highest number from an array?
  let highest = primesConverted.reduce((acc, b) => acc > b.number ? acc : b.number, 0)
  return highest;
}
// console.log(highestPrime()); 

const sortPrimes = () => {
  let primesSorted = primesConverted.sort((a, b) => a.number - b.number);
  return primesSorted;
}
console.log(sortPrimes());