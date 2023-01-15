// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let getdate = {
  now: new Date(),
  // - What is the year today?
  year: function () {
    return this.now.getFullYear();
  },

  //- What is the month today as a number?
  month: function () {
    return this.now.getMonth() + 1;
  },

  // - What is the date today?
  date: function () {
    return this.now.getDate();
  },

  // What is the hours now?
  hour: function () {
    return this.now.getHours();
  },

  // - What is the minutes now?
  minutes: function () {
    return this.now.getMinutes();
  },

  // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

  secnd: function () {
    return Date.now();
  },
};

// Date Output

let current_date = getdate.date();
let current_month = getdate.month();
let current_year = getdate.year();

console.log(current_date + "-" + current_month + "-" + current_year);

// Time Output

let current_hours = getdate.hour();
let current_minutes = getdate.minutes();

console.log(current_hours + ":" + current_minutes);
