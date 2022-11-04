// class Person {
//   constructor(username, email, password) {
//     this.username = username;

//     this.email = email;

//     this.password = password;
//   }

//   static countuser() {
//     console.log("there are 599 user availble here");
//   }

//   register() {
//     console.log(this.username + "  is now ragister");
//   }
// }

// // let val = new Person("sanjay", "sanja@gmail", 1122);

// // val.register();

// // console.log(val);
// Person.countuser();

var birthday = new Date(1998, 0, 4, 10, 30, 55);

// console.log(birthday);

// get the month of Date(0-11)
// console.log(birthday.getMonth());

// get the full year(yyyy)

// console.log(birthday.getFullYear());

// get the day of the month (0-31)
// console.log(birthday.getDate());

// get the day of the week(0-6)
// console.log(birthday.getDay());

// get the day of the date(0-23)
// console.log(birthday.getHours());

// get the number of milisecond since 1st jan 1998
console.log(birthday.getTime());
