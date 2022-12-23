let url = new URL(location.href);
console.log(url);
let postID = url.searchParams.get("post");
console.log(postID)

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then((response) => response.json())
    .then((value) => {
        console.log(value.body);
        let child = document.querySelector('.child')
        let bodyPost = document.createElement('h2');

        bodyPost.innerHTML = value.body;
        child.appendChild(bodyPost);




    });