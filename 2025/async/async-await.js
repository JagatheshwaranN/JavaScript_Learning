// Async Await

// **************** Uncomment on use ****************
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     console.log(userData);
//     return userData;
// }
// users();

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// NO OUTPUT
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = () => {
//     users();
// }

// anotherFunction();

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT - Promise State
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = async() => {
//     await users();
// }

// console.log(anotherFunction());

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT - Actual Values
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = async() => {
//     const userlist = await users();
//     console.log(userlist);
// }

// anotherFunction();

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT
// {userList: Array(0)}
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// const myUsers = {
//     userList:[]
// }
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = async() => {
//     const userlist = await users();
//     console.log(userlist);
// }

// anotherFunction();
// console.log(myUsers);

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT
// {userList: Array(0)}
// let myUsers = {
//     userList:[]
// }
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = async() => {
//     myUsers.userList = await users();
    
// }

// anotherFunction();
// console.log(myUsers);


// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT
// {userList: Array(0)}
// {userList: Array(10)}
// let myUsers = {
//     userList:[]
// }
// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     // console.log(userData);
//     return userData;
// }

// const anotherFunction = async() => {
//     const data = await users();
//     myUsers.userList = data;
//     console.log(myUsers);   
// }

// anotherFunction();
// console.log(myUsers);

// **************** Uncomment on use ****************
// Use of Async & Await in multiple functions
// OUTPUT
// {userList: Array(0)}
// {userList: Array(10)}
let myUsers = {
    userList:[]
}
const users = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    anotherFunction(userData);
    return userData;
}

const anotherFunction = (data) => {
    myUsers.userList = data;
    console.log(myUsers);   
}

users();
console.log(myUsers);

//Example for GET
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const joke = await response.json();
    console.log(joke);
    console.log(joke.joke);
}

getDadJoke();

const payloadData = {
    id: 'iykVf21gykb', joke: 'My boss told me to have a good day. So I went home...'
}

// Example for POST
const postDadJoke = async (payload) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(payload)
    })
    const responseData = await response.json();
    console.log(responseData);
}

postDadJoke(payloadData);
