// 1. 배경 변수에 이미지명 배열 선언
const img = ["01.png", "02.png"];
const bgimg = ["bg01.jpg", "bg03.png", "bg04.jpg", "bg05.jpg"];

// 2. 선택된 이미지 변수에 배경 변수 랜덤 호출(이미지 전체 수*랜덤수를 내림한 수)
const j = Math.floor(img.length * Math.random());
const selectedImg = img[j];
const k = Math.floor(bgimg.length * Math.random());
const selectedBg = bgimg[k];

// 3. 배경 img 태그 추가
const bgImg = document.createElement("img");

// 4. img 태그 src에 선택된 이미지 변수 넣기
bgImg.src = `img/${selectedImg}`;

// 5. 배경 img 태그를 body에 추가하기
const bg = document.querySelector("#bg");
bg.appendChild(bgImg);

const body = document.querySelector("body");
body.style.backgroundImage = `url('img/${selectedBg}')`;