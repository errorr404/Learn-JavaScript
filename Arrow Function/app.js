// const sayHello = function(){
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }


// one line function does not need btaces
// const sayHello = () => console.log('Hello');

//One line returns

// const sayHello = () => console.log('Hello');

// same as above

// const sayHello = function(){
//   return 'Hello';
// }

// Return object
// const sayHello = () => ({ msg: 'Hello' });

// single param does not need paranthesis

// const sayHello = (name) => console.log(`Hello ${name}`);

// multiples params need paranthesis

// const sayHello = (firstName , lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('brad','traversry');

const users = ['Nathen','John','William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// shorter 
// const nameLengths = users.map(name =>{
//   return name.length;
// });

// shortest

const nameLengths = users.map(name => name.length);
console.log(nameLengths);
