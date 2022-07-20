console.log('start');

function login(id, pw) {
    setTimeout(() => {
        console.log('정보없음');
        return {userID : id};
    }, 3000);
}

const user = login('kim', '1234');
console.log(user + '님 반갑습니다.');

console.log('finish');

// function login(id, pw, cb) {
//     setTimeout(() => {
//         console.log('정보없음');
//         cb(id);
//     }, 3000);
// };

// const user = login('kim', '1234', user => {
//     console.log(user + "님 반갑습니다.")
// });

// console.log('finish');