const path = require('path');

const string = __filename;
//console.log(path.extname(string)); //extname 확장자만 출력

console.log(path.sep); //delimiter가 왜 :로 나올까...
console.log('----------')
console.log(path.extname(__filename));
console.log('----------')
console.log(path.parse(__filename));