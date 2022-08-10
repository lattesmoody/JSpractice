//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

//const title = document.getElementsByTagName("h1");
// tag는 anchor, div, section, button 같은 것들을 의미한다.
//console.log(title);

// querySelector는 element를 CSS 방식으로 검색 가능.
// 예) hello란 class 내부에 있는 h1을 가지고 온다.
const title = document.querySelector(".hello h1");
//const title = document.querySelector("div h1");
console.log(title);
// querySelector는 단 하나의 element를 return 해준다.
const title2 = document.querySelectorAll(".hello h1");
console.log(title2);
// querySelectorAll은 이 selector 안의 조건에 부합하는 모든 element를 가져다준다.

title.innerText = "hello";