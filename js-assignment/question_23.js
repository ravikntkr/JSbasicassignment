// 23. Write a program to check that the number given by the user is a prime number or not.

function checkPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }
  if (count == 2) {
    return "The given number is Prime";
  } else {
    return "The given number is not prime";
  }
}

let output = checkPrime(8);
console.log(output);
