const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post Two'}
];

// function for createPost 
function createPost(post){
  setTimeout(function() {
    posts.push(post);
  },2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
     output += `<li>${post.title}</li>`;
     
    });
    document.body.innerHTML = output;
  },2000);
}

createPost({title: 'Post three',body: 'This is post three'});

getPosts();