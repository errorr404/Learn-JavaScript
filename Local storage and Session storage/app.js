// Set local storage Item

//localStorage.setItem('name','Dixit');
//localStorage.setItem('age','20');

// set a session storage

// sessionStorage.setItem('name','Temprory');

// Remove from storage
// localStorage.removeItem('name');

// get item from storage

//  const name = localStorage.getItem('name');
//  const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// localStorage.clear();
 
document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('task').value;
let tasks;
if(localStorage.getItem('tasks')===null){
  tasks = [];
} else
{
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));
alert('Task Saved');

e.preventDefault();

});

const tasks =  JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});