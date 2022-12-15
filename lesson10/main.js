fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (const user of users) {
        let div = document.createElement('div');
        div.innerHTML = `${user.id}. ${user.name} `;
        let a = document.createElement('a');
        a.href = `user-details.html?id=${user.id}`;
        a.target = '_blank';
        a.innerHTML = 'users details';
        div.appendChild(a)
        document.body.append(div)

    }
})