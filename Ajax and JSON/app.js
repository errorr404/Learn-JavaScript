// Add event listner for button1

document.getElementById('button1').addEventListener('click',loadCustomer);

// Add event listner for button2

document.getElementById('button2').addEventListener('click',loadCustomers);

// function for loadCustomer
function loadCustomer(e){
  // console.log('1');
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customer.json',true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>College: ${customer.college}</li>
      <li>ID: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

// function for loadCustomers
function loadCustomers(e){
  // console.log('1');
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customers.json',true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = '';

      // to iterate all the values 
      customers.forEach(function(customer){
         output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>College: ${customer.college}</li>
        <li>ID: ${customer.phone}</li>
        </ul>
        `;
      });

     

      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}