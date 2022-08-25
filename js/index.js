window.addEventListener('DOMContentLoaded', event => {
    div_todos = document.querySelector('#todos')
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todos => {
                div_todos.innerHTML += `<input type="checkbox" value="${todos.id}" id="c1" ${todos.completed ? "checked" : ""}/>
                    <label for="c1">${todos.title}</label><br>`



            });
        })
        .catch(err => console.error(err));



})