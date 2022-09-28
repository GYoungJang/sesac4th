function a(b, c) {
    b += 100;
    c = 'kim'
}
var d = 100;
var e = {name : 'k'};

a(d, e);
console.log(e);

function f(b, c) {
    b += 100;
    console.log(c);
    c.name = 'lee';
    console.log(c)
    c= 'kim'
    console.log(c);
}
var d = 100;
var e = {name : 'k'};

f(d, e);
console.log(e);

function g(b, c) {
    b += 100;
    console.log(c);
    c= 'kim'
    console.log(c);
    c.name = 'lee'
    console.log(c);
    console.log(c.name);
}
var d = 100;
var e = {name : 'k'};

g(d, e);
console.log(e);