function call(name) {
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000);
    })
};

function back(){
    return new Promise(function (resolve, reject){
        setTimeout(function() {
            console.log("back");
            resolve("back");
        }, 1000);
    })
};

function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve("callback hell");
        }, 1000);
    })
}

async function exec(){
    let name = await call('kim');
    console.log(name + '반가워')
    let txt = await back();
    console.log(txt + '을 실행했구나')
    let message = await hell();
    console.log('여기는' + message)
}
exec();


// call('kim')
// .then(function(name){
//     console.log(name +'반가워')
//     return back();   // back 함수를 실행하고 종료...?
// })
// .then(txt => {
//     console.log(txt + '을 실행했구나');
//     return hell();
// })
// .then (function(message){
//     console.log("여기는" + message);
// });




// var b = new Promise((resoleve, reject) => {

// });
// console.log(b);
// console.log(new Promise);



// var a = new Promise(function(resolve, reject){
//     resolve("hi");
// });
// console.log(a);


