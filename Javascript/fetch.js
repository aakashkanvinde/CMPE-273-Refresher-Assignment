const fetch = require("node-fetch");

const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL).then(response => response.json()).then(data => {
let userNames = response.map(user => user.usernames).then(userNames => console.log(userNames));    
}).catch((err) => {
    console.log(error)
});
