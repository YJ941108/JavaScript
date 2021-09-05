// The let & const keyword
var x = 10;
var y = 10;
{
    let x = 2;
    const y = 2;
    console.log("let x =" + x);
    console.log("const x =" + y);
}
console.log("var x, y =" + x + "," + y);

// Arrow Functions
// ES5
var x = function(x, y) {
    return x * y;
}
// ES6
const a = (a,b) => { return a * b};

// For/of
// Looping over on Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    console.log(x);
}
//Looping over a String
let language = "JavaScript";

for (let x of language) {
    console.log(x);
}

// Map Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits = new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits);

// Set Objects
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

// Classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1, myCar2);

// Promises
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {myResolve("I love you!!");},3000);
});
myPromise.then(function(value) {
    console.log(value);
})

// Symbol
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;

  console.log(person[id], person.id);

  // Default Parameters
function para(x, y = 10) {
    return x + y;
}
console.log(para(5));

// Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return (sum);
}

let num = sum(1,2,3,4,5,6,7,8,9);
console.log(num);

// String.includes() & String.startsWith() & String.endsWith()
let txt = "Hello world";
console.log(txt.includes("world"));
console.log(txt.startsWith("Hello"));
console.log(txt.startsWith("He"));
console.log(txt.endsWith("world"));

// Array.from()
console.log(Array.from("ABCDEFG"));

// Array.keys()
const keys = fruits.keys();
console.log(keys);
for (let x of keys) {
    text += x+ " ";
    console.log(x);
}

// Array.find() & Array.findIndex()
const numbers = [1,3,5,7,9];
let first = numbers.find(findNum);
let firstIndex = numbers.findIndex(findNum);
function findNum(value,index,array){
    return value > 3;
}
console.log(first);
console.log(firstIndex);

// New Math Methods
console.log(Math.trunc(4.8), Math.trunc(-4.2));
console.log(Math.sign(-4), Math.sign(4));
console.log(Math.cbrt(125));
// New Number Properties
// New Number Methods
// New Global Methods
// Iterables Object.entries
// JavaScript Modules