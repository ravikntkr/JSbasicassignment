// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

function checkgrade(score) {
  if (score >= 80 && score <= 100) {
    return "GRADE [ A ]";
  } else if (score >= 70 && score <= 89) {
    return "GRADE [ B ]";
  } else if (score >= 60 && score <= 69) {
    return "GRADE [ C ]";
  } else if (score >= 50 && score <= 59) {
    return "GRADE [ D ]";
  } else if (score > 0 && score < 50) {
    return "GRADE [ F ]";
  }
}

let output = checkgrade(10);
console.log(output);
