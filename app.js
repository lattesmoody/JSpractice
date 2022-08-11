const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //h1.className = "active"; //className: getter/setter
  //console.log(h1.className);
  const clickedClass = "clicked";
  if(h1.className === clickedClass){
    h1.className = "";
  }else{
    h1.className = clickedClass;
  }
}
// raw value는 지양할 것.
h1.addEventListener("click",handleTitleClick);

// #3.7 CSS in Javascript
// JavaScript로 모든 class name을 변경하지 않아야 함.
// 단지 clicked class를 변경하고 싶다.