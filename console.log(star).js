for (let i = 1; i < 6; i++) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));
for (let i = 4; i > 0; i--) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));

let j = 7;
for (let i = 1; i < 10; i++) {
  if (i < 6) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));
  else {
    console.log(' '.repeat(i - 5) + '*'.repeat(j));
    j -= 2;
  }
}
var e = { a: 'hi' };
var f = e;
console.log(e === f);
e.a = 1;
console.log(e, f);

var g = { a: 'hi' };
var h = { ...g }; // 아예 새로운 객체 생성?
console.log(g === h);
g.a = 1;
console.log(g);
console.log(h);

var a = { a: { y: 1 } };
var b = { ...a};
var c  = {...b.a.y}
console.log(b);
console.log(a);
console.log(a === b);
console.log(a.a === b.a);
a.a.y = 3;
console.log(b);
console.log(a);

var a = { a: { y: 1 } };
var b = a;
console.log(b);
console.log(a);
console.log(a === b);
console.log(a.a === b.a);
a.a.y = 3;
console.log(b);
console.log(a);

var a = { a: { y: 1 }, b: 3 };
var b = { ...a };
console.log(b);
console.log(a);
console.log(a === b);
console.log(a.a === b.a);
a.b = 5;
console.log(b);
console.log(a);

var c = { a: [1, 2, 3] };
var d = c;
console.log(c);
console.log(d);
console.log(c === d);
c.a[0] = 4;
console.log(c);
console.log(d);
