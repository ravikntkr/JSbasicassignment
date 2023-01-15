// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let timeanddate = {
  now: new Date(),

  // Date and time - [ YYYY-MM-DD HH:mm ]
  datentime1: function () {
    let current_timedate1 =
      this.now.getFullYear() +
      "-" +
      this.now.getMonth() +
      1 +
      "-" +
      this.now.getDate() +
      " " +
      this.now.getHours() +
      ":" +
      this.now.getMinutes();

    return current_timedate1;
  },

  // Date and time - [ DD-MM-YYYY HH:mm ]
  datentime2: function () {
    let current_timedate2 =
      this.now.getDate() +
      "-" +
      this.now.getMonth() +
      1 +
      "-" +
      this.now.getFullYear() +
      " " +
      this.now.getHours() +
      ":" +
      this.now.getMinutes();

    return current_timedate2;
  },

  // Date and time - [ DD/MM/YYYY HH:mm ]
  datentime3: function () {
    let current_timedate3 =
      this.now.getDate() +
      "/" +
      this.now.getMonth() +
      1 +
      "/" +
      this.now.getFullYear() +
      " " +
      this.now.getHours() +
      ":" +
      this.now.getMinutes();

    return current_timedate3;
  },
};

console.log("Format [YYY-MM-DD HH:MM] ", timeanddate.datentime1());
console.log("Format [DD-MM-YYY HH:MM] ", timeanddate.datentime2());
console.log("Format [DD/MM/YYY HH:MM] ", timeanddate.datentime3());
