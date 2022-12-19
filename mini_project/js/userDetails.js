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
                let divFrontCard = document.querySelector('.user-card-front');
                let photo = document.querySelector('.photo');

                let h2 = document.createElement('h2')
                let img = document.createElement('img');
                    img.alt = 'Photo.img'
                    img.classList.add('face');

                            for (const userPic of data) {
                                if (id == userPic.id) {
                                    img.src = `${userPic.avatar}`;
                                    photo.append(img);
                                }
                            }

                for (const key in obj) {
                    let firstH4 = document.querySelector('.first-h4');
                    let secondH4 = document.querySelector('.second-h4');
                    let thirdH4 = document.querySelector('.third-h4');
                    let h4 = document.createElement('h4');

                    if (typeof obj[key] !== 'object') {
                        h4.innerHTML = `${key}: ${obj[key]}`;
                        firstH4.appendChild(h4);
                    } else {
                        let h4_2 = document.createElement('h4');

                        h4_2.innerHTML = `${key}:`;
                        secondH4.appendChild(h4_2)

                        for (const inner in obj[key]) {
                            let h4_3 = document.createElement('h4');

                            if (typeof obj[key][inner] !== 'object') {
                                h4_3.innerHTML = `${inner}: ${obj[key][inner]}`;
                                secondH4.appendChild(h4_3)

                            } else {
                                let h4_4 = document.createElement('h4');
                                let h4_5 = document.createElement('h4');

                                h4_5.innerHTML = `${inner}:`;
                                thirdH4.appendChild(h4_5);

                                for (const endKey in obj[key][inner]) {
                                    h4_4.innerHTML = `${endKey}: ${obj[key][inner][endKey]}`
                                    thirdH4.appendChild(h4_4)

                                }

                            }
                        }


                    }

                }

            })


})







let button = document.querySelector('.button')
let card = document.querySelector('.users-card')

button.addEventListener('click', () => {
    card.classList.toggle('flipCard')
});








    //
    //          let divFrontCard = document.querySelector('.user-card-front');
    //          let divBackCard = document.querySelector('.user-card-back');
    //          let divUsersCard = document.querySelector('.users-card');
    //          let {data} = value;
    //             let h2 = document.createElement('h2')
    //             let img = document.createElement('img');
    //             img.alt = 'Photo.img'
    //             img.classList.add('face');
    //
    //             for (const userPic of data) {
    //                 if (id == userPic.id) {
    //                     img.src = `${userPic.avatar}`;
    //                     divFrontCard.append(img);
    //                 }
    //             }
    //
    //             for (const key in obj) {
    //                 let userDiv = document.createElement('div');
    //
    //                 if (typeof obj[key] !== 'object') {
    //                     userDiv.innerHTML = `${key}: ${obj[key]}`
    //                     divFrontCard.appendChild(userDiv)
    //
    //                     } else {
    //                         divFrontCard.innerHTML = `${key}:`;
    //
    //                         for (const inner in obj[key]) {
    //                             let innerDiv = document.createElement('div');
    //                             if (typeof obj[key][inner] !== 'object') {
    //                                 innerDiv.innerHTML = `${inner}: ${obj[key][inner]}`
    //
    //                             } else {
    //                                 innerDiv.innerHTML = `${inner}:`
    //
    //                                 for (const endKey in obj[key][inner]) {
    //                                     let endDiv = document.createElement('div');
    //                                     if (typeof obj[key][inner][endKey] !== 'object') {
    //                                         endDiv.innerHTML = `${endKey}: ${obj[key][inner][endKey]}`
    //                                     }
    //                                     innerDiv.appendChild(endDiv)
    //
    //                                 }
    //
    //                             }
    //                             userDiv.appendChild(innerDiv)
    //
    //                         }
    //
    //                     }
    //
    //                     userInfo.appendChild(userDiv)
    //
    //                 }
    //                     let button = document.createElement('div');
    //
    //                     let postAnchor = document.createElement('a');
    //                     postAnchor.href = `posts.html?post=${id}`
    //
    //                         button.classList.add('button');
    //                         postAnchor.innerHTML = 'post of current user';
    //
    //                         button.appendChild(postAnchor)
    //                         userInfo.appendChild(button);
    //
    //
    //         })
    //
    // })
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

