function call(name) {
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000);
    })
};

var a = new Promise(function(resolve, reject){
    resolve("hi");
});
console.log(a);

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



call('kim')
.then(function(name){
    console.log(name +'반가워')
    return back();   // back 함수를 실행하고 종료...?
})
.then(txt => {
    console.log(txt + '을 실행했구나');
    return hell();
})
.then (function(message){
    console.log("여기는" + message);
});