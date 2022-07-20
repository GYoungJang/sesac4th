const fs = require('fs').promises;

fs.readFile('test.txt')
.then((Data) => {
    console.log(data);
    console.log(data.toString());
})    // 여기에 세미콜론 금지 에러 뜸....ㅜ
.catch((err) => {
    console.error(err);
});