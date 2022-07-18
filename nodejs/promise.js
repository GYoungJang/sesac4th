const func1 = new Promise((resolve, reject) => {
    var flag = true;
    if (flag) resolve('성공');
    else reject('실패');
})

func1.then(value => {
    return value + "1";         // then : 성공했을 때
}).then(result => {
    console.log(result);         // 첫 번쨰  then에서 리턴한 값이 옴
}).catch( err => {            // catch : 실패했을 때
    console.log(err);
});


const func1 = new Promise( function (resolve, reject){
    
})