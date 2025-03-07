const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;

  taskList.appendChild(li);
  input.value = "";
  saveTask();
});

function removeTask(button) {
  button.parentElement.remove();
  saveTask();
}

const saveTask = () => {
  localStorage.setItem("tasks", taskList.innerHTML);
};

const loadTask = () => {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
};

loadTask();
