
const url = require('url');
const {URL} = url;    // url 모듈 안의 URL클래스를 사용하기 위해 {URL} 해줌. 안 쓰면 url.URL 이렇게 써야함.

const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWRsZlprvhGssvbiVWhssssssb4-092695";
const naver = new URL(string); // URL이 클래스라서 new 붙여준다....

// console.log(url.format(naver));
// console.log(url.parse(string));

// console.log(naver.searchParams);



const params = new URLSearchParams('sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWRsZlprvhGssvbiVWhssssssb4-092695');
for (const name of params.keys()) {
    console.log(name);
};

console.log('-------------------');

const params1 = new URLSearchParams(string);
for (const name of params1.values()) {
    console.log(name);
};

console.log('-------------------');
const params2 = new URLSearchParams('where=nexearch&query=sesac&oquery=sesac&tqi=hWRsZlprvhGssvbiVWhssssssb4-092695');
for (const name of params2.keys()) {
    console.log(name);
};

// 다른 방법

// console.log(naver.searchParams.keys());
// console.log(naver.searchParams.values());
// naver.searchParams.delete('sm');
// console.log(naver.searchParams.keys());
console.log(url);