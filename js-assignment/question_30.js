// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function Calculator(num1, operator, num2) {
  if (operator == "+") {
    console.log("Addition of Num1 + Num2 = ", num1 + num2);
  } else if (operator == "-") {
    console.log("Substraction of Num1 - Num2 = ", num1 - num2);
  } else if (operator == "*") {
    console.log("Multiplication of Num1 * Num2 = ", num1 * num2);
  } else if (operator == "/") {
    console.log("Division of Num1 / Num2 = ", num1 / num2);
  } else if (operator == "%") {
    console.log("Mod of Num1 % Num2 = ", num1 % num2);
  } else {
    console.log("Invalid Input ⚡⚡");
  }
}

let result = Calculator(5, "+", 5);
