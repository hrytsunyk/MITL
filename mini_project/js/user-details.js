let url = new URL (location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then(resp => resp.json())
    .then(obj=> {
    for (const key in obj) {
        let divInfo = document.querySelector('.users-info')
let div = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerHTML = `${key}: ${}`
div.append(h2)


divInfo.appendChild(div)
    }
})

// let divInfo = document.querySelector('.users-info')
// let div = document.createElement('div');
// let h2 = document.createElement('h2');
// h2.innerHTML =
// div.append(h2)


// divInfo.appendChild(div)

