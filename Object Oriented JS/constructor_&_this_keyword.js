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