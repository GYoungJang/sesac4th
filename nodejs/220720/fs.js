const fs = require('fs').promises;

// console.log(fs);

// fs.readFile('test.txt', function(err, data){
//     if (err) console.log(err);
//     else {
//         console.log(data.toString());
//     }
// })

// fs.readFile('test.txt', function(err, data){
//     if (err) throw err;
//     console.log(data);
//     console.log(data.toString());
    
// })

// fs.writeFile('write.txt', '안녕')
// .then(() => {
//     console.log('작성완료');
// })
// .catch((err) => {
//     console.log( err );
// });

// fs.copyFile('./write.txt', './new.txt')
//     .then(() => {
//         console.log('복사완료');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function exec(){
//     await fs.writeFile("./write.txt", "안녕");
//     await fs.copyFile("./write.txt", "./new2.txt");
// }

// exec();

async function exec(){
    await fs.mkdir('./sesac');
    await fs.writeFile('./sesac/sesac.txt', '반갑습니다');
    await fs.copyFile('./sesac/sesac.txt', './sesac/sesac2.txt');
    await fs.rename('./sesac/sesac2.txt', './sesac/new.txt'); // 여기선 await를 할 필요가 없음...
}

exec();