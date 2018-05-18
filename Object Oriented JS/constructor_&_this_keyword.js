// person constructor

function Person(name) {
  this.name = name; // here this keyword refrene the current object class
  console.log(this);
}

const dixit = new Person('dixit');
const sawan = new Person('sawan');