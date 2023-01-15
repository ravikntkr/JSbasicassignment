// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	 *****

let num = 3;
let str = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

// OUTPUT
//   *
//  ***
// *****
