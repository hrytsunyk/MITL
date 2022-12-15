fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
    .then(users => {
    for (const user of users) {
        let usersDivHTML = document.querySelector('.users');

        let div = document.createElement('div');
        div.classList.add('user');
        div.id = `user-${user.id}`
        div.innerHTML =`${user.id}. ${user.name} `;

        let a = document.createElement('a');
        a.href = `user-details.html?id=${user.id}`;
        a.target = 'blank';
        div.append(a);

        let button = document.createElement('button');
        button.innerHTML = 'user details';
        a.appendChild(button)




        usersDivHTML.appendChild(div);

    }
})