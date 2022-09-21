import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ClassComponent from './ClassComponent';
import Test from './Test';
import Test2 from './Test2';
import Food from './Food';
import Book from './Book';
import Last from './Last';
// import App from './App';

import reportWebVitals from './reportWebVitals';
const name = '쌀국수';
const desc = '고수 없는 쌀국수는 쌀국수가 아닙니다.'
const title = '나의 하루는 4시 40분에 시작된다.'
const author = '김유진';
const price = '13,500원';
const category = '자기계발서';
const text = 'App 컴포넌트에서 넘겨준 text props입니다.';
const valid = function() {
  console.log('콘솔 띄우기 성공');
}
// function a(){
//   console.log( "test" );
// }
// function b( test ){
//   test();
// };

// b(a);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ClassComponent name = {1} location='문래'>문자</ClassComponent> */}
    {/* <ClassComponent1/> */}
    <Test></Test>
    <Test2></Test2>
    {/* <App /> */}
    <Food name = {name} desc = {desc}></Food>
    <Book title = {title} author = {author} price = {price} category = {category}></Book>
    <Last text = {text}  valid = {valid}></Last>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
