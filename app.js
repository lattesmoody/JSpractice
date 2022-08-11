const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  // if(h1.className === clickedClass){
  //   h1.className = "";
  // }
  if(h1.classList.contains(clickedClass)){
    //h1.className = "";
    h1.classList.remove(clickedClass);
  }
  else{
    //h1.className = clickedClass;
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click",handleTitleClick);

// DOMTokenList.contains(token)
// => 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다.

 // classList: element의 class 내용물을 조작하는 것을 허용한다.
