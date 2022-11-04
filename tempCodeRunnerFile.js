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
