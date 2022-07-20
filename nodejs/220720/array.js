// 배열 구조 분해

let list = ['apple', 'banana'];

let item1 = list[0];
let item2 = list[1];

[item1, item2, item3] = list;

console.log("item1 : ", item1);
console.log("item2 : ", item2);
console.log("item3 : ", item3);

[item1, item2 = 'peach', item3 = 'melon'] = list;    // 기본값 설정

console.log("item1 : ", item1);
console.log("item2 : ", item2);
console.log("item3 : ", item3);

let x = 1;
let y = 3;

[x, y] = [y, x];

console.log(x, y);