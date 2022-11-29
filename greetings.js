// 1. 변수 선언
const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const greeting = document.querySelector("#greeting");

// 2. login submit 함수 생성
// submit event 방지
// login 태그를 hidden 클래스로 숨기기
// login input value값을 localStorage에 username에 저장
// 인사말 함수 호출
function loginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");  
  localStorage.setItem("username", loginInput.value);
  paintingGreeting();
}

// 3. 인사말 함수 생성
// localStorage에 저장된 username key 가져와서 변수 저장
// 인사말 태그에 위 변수를 text 넣기
// 인사말 태그에 hidden 클래스 제거하여 노출
function paintingGreeting() {
  const username = localStorage.getItem("username");
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove("hidden");
}

// localStorage에 저장된 username key 가져와서 변수 저장
// 저장된 username 변수가 없다면 입력창 hidden클래스 제거하여 다시 노출
// login form에 submit될 경우 submit 함수 실행  
// 저장된 username 변수가 있다면 인사말 함수 호출
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hiddne");
  loginForm.addEventListener('submit', loginSubmit);  
} else {
  paintingGreeting();
}
