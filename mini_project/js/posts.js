let url = new URL(location.href);
// console.log(url);
let postID = url.searchParams.get("post");
// console.log(postID)

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then((response) => response.json())
    .then((value) => {

        let child = document.querySelector('.child');
        let bodyPost = document.createElement('h5');
        let idTitle = document.createElement('h2');

        idTitle.innerHTML = `Post №${value.id}`;
        bodyPost.innerHTML = value.body;




       fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
       .then (Response => Response.json())
           .then( comments => {
        let button = document.createElement('button');
               button.innerHTML = 'Show comments';
               let commentsDiv = document.createElement('div');
               commentsDiv.classList.add('comments');

               for (const comment of comments) {
                   let comTitleDiv = document.createElement('div');
                   let addCom = document.createElement('p');
                   let comTitle = document.createElement('h5')
                   comTitleDiv.classList.add('commTitleDiv');
                   console.log(comment.body);

                   comTitle.innerHTML = `comment №${comment.id}`
                   addCom.innerHTML = comment.body;

                   comTitleDiv.append(comTitle, addCom);


                   commentsDiv.append(comTitleDiv)

               }

                  child.append(idTitle, bodyPost, button, commentsDiv);


               button.onclick =() =>{
                   if (commentsDiv.style.display === 'none') {
                       commentsDiv.style.display = 'block';
                   } else  {
                       commentsDiv.style.display = 'none';
                   }
               };
           })





    });
