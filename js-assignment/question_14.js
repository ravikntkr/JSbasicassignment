// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

function checkeven(num) {
  if (num % 2 == 0) {
    return "The given number is a even number";
  } else {
    return "The given number is not a even number";
  }
}

let number = checkeven(6);
console.log(number);
