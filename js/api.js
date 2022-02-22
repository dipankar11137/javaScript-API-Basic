/* function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
} */
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function moreDataLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayMoreData(data));
}
function PostDataLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
// PostDataLoad();

function displayMoreData(data) {
    const ul = document.getElementById('user');

    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name}
          email:${user.email}`;
        ul.appendChild(li);
    }

}
