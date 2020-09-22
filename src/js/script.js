let timeContainer = document.getElementById('time');
let inputField = document.getElementById('task');
let user = document.getElementById("userName");
let greetingMessage = document.getElementById('greeting');
let changeNameBtn = document.getElementById('changeName');
let todoInput = document.getElementById('todo-input');
let deleteBtn = document.getElementById('deleteBtn');

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    timeContainer.innerHTML = hours + ":" + minutes;
    const timer = setTimeout(function() {
        startTime()
    }, 60000);
}
startTime();

todoInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'Enter') {
        localStorage.setItem('todo', `${todoInput.innerHTML}`);
        todoInput.setAttribute("contenteditable", "false");
        todoInput.innerHTML = localStorage.getItem('todo');
        todoInput.style.border = 0;
    }
})


user.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', `${user.innerHTML}`)
        user.setAttribute("contenteditable", "false");
        user.innerHTML = `${localStorage.getItem('name')}.`;
        user.style.border = 0;
    }
})

function checkLocalStorageName() {
    if (localStorage.getItem('name') == null) {
        user.setAttribute('placeholder', 'name');
    } else {
        greetingMessage.innerHTML = 'Good evening,' + ' ';
        user.innerHTML = `${localStorage.getItem('name')}.`;
        user.setAttribute('contenteditable', 'false');
        user.style.border = 0;
        greetingMessage.appendChild(user)
    }
}

checkLocalStorageName();

function checkLocalStorageTodo() {
    if (localStorage.getItem('todo') == null) {
        todoInput.setAttribute('placeholder', 'enter task here');
    } else {
        todoInput.innerHTML = localStorage.getItem('todo');
        todoInput.setAttribute('contenteditable', 'false');
        todoInput.style.border = 0;
    }
}

checkLocalStorageTodo();

todoInput.addEventListener('dblclick', function(event) {
    todoInput.setAttribute('contenteditable', 'true');
    todoInput.style.borderBottom = '2px solid #ffffff';
    if (localStorage.getItem('todo') != todoInput.innerHTML) {
        localStorage.removeItem('todo')
        checkLocalStorageTodo()
    } else {
        todo.setAttribute('contenteditable', 'false');
    }
})

user.addEventListener('dblclick', (event) => {
    user.setAttribute('contenteditable', 'true');
    user.style.borderBottom = '2px solid #ffffff';
    // if (`${localStorage.getItem('name')}.` != user.innerHTML) {
    //     localStorage.removeItem('name')
    //     checkLocalStorageName()
    // } else {
    //     user.setAttribute('contenteditable', 'false');
    // }
})

function lineThrough(checkboxElement) {
    if (checkboxElement.checked) {
        todoInput.style.textDecoration = 'line-through';
    } else {
        todoInput.style.textDecoration = 'none';
    }
}

function deleteTask() {
    localStorage.removeItem('todo');
    todoInput.innerHTML = 'enter task';
}