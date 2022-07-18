// 한 개를 가져올 때는 이름을 임의로 정할 수 있음.
const returnString  = require("./func.js");

// 여러 개를 불러올 때는 이름을 동일하게 정확히 써주어야 함.
const {a, b} = require("./variable.js")

console.log(returnString());
