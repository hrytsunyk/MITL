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


        let button = document.createElement('button');
        button.innerHTML = 'Show comments';
        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');

        child.append(idTitle, bodyPost, button, commentsDiv);

       fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
       .then (Response => Response.json())
           .then( comments => {


                   button.onclick = () => {

                   for (const comment of comments) {
                           console.log(comment.body);

                           let addCom = document.createElement('p');
                           let comTitle = document.createElement('h5')
                           let comTitleDiv = document.createElement('div');
                           comTitleDiv.classList.add('commTitleDiv');

                           comTitle.innerHTML = `comment №${comment.id}`
                           addCom.innerHTML = comment.body;

                           comTitleDiv.append(comTitle, addCom);


                           commentsDiv.append(comTitleDiv)
                   }
                   }
           })





    });