
function testTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}

function displayTodos(data) {
    for (const user of data) {
        // console.log(user.title);
        const ul = document.getElementById('user');
        const li = document.createElement('li');
        li.innerText = `Title : ${user.title}`;
        ul.appendChild(li);
    }

    console.log(data);
}