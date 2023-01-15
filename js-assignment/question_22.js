// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

//- Sort the array and find the min and max age

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortages = ages.sort();
console.log(sortages);

// OUTPUT
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26];

console.log("Min value inside array is : ", sortages[0]);
console.log("Max value inside array is : ", sortages[sortages.length - 1]);

// OUTPUT
// Min value inside array is :  19
// Max value inside array is :  26

// - Find the median age(one middle item or two middle items divided by two)

// for (let i = 0; i <= sortages.length - 1; i++) {
//   if (sortages.length % 2 == 0) {
//     console;
//   }
// }

// - Find the average age(all items divided by number of items)

let sum = 0;
for (let i = 0; i <= ages.length - 1; i++) {
  sum += ages[i];
}
console.log("Average age is = ", sum / ages.length);

// OUTPUT
// Average age is =  22.8

// - Find the range of the ages(max minus min)

let min = Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
let max = Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);

console.log("Range of the ages = ", max - min);

// - Compare the value of (min - average) and (max - average), use abs() method

let average = 22.8;
let = min_abs = Math.abs(min);
let = max_abs = Math.abs(max);
// (max - average)
console.log("Max - Avereage = ", Math.abs(max_abs, average));
console.log("Min - Avereage = ", Math.abs(min_abs, average));
