// console.log(123);

// variable(변수): 값을 저장하거나 유지하는 역할
// variable을 만들기 위해서는 1. const 사용 2. let 사용
// const란 바뀌지 않는 값, 계속 유지된다.
// let: 값 바뀔 수 있음.
const a = 5;
const b = 2;

let myName = "BESTCHOCO";

console.log(a + b);
console.log(a * b);
console.log(a /b);

console.log("hello " + myName);

myName = "SHIM"
console.log("new name " + myName);

// const 쓰는 이유는 variable이 절대 변하지 않도록 해야할 때가 있다.

// const, let을 보고 코드 규칙을 대략적으로 파악 가능.
// 예) myName은 어디선가 값이 새로 업데이트 될 수 있음.

// 보통 const를 기본적으로 사용.
// variable 업데이트 필요 시 let 사용.

// 예전엔 let, const 이전에 var을 사용. 
// var의 경우 실수로 업데이트 하지 말아야 할 값을 업데이트 했을 때 자바스크립트는 잘못되었다고 알려주지 않음.
// var은 아무런 규칙을 가지고 있지 않다. (왠만하면 쓰지 말기.)



