1. login
  1-1. login input, button, 인사말 태그 작성
  1-2. 각 태그를 변수 저장
  1-3. login submit 함수 생성
    a. submit event 방지
    b. login 태그를 hidden 클래스로 숨기기
    c. login input value값을 localStorage에 username에 저장
    d. 인사말 함수 호출
  1-4. 인사말 함수 생성
    a. localStorage에 저장된 username key 가져와서 변수 저장
    b. 인사말 태그에 위 변수를 text 넣기
    c. 인사말 태그에 hidden 클래스 제거하여 노출
  1-5. localStorage에 저장된 username key 가져와서 변수 저장
    a. 저장된 username 변수가 없다면 입력창 hidden클래스 제거하여 다시 노출
    b. login form에 submit될 경우 submit 함수 실행
    c. 저장된 username 변수가 있다면 인사말 함수 호출

2. clock 
  2-1. clock 태그 작성      
  2-2. 태그를 변수 저장
  2-3. getClock 함수 생성
    a. Date()를 변수에 저장
    b. 시간, 분, 초 변수에 date의 정보 받아와서 저장
    c. 시간, 분, 초 변수를 clock태그에 text로 넣기
  2-4. getClock 함수를 호출
  2-5. 1초 간격으로 getClock 함수 setInterval 실행

3. 명언
  3-1. 명언 태그 작성
  3-2. 각 태그 변수 선언
  3-3. 명언 배열 선언
  3-4. 오늘명언 변수 랜덤 호출(명언배열 전체 수*랜덤수를 내림한 수)
  3-5. 명언 태그에 오늘명언 text로 넣기

4. 배경
  4-1. 배경 변수에 이미지명 배열 선언
  4-2. 선택된 이미지 변수에 배경 변수 랜덤 호출(이미지 전체 수*랜덤수를 내림한 수)
  4-3. 배경 img 태그 추가
  4-4. img 태그 src에 선택된 이미지 변수 넣기
  4-5. 배경 img 태그를 body에 추가하기

5. 할일
  5-1. form 태그, ul 생성
  5-2. 각 태그를 변수 저장
  5-3. todo submit 함수 생성
    a. submit event 방지
    b. todo input value값을 새 할일 변수에 저장
    c. todo input value값을 초기화
  5-4. paintTodo 함수 생성
    a. ul 안에 li, span 태그 추가
    b. li 안에 span 태그 넣기
    c. span 태그에 새 할일 변수를 텍스트로 넣기
    d. ul 안에 li 태그 넣기
  5-5. todo submit 함수에 paintTodo 함수 실행 추가
  5-6. to do form submit 실행 시 todo submit 함수 실행
  6-7. 삭제함수 생성
    a. event의 부모요소 타겟을 변수 저장
    b. 변수를 제거
  6-8. todo list 함수에 버튼 생성
    a. 버튼에 삭제 텍스트 넣기
    b. li안에 삭제버튼 넣기
    c. 삭제버튼 클릭시 삭제함수 실행
  7. to do list 텍스트 저장을 위한 배열 생성
  8. 저장함수 생성
    a. localStorage에 저장 배열을 json 문자형식으로 저장
    b. todo submit 함수에 저장함수 호출
  9. li에 고유번호 부여하기 위해 new todo obj 객체 선언
    a. toDos에 new todo obj 객체 push
    b. todo list를 new todo obj 객체로 호출
    c. li의 id값에 새 할일 id값 저장
  10. 삭제함수에서 todo id값과 li id값이 같지 않은 필터링
    a. 삭제함수에서 저장함수 호출
  11. localStorage에 저장된 todo key 가져와서 변수 저장
    a. 저장된 todo key 있다면 저장된 변수를 객체로 변경하여 변수 저장
    b. 변수를 paintTodo 각각 실행
    c. 저장된 todo key 없다면 li 생성하여 할 일 내역없음 텍스트 넣음
    d. li를 todo list ul에 추가

6. 날씨
  6-1. 유저의 위치 좌표 제공하는 navigtor함수
    a. getCurrentPosition()는 성공함수, 에러함수 인자 필요
  6-2. 에러함수 생성
    a. 위치 찾을 수 없음 내용의 경고창
  6-3. 성공함수 생성
    a. getCurrentPosition 제공하는 position 변수를 받는다.
    b. 브라우저의 경고창을 허락하면 좌표값(위도, 경도)을 받는다.
    c. 위도와 경도를 변수 선언하고 console.log 적어본다.
  6-4. 나의 API KEY 선언
  6-5. API call url 변수 선언 & units=metric 추가로 온도 타입(화씨->도) 변경
    a. fetch를 이용해서 url 부른다.
    b. 서버에서 응답을 받기까지 시간이 좀 걸리기 때문에 then을 사용
    c. 내용을 추출 후 data.name과 data.weather[0].main 데이타를 얻어서 console.log
    d. html에 도시와 날씨 태그를 만들고 각 변수에 선언한다.
    e. 16. 각 태그에 data를 넣는다.
