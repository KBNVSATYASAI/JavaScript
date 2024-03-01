let todoItemsContainer = document.getElementById("todoItemsContainer");
let todolist = [
    {
        text : "Learn  HTML"
    },
    {
        text : "Learn  CSS"
    },
    {
        text : "Learn  javaScript"
    }
];

 function createAndAppendTodo(todo) {
let listitem = document.createElement("li");
listitem.classList.add("todo-item-container","d-flex","flex-row");
todoItemsContainer.appendChild(listitem);

let checkboxx = document.createElement("input");
checkboxx.type = "checkbox";
checkboxx.id = "checkboxlnput";
checkboxx.classList.add("checkbox-input");
 listitem.appendChild(checkboxx);

let labelcontainer = document.createElement("div");
labelcontainer.classList.add("label-container","d-flex", "flex-row");
listitem.appendChild(labelcontainer);

let labelname = document.createElement("label");
labelname.setAttribute("for","checkboxInput");
labelname.classList.add("checkbox-label");
labelname.textContent=todo.text;
labelcontainer.appendChild(labelname);

let deletee =document.createElement("div");
deletee.classList.add("delete-icon-container");
labelcontainer.appendChild(deletee);

let deleteicon = document.createElement("i");
deleteicon.classList.add("far","fa-trash-alt" ,"delete-icon");
 deletee.appendChild(deleteicon);
 }
 
 for (let todo of  todolist) {
    createAndAppendTodo(todo);
  }