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

/*
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
*/



// Prototype Method

// Object.prototype
// Person.prototype

// Person Constructors

/*
function Person(firstName,lastName, dob ) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.birthday = new Date(dob);
 // console.log(this.birthday);

 // now the calculateAge function is common for all the objects which we are going to create so we can prototype the calculateAge function

//  this.calculateAge = function(){
//    const diff = Date.now() - this.birthday.getTime();
//    //console.log(diff);
//    const ageDate = new Date(diff);
//    //console.log(ageDate);
//    return  Math.abs(ageDate.getUTCFullYear()-1970);
//  }
 
}

// we can now define the prototype for the calculate age function because it is common in both dixit and sawan object
Person.prototype.calculateAge = function(){
 const diff = Date.now() - this.birthday.getTime();
 const ageDate = new Date(diff);
 return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const dixit = new Person('Dixit','Bishwas','11-26-1997');

const sawan = new Person('Sawan','Kumar','06-16-1997');
//console.log(dixit.calculateAge());

console.log(sawan.firstName);
console.log(sawan.calculateAge());
*/

/*
// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting 
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}.`;
}

const person1 = new Person('john','doe');
//console.log(person1.greeting());

// customer constructor
function Customer(firstName,lastName,phone,membership){
  Person.call(this,firstName,lastName);

  this.phone = phone;
  this.membership =membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return Customer()

Customer.prototype.constructor = Customer;

// create customer

const customer1 = new Customer('Tom','Smith','8319448718','standard');

console.log(customer1);

// customer greetings

Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
}

console.log(customer1.greeting());

*/

const personPrototype = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
const mary = Object.create(personPrototype);
mary.firstName = 'mery';
mary.lastName = 'smith';
mary.age = 30;
console.log(mary.greeting());

// object create method

const brad = Object.create(personPrototype,{
  firstName: {value: 'Brad'},
  lastName: {value:'Traversry'},
  age: {value: 36}
});

console.log(brad);

console.log(brad.greeting());



























