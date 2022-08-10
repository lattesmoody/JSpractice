// #2.13 Conditionals (조건문)

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // isNaN은 boolean을 반환한다.

if (isNaN(age) || age < 0) {
  // condition == true
  console.log("올바른 값을 입력해주세요.");
} else if (age < 18) {
  // condition == false
  //console.log("Thank you for writing your age.");
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("for care Health");
} else if (age > 80) {
  console.log("Unbelievable");
}
