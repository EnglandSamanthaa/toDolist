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

function addItem(){
    const task = inputBox.value.trim();
    if (task === '') return;

    const newItem = new ToDoTask(task);
    toDoItems.push(newItem);

    inputBox.value = '';
    inputBox.focus()

    updateToDoList();
}

function updateToDoList(){
    listContainer.innerHTML = '';

    toDoItems.forEach((item, index) => {
        const li = document.createElement('li');
        const unchecked = document.createElement("img");
            unchecked.src = "IMG/icons8-button-32.png";
        const checked = document.createElement("img");
            checked.src = "IMG/icons8-checked-checkbox-50.png"

        const text = document.createTextNode(item.task);
        li.appendChild(unchecked);
        li.appendChild(text);
        listContainer.appendChild(li);

        unchecked.style.marginRight = "20px";
        unchecked.style.width = "50px";

        checked.style.marginRight = "20px";
        checked.style.width = "50px";




        li.addEventListener("click", (event => {
            if (li.contains(unchecked)){
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
        }))
    })
}


addButton.addEventListener("click", (event => {
    addItem();
    console.log(toDoItems)
}))

