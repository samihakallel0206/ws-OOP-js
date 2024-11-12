const ToDo = [];

function addTask() {
  const newTodo = document.getElementById("newTodo");
  // console.log(newTodo)
  const newTask = newTodo.value.trim();
  // console.log(newTask)
  if (newTask !== "") {
    const newT = { id: Date.now(), text: newTask, done: false };
    ToDo.push(newT);
    console.log(ToDo);
    newTodo.value = "";
    dispalyTask(newT);
  }
}

function dispalyTask(newT) {
  //   console.log(newT);
  const todoList = document.getElementById("todoList");
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" ${newT.done ? "checked" : ""}
    onclick=toggleDone(${newT.id})
 />
    <span>${newT.text}</span>
    <button style="margin-left:auto"
    onclick = "Del(${newT.id})"> delete</button>
    `;
  todoList.appendChild(li);
}

function toggleDone(id) {
  console.log(id);
  const idToDo = ToDo.find((task) => task.id === id);
  // console.log(idToDo)
  idToDo ? (idToDo.done = !idToDo.done) : null;
  refrech();
}

function Del(id) {
  //   console.log(id);
  const indexDel = ToDo.findIndex((elt) => elt.id === id);
  // console.log(indexDel)
  if (indexDel !== -1) {
    ToDo.splice(indexDel, 1);
  }
  console.log(ToDo);
  refrech();
}

function refrech() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  ToDo.forEach((elt) => dispalyTask(elt));
}
