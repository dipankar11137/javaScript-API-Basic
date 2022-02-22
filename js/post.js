function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}
loadPosts();

function displayPost(posts) {
    const postConatiner = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        // div  a class add 
        div.classList.add('post');
        div.innerHTML = `
        <h2 class="id-style">${post.id}</h2>
        <h3 class="style">${post.title}</h3>
        <p>${post.body}</p>
        `;
        postConatiner.appendChild(div);
        // console.log(post)
    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
    // .then(data => console.log(data))
}

addAPost();
// console.log("mama paice");

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// console.log(stuInfo.name);

////////////////////////////////
const info = { data: [{ language: "Javascript", library: "React" }] }
const result = info.data[0].library;
console.log(result);
