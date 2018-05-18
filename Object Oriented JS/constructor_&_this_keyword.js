// person constructor
/*
function Person(name,age) {
  this.name = name; // here this keyword refrene the current object class
  this.age = age;
}

// console.log(this); //here this keyword is a window object

const dixit = new Person('dixit',21);
const sawan = new Person('sawan',20);

console.log(sawan.age);
*/
/*
// find the current age of a person

function Person(name, dob ) {
  this.name = name; 
  this.birthday = new Date(dob);
 // console.log(this.birthday);
 this.calculateAge = function(){
   const diff = Date.now() - this.birthday.getTime();
   //console.log(diff);
   const ageDate = new Date(diff);
   //console.log(ageDate);
   return  Math.abs(ageDate.getUTCFullYear()-1970);
 }
}

const sawan = new Person('Dixit','11-26-1997');
console.log(sawan.calculateAge());
*/


// some extra things
// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);