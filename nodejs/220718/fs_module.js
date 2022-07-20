// 항상 오류 처리를 해주어야 함. err

const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log(data.toString());
});