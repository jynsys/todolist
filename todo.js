// 1. 각 태그를 변수 저장
const todoForm = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList = document.querySelector("#todolist");

const TODOS_KEY = "todos";

// 7. to do list 텍스트 저장을 위한 배열 생성
// 여러 사용을 위해 let 선언
let toDos = [];

// 8. 저장함수 생성
// localStorage에 저장 배열을 json 문자형식으로 저장
function savedToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 5. 삭제함수 생성
// event의 부모요소 타겟을 변수 저장
// 변수를 제거
function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  // 10. 삭제함수에서 todo id값과 li id값이 같지 않은 필터링
  toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
  savedToDo();
}

// 3. paintTodo 함수 생성
// ul 안에 li, span 태그 추가
// li 안에 span 태그 넣기
// span 태그에 새 할일 변수를 텍스트로 넣기
// ul 안에 li 태그 넣기
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";  
  li.appendChild(check);
  const span = document.createElement("span");
  li.appendChild(span);
  li.id = newTodo.id;
  span.innerText = newTodo.text;    
  
  // 6. todo list 함수에 버튼 생성
  // 버튼에 삭제 텍스트 넣기
  // li안에 삭제버튼 넣기
  // 삭제버튼 클릭시 삭제함수 실행
  const button = document.createElement("button");
  button.innerText = "삭제";
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);

  todoList.appendChild(li);
}
// 2. todo submit 함수 생성
// submit event 방지
// todo input value값을 새 할일 변수에 저장
// todo input value값을 초기화
// todo submit 함수에 todo list 함수 실행 추가
function todoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // 9. toDos에 new todo obj 객체 push
  toDos.push(newTodoObj);
  // todo list를 new todo obj 객체로 호출
  paintTodo(newTodoObj);
  // todo submit 함수에 저장함수 호출
  savedToDo();  
  
}

function checkTodos() {
    if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
  } else {
    const li = document.createElement("li");
    li.innerText = "할 일 내역이 없습니다."
    todoList.appendChild(li);
  }
}


// 4. to do form submit 실행 시 todo submit 함수 실행
todoForm.addEventListener("submit", todoSubmit);

// 11. ocalStorage에 저장된 todo key 가져와서 변수 저장
// 저장된 todo key 있다면 저장된 변수를 객체로 변경하여 변수 저장
// 변수를 paintTodo 각각 실행
// 저장된 todo key 없다면 li 생성하여 할 일 내역없음 텍스트 넣음
// li를 todo list ul에 추가
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodo);
} 