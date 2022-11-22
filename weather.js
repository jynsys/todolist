// 9. 나의 API KEY 선언
const API_KEY = "39e2c569876f2d3db1e06a4615a1d3cb";

// 5. 성공함수
// 6. getCurrentPosition 제공하는 position 변수를 받는다.
// 7. 브라우저의 경고창을 허락하면 좌표값(위도, 경도)을 받는다.
// 8. 위도와 경도를 변수 선언하고 console.log 적어본다.
function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("당신 위치의 좌표는", lat, lon, "입니다.");

  // 10. API call url 변수 선언 & units=metric 추가로 온도 타입(화씨->도) 변경
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // 11. fetch를 이용해서 url 부른다.
  fetch(url)
    // 12. 서버에서 응답을 받기까지 시간이 좀 걸리기 때문에 then을 사용
    // 13. response.json()을 받는다.
    .then((response) => response.json())
    // 14. 내용을 추출 후 data.name과 data.weather[0].main 데이타를 얻어서 console.log
    .then((data) => {
      // console.log(data.name, data.weather[0].main);
      // 15. html에 도시와 날씨 태그를 만들고 각 변수에 선언한다.
      // 16. 각 태그에 data를 넣는다.
      const city = document.querySelector("#weather .city");
      const weather = document.querySelector("#weather .current");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}


// 3. 에러함수
// 4. 위치 찾기 실패 시 알람문구
function onError() {
  alert("당신의 위치를 찾을 수 없습니다.");
}

// 1. 유저의 위치 좌표 제공하는 navigtor함수
// 2. getCurrentPosition()는 성공함수, 에러함수 인자 필요
navigator.geolocation.getCurrentPosition(onSuccess, onError);