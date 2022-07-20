function func1(callback) {
    callback();          
}

function func2(){
    console.log("안녕");
}

func1(func2);

func1(function (){
    console.log('안녕');
})
