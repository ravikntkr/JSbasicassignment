// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

function BmiCalculator(height, weight) {
  BMI = weight / height ** 2;
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 || BMI <= 24.9) {
    return "Normal Weight";
  } else if (BMI >= 25 || BMI <= 29.9) {
    return "Overweight";
  } else if (BMI > 30) {
    return "Obese";
  }
}

let output = BmiCalculator(2, 50);
console.log(output);