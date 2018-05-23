/*
- EasyHttp library
- Library for making HTTP request

@version 2.0.0
@author Dixit
@license MIT

*/
// old way

// class EasyHttp{
//   // Make an HTTP GET request
//   get(url){
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>console.log(data))
//     .catch(err => console.log(err));
//   }
// }


class EasyHttp{
  // Make an HTTP GET request
  get(url){
    return new Promise((resolve,reject) =>{
      fetch(url)
      .then(res => res.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });   
  }

  // Make HTTP POST Request

  get(url,data){
    return new Promise((resolve,reject) =>{
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });   
  }

   // make an HTTP PUT Request

   put(url,data){
    return new Promise((resolve,reject) =>{
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });   
  } 

  // Delete HTTP Request
  delete(url){
    return new Promise((resolve,reject) =>{
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
       
      })
      .then(res => res.json())
      .then(data =>resolve('Resource deleted'))
      .catch(err => reject(err));
    });   
  } 

}

