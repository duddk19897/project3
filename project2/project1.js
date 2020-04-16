document.getElementById('getPosts').addEventListener
('click', getPosts);

document.getElementById('getComment').addEventListener
('click', getComment);

document.getElementById('getUsers').addEventListener
('click', getUsers);


function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            return response.json(); 
        })
        .then(function(data){
            let output = '<h2>Posts</h2>';
            data.forEach(function(posts){
                output += 
                `
                <div class="getpost_wrap">
                    <h3> ID </h3> 
                    <p>${posts.id}</p>
                    <h3 class="green"> TITLE </h3> 
                    <p>${posts.title}</p>
                    <h3 class="blue"> POST </h3>
                    <p> ${posts.body}</p>
                </div>
                `
            });
            document.getElementById('output').innerHTML = output;
         })
     }

function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function(response){
            return response.json(); 
        })
        .then(function(data){
            let output = '<h2>comment</h2>';
            data.forEach(function(comment){
            output += `
            
                <div class="getcomment_wrap">
                    <h3 class="purple">Post ID</h3>
                    <p>${comment.postId} </p>
                    <h3 class="orange">ID</h3>
                    <p>${comment.id} </p>
                    <h3 class="yellow">NAME</h3>
                    <p>${comment.name} </p>
                    <h3 class="red">E-mail</h3>
                    <p>${comment.email} </p>
                    <h3 class="blue">comment</h3>
                    <p>${comment.body} </p>
                </div>                    
                    `;
            });
            document.getElementById('output').innerHTML = output;
             })
         }


    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                return response.json(); 
            })
            .then(function(data){
                let output = '<h2>Users</h2>';
                data.forEach(function(users){
                output += 
                `
                    <div class="getuser_wrap">
                        <h3>ID</h3>
                        <div class="getuser_item">${users.phone} </div>
                        <h3>Name</h3>
                        <div class="getuser_item">${users.name} </div>
                        <h3>Email</h3>
                        <div class="getuser_item">${users.email} </div>                          
                    </div>                
                     `;
                 });
                document.getElementById('output').innerHTML = output;
                     })
            }


    


