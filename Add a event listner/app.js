// select the element and then add a event listner on that element

// method 1
/*
document.querySelector('.clear-tasks').addEventListener('click',function(){
    alert('button is cliked');
})

*/

//method 2

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e)
{
//alert('button is cliked');
    
    let val;
    val = e;
    
    // Event target element
    
    val = e.target;
    val= e.target.id;
    val= e.target.className;
    
    val = e.clientX;
    
    console.log(val);
}