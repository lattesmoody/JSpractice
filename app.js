// #2.7 Funcions

// function: 반복해서 사용할 수 있는 코드 조각.
// 코드를 캡슐화하여 실행을 여러 번 할 수 있게 해준다.

function sayHello(nameOfPerson, age) {
  console.log("hello! my name is ", nameOfPerson, " and I'm ", age);
}

sayHello("a", 10);
sayHello("b", 23);
sayHello("c", 32);

// argument: function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide (98,20);

// NaN : Not a Number

const player = {
    name: "choco",
    sayHello2: function(personName){
        console.log("hello,",personName, "nice to meet you");
    }
}
console.log(player.name);
player.sayHello2("chocoya");
