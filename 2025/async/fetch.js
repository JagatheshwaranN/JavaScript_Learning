// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((users) => {
    //console.log(users);
    users.forEach(element => {
        console.log(element);
    });
})

console.log(users);