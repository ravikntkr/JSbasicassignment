// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let num = 3;
let str = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);

// OUPUT
// ***
// ***
// ***
