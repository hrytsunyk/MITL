let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(resp => resp.json())
.then(obj => {
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
        document.body.appendChild(userDiv);

    }

})
