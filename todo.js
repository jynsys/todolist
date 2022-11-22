const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(event) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
	saveToDos();
}

function paintTodo(newTodo){
	const li = document.createElement("li");
	const span = document.createElement("span");  
	li.appendChild(span);
  li.id = newTodo.id;
	span.innerText = newTodo.text;
  
	const button = document.createElement("button");  
	button.innerText = "delete";
  button.addEventListener("click", deleteToDo);
  
	li.appendChild(button);
	toDoList.appendChild(li);
}

function hadleTodoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", hadleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	// JSON.parse()는 JSON 문자열의 구문 분석 후, 그 결과에서 JavaScript 값이나 객체를 생성
  const parsedTodos = JSON.parse(savedTodos);   
  // li 각각 forEach => (paintTodo)
	parsedTodos.forEach(paintTodo);
} else {
	const li = document.createElement("li");
	li.innerText = "할 일 내역이 없습니다.";
	toDoList.appendChild(li);
}