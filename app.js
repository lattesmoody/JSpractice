// # 2.6 Objects
const player = {// 중괄호를 열어야 함.
    name: "BESTCHOCO",
    points: 10, 
    fat: true,
} 

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

// const는 수정할 수 없지만 왜 값이 변경되었는가?
// player = false라고 했을 때 (constant 전체를 하나의 값으로서 업데이트 할 때 오류 발생)
// constant 안의 무언가를 업데이트 할 때는 아무 문제 없다.

player.lastName = "potato"; // 원하는 property 새로 생성 가능.
player.points = player.points + 15;
console.log(player);
