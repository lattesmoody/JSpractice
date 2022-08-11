// app.js가 있기 때문에 javascript를 통해 HTML의 내용르 가져올 수 있다.

// document가 HTML이 app.js를 load하기 때문에 존재하는 것.
// 그 다음 browser가 우리가 document에 접근 할 수 있게 해준다.

// querySelector는 CSS Selector를 전달할 수 있다.

const title = document.querySelector("div.hello:first-child h1");


//title.style.color = "blue"

// JavaScript에서 대부분 작업할 일은 event를 listen.

function handleTitleClick(){
    title.style.color = "blue"
    console.log("title was clicked!");
}

title.addEventListener("click",handleTitleClick)
// listen 하고 싶은 event, event 발생 시 호출할 function 전달.
// 두 번째 인자의 경우 괄호 포함되서는 안 된다.
console.dir(title);
// property 이름 앞에 on이 붙어있다면, 그게 바로 event listener
// 이벤트 사용 시 on을 제외하고 사용.

function handleMouseEnter(){
    //console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
