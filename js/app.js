const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const addButton = document.getElementById("addButton");

class ToDoTask {
    constructor(task){
        this.task = task;
        this.completed = false;
    }
};

const toDoItems = [];

function updateToDoList(){
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    toDoItems.forEach((item, index) => {
        addSingleItem(item);
    });
}

function addSingleItem(item) {
    const li = document.createElement('li');
    const unchecked = document.createElement("img");
    unchecked.src = "IMG/icons8-button-32.png";
    const checked = document.createElement("img");
    checked.src = "IMG/icons8-checked-checkbox-50.png";
    const trashCan = document.createElement("img");
    trashCan.src = "IMG/icons8-trash-can-32.png";

    unchecked.style.marginRight = "20px";
    unchecked.style.width = "50px";
    unchecked.style.height = "50px";

    checked.style.marginRight = "20px";
    checked.style.width = "50px";
    checked.style.height = "50px";

    trashCan.style.width = "30px";
    trashCan.style.height= "30px";

    const text = document.createTextNode(item.task);
    const textSpan = document.createElement('span');
    textSpan.appendChild(text);
    
    li.appendChild(unchecked);
    li.appendChild(textSpan);
    li.appendChild(trashCan);


    textSpan.style.width = "450px";

    listContainer.appendChild(li);

    trashCan.addEventListener("click", (event => {
        listContainer.removeChild(li);
        toDoItems.splice(toDoItems.indexOf(item), 1); // Remove the item from the toDoItems array
    }));

    li.addEventListener("click", (event => {
        if (li.contains(unchecked)) {
            li.replaceChild(checked, unchecked);
            item.completed = true;
        } else {
            li.replaceChild(unchecked, checked);
            item.completed = false;
        }

        if (item.completed === true) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    }));

}
function addItem(){
    const task = inputBox.value.trim();
    if (task === '') return;

    const newItem = new ToDoTask(task);
    toDoItems.push(newItem);

    inputBox.value = '';
    inputBox.focus()

    updateToDoList();
}

addButton.addEventListener("click", (event => {
    addItem();    
}));

inputBox.addEventListener("keydown", (event =>{ 
    if (event.keyCode === 13) {
        addItem();
    }
}));

window.addEventListener("load", (e => {
    updateToDoList()
    inputBox.focus();
}));