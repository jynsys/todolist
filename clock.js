// 1. 태그를 변수 저장
const clock = document.querySelector("#clock");

// 2. getClock 함수 생성
// Date()를 변수에 저장
// 시간, 분, 초 변수에 date의 정보 받아와서 저장
// 받아온 숫자 정보를 문자로 변경
// 문자로 변경한 정보를 2자리로 만듬
// 시간, 분, 초 변수를 clock태그에 text로 넣기
function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const min = String(date.getMinutes()).padStart(2, 0);
  const sec = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hour} : ${min} : ${sec}`;
}

// 3. getClock 함수를 호출
getClock();
// 4. 1초 간격으로 getClock 함수 setInterval 실행
setInterval(getClock, 1000);