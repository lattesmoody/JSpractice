const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleh1Click() {
  h1.style.color = "blue";
  console.log("h1 was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
//h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;
//h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
// #3.5 More Events

// addEventListener를 더 선호하는 이유
// => removeEventListener를 통해 event listener 제거 가능.

function handleWindowResize(){ // 화면크기가 바뀌면
    document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("OFFLINE internet");
}

function handleWindowOnline(){
    alert("ONLINE internet");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
// clipboard events: 유저가 copy 행위를 했을 때
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);