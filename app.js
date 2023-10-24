import Typed from "typed.js";

// const typed = new Typed("#element", {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 50,
// });

const todoItemsContainer = document.getElementById("todoItems");
// const noTodo =document.querySelector('')
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
console.log(todoItemsContainer);

const todoItems = [];

todoForm.addEventListener("submit", addTodo);
function addTodo(e) {
  e.preventDefault();
  const randomId = Math.floor(Math.random() * 100);
  const todoTitle = todoInput.value;
  const todo = {
    id: randomId,
    title: todoTitle,
    completed: false,
  };
  console.log(todo);
  todoItems.push(todo);
  todoInput.value = "";
  console.log("form submited");
  displayTodoItems(todoItems);
}

function displayTodoItems(todoItems) {
  if (todoItems.length > 0) {
    todoItemsContainer.innerHTML = "";
    todoItems.forEach((item, i) => {
      const itemHtml = `<li class="mb-2 flex items-center justify-between px-3 text-xl py-1 bg-slate-200">${item.title}
      <button id='deleteBtn' onclick='deleteItem()'>delete</button>
      </li>`;
      todoItemsContainer.insertAdjacentHTML("afterbegin", itemHtml);
    });
  } else {
    todoItemsContainer.innerHTML = `
    <p class="no-todo">No Todo Found</p>
    `;
  }
  const deleteBtn = document.getElementById("deleteBtn");
  console.log(deleteBtn);

  // deleteBtn.addEventListener("click", deleteItem);
  function deleteItem() {
    console.log("Item DELETED");
  }
}
displayTodoItems(todoItems);
