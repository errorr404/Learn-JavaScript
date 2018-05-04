//document.querySelector('#task-title').style.color= 'red';

// create new elment

const li = document.createElement('li');

// Add class

li.className= 'collection-item'

// Add id

li.id='new-item'
//li.setAttribute('id','new-item');

// Add attribute

li.setAttribute('title','new-item')

// create text node and append

li.appendChild(document.createTextNode('Hello Dixit'));
//create new link element

const link = document.createElement('a');

//add class

link.className = 'delete-item secondry-content';

// add icon

link.innerHTML='<i class="fa fa-remove"></i>'

// append link to li

li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//Console log 

console.log(li);