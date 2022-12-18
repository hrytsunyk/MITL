let url = new URL (location.href);
// console.log(url)
let id = url.searchParams.get('id');
// console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then(resp => resp.json())
    .then(obj=> {

        fetch('https://reqres.in/api/users')
            .then(resp => resp.json())
            .then((value) => {
             let {data} = value;

             let userInfo = document.querySelector('.users-info');
                let h2 = document.createElement('h2')
                let img = document.createElement('img');
                img.alt = 'Photo.img'
                img.classList.add('face');

                for (const userPic of data) {
                    if (id == userPic.id) {
                        img.src = `${userPic.avatar}`;
                        userInfo.append(img);
                    }
                }
                    for (const key in obj) {
                        let userDiv = document.createElement('div');

                        if (typeof obj[key] !== 'object') {
                            userDiv.innerHTML = `${key}: ${obj[key]}`
                        } else {
                            userDiv.innerHTML = `${key}:`;

                            for (const inner in obj[key]) {
                                let innerDiv = document.createElement('div');
                                if (typeof obj[key][inner] !== 'object') {
                                    innerDiv.innerHTML = `${inner}: ${obj[key][inner]}`
                                } else {
                                    innerDiv.innerHTML = `${inner}:`

                                    for (const endKey in obj[key][inner]) {
                                        let endDiv = document.createElement('div');
                                        if (typeof obj[key][inner][endKey] !== 'object') {
                                            endDiv.innerHTML = `${endKey}: ${obj[key][inner][endKey]}`
                                        }
                                        innerDiv.appendChild(endDiv)

                                    }

                                }
                                userDiv.appendChild(innerDiv)

                            }

                        }

                        userInfo.appendChild(userDiv)

                    }
                        let button = document.createElement('div');
                        let h5 = document.createElement('div');
                        h5.classList.add('postOnClick')

                        let postAnchor = document.createElement('a');
                        postAnchor.href = `userPost.html?post=${id}`

                            button.classList.add('button');
                            postAnchor.innerHTML = 'post of current user';

                            button.appendChild(postAnchor)
                            userInfo.appendChild(button);


            })

    })
//         let divInfo = document.querySelector('.users-info')
// let divUserinfo = document.createElement('div');
// let h2 = document.createElement('h2');
// h2.innerHTML = `${key}:`
// divUserinfo.append(h2);


        // divInfo.appendChild(divUserinfo)

// let divInfo = document.querySelector('.users-info')
// let div = document.createElement('div');
// let h2 = document.createElement('h2');
// h2.innerHTML =
// div.append(h2)


// divInfo.appendChild(div)

