
// select elements & assign to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// functions
let createTask = function (task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';
     listItem.appendChild(checkbox);
     listItem.appendChild(label);

     return listItem;
}

let addTask = function(event)
{
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";

    // bind new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask)
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem);

    bindCompleteItem(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncompleteItems = function(tastItem, checkboxClick){
    let checkbox = tastItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

let bindCompleteItem = function(tastItem, deleteButtonClick){
    let deleteButton = tastItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i < todoUl.children.length; i++){
    bindIncompleteItems(todoUl.children[i], completeTask);
}

for(let i = 0; i < completeUl.children.length; i++){
    bindCompleteItem(completeUl.children[i], deleteTask);
}


form.addEventListener('submit', addTask);