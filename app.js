const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);

// toggle function: class name이 존재하는지 여부 확인.
// class name 존재 시, toggle은 class name을 제거.
// class name 미 존재 시, toggle은 class name을 추가한다.
