// Storage Controller

// Item Controller
const ItemCtrl = (function(){
 // Item constructor
 const Item = function(id,name,calories){
   this.id = id;
   this.name= name;
   this.calories = calories;
 }

 // Data structure/ state
 const data ={
   items: [
     {id:0,name:'Steak Dinner',calories:1200},
     {id:1,name:'Cookie',calories:400},
     {id:2,name:'Eggs',calories:300}
   ],
   currentItem: null,
   totalCalories: 0
 }
 // public methods
 return {
   getItems: function(){
     return data.items;
   },
  
     addItem: function(name,calories){
       let ID;
       // create id
       if(data.items.length>0){
         ID = data.items[data.items.length-1].id+1;
       }else{
         ID: 0;
       }
       // Calories to number
       calories = parseInt(calories);
       // create new item
       newItem = new Item(ID,name,calories);
       // Add to items array
       data.items.push(newItem);

     return newItem;

     
  
   },
   logData: function(){
     return data;
   }
 }
})();

// UI controller
const UICtrl = (function(){
  // UI selector object
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
   
 //Public methods
  return{
populateItemList: function(items){

  let html ='';

items.forEach(function(item){

html+=`<li class="collection-item" id="item-${item.id}">
<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
<a href="#" class="secondary-content">
  <i class="edit-item fa fa-pencil"></i>
</a>
</li>`;


});
// Insert List items
document.querySelector(UISelectors.itemList).innerHTML= html;

},
// get input item
getItemInput: function(){
return {
  name:document.querySelector(UISelectors.itemNameInput).value,
  calories:document.querySelector(UISelectors.itemCaloriesInput).value
}
},
getSelectors: function(){
  return UISelectors;
}
  }
})();

// App controller
const AppCtrl = (function(ItemCtrl,UICtrl){
//  console.log(ItemCtrl.logData());
// Load Event Lisners
const loadEventListeners = function(){
  // Get UI Selectors
const UISelectors = UICtrl.getSelectors();

// Add item event
document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);
}

// AdditemSubmit
const itemAddSubmit = function(e){
// console.log('add');
// Get form input from UIController
const input = UICtrl.getItemInput();

// console.log(input); 
// check for name and calories input

if(input.name!=='' && input.calories!==''){
  const newItem = ItemCtrl.addItem(input.name,input.calories);
}
  e.preventDefault();
}
// Public methods
return {
  init: function(){

    // console.log('init app');

    // fetch Items from data structure
    const items = ItemCtrl.getItems();
    // Populate list with items
    UICtrl.populateItemList(items);
    
    // Load event Listners
    loadEventListeners();

    // Load event Listners
    loadEventListeners();
  }
}
})(ItemCtrl,UICtrl);

// Initialize App
AppCtrl.init();