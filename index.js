var a = 10;
var b = 20;


var temp = a;

a = b;

b = temp;

console.log(a, b);

// second method to find swap the number

[a, b] = [b, a];

console.log(a, b);
