// function add(num1 = 1, num2 = 2) {
//   //   console.log(num1 + num2);

//   return num1 + num2;
// }

// add();

// console.log(add());

// let data = (num1 = 1, num2 = 2) => {
//   console.log(num1 + num2);
// };
// data();

// let data = (num1 = 1, num2 = 2) => {
//   return num1 + num2;
// };
// console.log(data());

// let data = (num1 = 1, num2 = 2) => num1 + num2;

// console.log(data());

// function name(name, age) {
//   this.name = name;

//   this.age = age;
// }

// let val = new name("sanjay", 23);

// console.log(val);

// ********************************question*********************
// Functions

// Write a function to take temperature in degree celcius and return in degree kelvin
// Take the same function and add one more argument to it, "conversionUnit".Based on the conversionUnit , return value of temperature in Celcius or Kelvin

// function convertTemp(temperatureValue, conversionUnit){

// //based on conversion unit return output in Celcius or Kelvin

// }

// SAMPLE INPUT OUTPUT 2

// Input

// convertTemp(35, K)

// Output

// 273+35 = 308K

// SAMPLE INPUT OUTPUT1

// Input

// convertTemp(308, C)

// Output

// 308-273 = 35C

// function convertTemp(temperatureValue, conversionUnit) {
//   var temp = temperatureValue + conversionUnit;

//   console.log("my temperatureValue is :", temp + "K");

//   var converTemp = temp - temperatureValue;

//   console.log(converTemp + "C");
// }

// convertTemp(273, 35);

// *
// *
// *
// *
// *

// ***************************************constructor function***********************

// function Person(firstname, lastname, dob) {
//   this.firstname = firstname;

//   this.lastname = lastname;

//   this.dob = new Date(dob);

//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };

//   this.getfullName = function () {
//     return `${this.firstname} ${this.lastname}`;
//   };
// }

// let p1 = new Person("sanjay", "gupta", 4 - 4 - 1998);
// let p2 = new Person("Gorkah", "gupta", 6 - 9 - 1997);
// // console.log(p1);

// console.log(p1.getBirthYear());
// console.log(p1.getfullName());
// console.log(p2.dob);

// ***************************************************************************

class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;

    this.lastname = lastname;

    this.dob = new Date(dob);

    this.getBirthYear = function () {
      return this.dob.getFullYear();
    };

    this.getfullName = function () {
      return `${this.firstname} ${this.lastname}`;
    };
  }
}
let p1 = new Person("sanjay", "gupta", 4 - 4 - 1998);
let p2 = new Person("Gorkah", "gupta", 6 - 9 - 1997);
// console.log(p1);

console.log(p1.getBirthYear());
console.log(p1.getfullName());
