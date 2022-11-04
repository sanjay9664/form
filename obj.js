var Person = {
  Name: "Sanjay",
  Last_name: "Gupta",
  Age: "Address",

  handdle: ["Rohan", "manu", "abhi"],

  Detaile: {
    mobile_No: 99238738292,

    street: "ghandi nagar",

    city: "Gujrat",

    house_no: 223,
  },
};

// console.table(Person);
// console.log(Person);
// console.log(Person.Name);
// console.log(Person.handdle[2]);

// console.log(Person.Detaile);

// ************************************Destructuring of this object **************************
// const { Name, Last_name, age, handdle ,Detaile :{city, street} } = Person;

// console.log(Name);
// console.log(age);
// console.log(handdle);
// console.log(city);
// console.log(street);

// ************************************Destructuring of this object *********************

// ************************************object method *********************

// Person.email = "guptaji30749@gmail.com";

// console.log(Person);

// ************************************object method *********************

var arr = [
  {
    id: 1,

    meeting: "HR",

    iscomplete: false,
  },

  {
    id: 2,

    meeting: "MANAGER",

    iscomplete: false,
  },

  {
    id: 3,

    meeting: "BOSS",

    iscomplete: true,
  },
];

// console.log(arr[0]);
// console.log(arr[0].meeting);
// console.log(arr[1]);
// console.log(arr[2]);

// *************************************************iterative style **********************
// for (var a = 0; a < arr.length; a++) {
//   // console.log(arr[a])
//   //   console.log(arr[a].meeting);
//   console.log(arr[a]);
// }

// for (var data of arr) {
//   console.log(data.meeting);
// }
// *************************************************iterative style **********************

// ****************************************function progamming very imp*********High method style **********************
// forEach , filter , map

// arr.forEach(function (arr) {
//   console.log(arr.meeting);
// });

// arr.forEach((arr) => {
//   console.log(arr.id);
// });

// ******************************************************filter****************************
let complete = arr
  .filter((arr) => {
    return arr.iscomplete == true;
  })
  .map((arr) => {
    return arr.meeting;
  });

console.log(complete);
