let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(resp => resp.json())
.then(obj =>  {
    console.log(obj);
    for (const key in obj) {
        if (typeof obj[key] != 'object') {
            let div = document.createElement('div');
            div.innerHTML = `${key}: ${obj[key]}`
            document.body.appendChild(div);
        }
    }
    for (const objElement in obj.address) {
        if (typeof obj.address[objElement] != 'object') {
            let div = document.createElement('div');
            div.innerHTML = `${objElement}: ${obj.address[objElement]}`
            document.body.appendChild(div);

        }
        if (typeof obj.address[objElement] === 'object'){
        let geo = obj.address[objElement];
            for (const geoKey in geo) {
                let div = document.createElement('div');
                div.innerHTML = `${geoKey}: ${geo[geoKey]}`
                document.body.appendChild(div);
            }
        }
    }
    for (const objElement in obj.company) {
        let div = document.createElement('div');
        div.innerHTML = `${objElement}: ${obj.company[objElement]}`
        document.body.appendChild(div);
    }
})