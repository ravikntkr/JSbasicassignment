// 17. Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let EnterYearMonth = daysInMonth(1, 2023);
console.log(EnterYearMonth);
