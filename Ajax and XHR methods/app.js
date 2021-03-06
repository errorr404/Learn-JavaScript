document.getElementById('button').addEventListener('click',loadData);

function loadData(){

  // Create the XHR Object
  const xhr = new XMLHttpRequest();

  // open
xhr.open('GET','data.txt',true);
// console.log('ReadyState',xhr.readyState);

// Optional - used for spinners/loaders
xhr.onprogress =  function() {
  console.log('ReadyState',xhr.readyState);
}


  xhr.onload = function(){
    if(this.status ===200){
      //console.log(this.responseText);
      document.getElementById('output').innerHTML =
      `<h1>${this.responseText}</h1>`
    }
  }
xhr.onerror = function(){
  console.log('Request Error...');
}


// xhr.onreadystatechange = function(){
//   console.log('ReadyState',xhr.readyState);
//   if(this.status ===200 && this.readyState === 4){
   
//     console.log(this.responseText);
//   }
// }

  xhr.send();



  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready

  //HTTP Statuses
  //200: --- OK
  //403: --- Forbidden
  //404: --- Not Found
}