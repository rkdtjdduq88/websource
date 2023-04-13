// orange 클래스 부착
// tab-버튼0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스명 부착

// classList.add() / classList.remove()

// 버튼 클릭에 맞춰 tab-content 보여주기
// show 클래스명 부착

// tab-button 찾기
const btn0 = document.querySelector(".list>li:first-child");
const btn1 = document.querySelector(".list>li:nth-child(2)");
const btn2 = document.querySelector(".list>li:last-child");
const content0 = document.querySelector(".container>div:nth-child(2)");
const content1 = document.querySelector(".container>div:nth-child(3)");
const content2 = document.querySelector(".container>div:nth-child(4)");

btn0.addEventListener("click", () => {
  btn0.classList.add("orange");
  btn1.classList.remove("orange");
  btn2.classList.remove("orange");
  content0.classList.add("show");
  content1.classList.remove("show");
  content2.classList.remove("show");
});
btn1.addEventListener("click", () => {
  btn1.classList.add("orange");
  btn0.classList.remove("orange");
  btn2.classList.remove("orange");
  content1.classList.add("show");
  content0.classList.remove("show");
  content2.classList.remove("show");
});
btn2.addEventListener("click", () => {
  btn2.classList.add("orange");
  btn0.classList.remove("orange");
  btn1.classList.remove("orange");
  content2.classList.add("show");
  content0.classList.remove("show");
  content1.classList.remove("show");
});
