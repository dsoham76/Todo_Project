let todoList = [
  {
    item: "Buy Milk",
    dueDate: "4-10-2023",
    dueTime: "08:30",
  },
  {
    item: "Go to College",
    dueDate: "4-10-2023",
    dueTime: "09:00",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let timeElement = document.querySelector("#todo-time");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate, dueTime: todoTime });
  inputElement.value = "";
  dateElement.value = "";
  timeElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate, dueTime } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <span>${dueTime}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
