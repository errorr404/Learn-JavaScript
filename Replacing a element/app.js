// Replace an Elememnt

// Create a newHEading

const newHeading = document.createElement('h2');
// give the same class

newHeading.id='task-title';
// set a new name element in the new heading

newHeading.appendChild(document.createTextNode('Task list'));

// get the oldHeading
const oldHeading = document.getElementById('task-title');

// get the parent
const parent = document.querySelector('.card-action')
// replace
parent.replaceChild(newHeading,oldHeading);

// console log
console.log(newHeading);


/***********************************************************/

//Remove Element

const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

li[0].remove();

ul.removeChild(li[2]);