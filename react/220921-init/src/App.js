// import logo from './logo.svg';
import './App.css';

let name = 'zzbtang';
let animal = '꼬부기';
let expression = 3 + 5 === 8
let answer = expression ? '정답입니다!' : '오답입니다!'
let a = 3;
let b = 1;
let result = a > b && 'a가 b보다 큽니다';
let title = 'Hello World';

function App() {
  return (
    <div>
      이것은 div입니다.
      <h3>
        이것은 div 안에 있는 h3태그 입니다.
      </h3>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.<br></br>
        <u>{name}</u>은 {animal}입니다.
      </h2>
      <p>{answer}</p>
      <p>{result}</p>
      <div className="box">
        <p className="test">{title}</p>
        <p className='idpw'>아이디 :<input className="input"></input></p>
        <p className='idpw'>비밀번호 :<input className="input"></input></p> 
      </div>

      <div className="rainbow">
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='navy'></div>
        <div className='purple'></div>
      </div>
    </div>
    );
  }

  
  export default App;
  
  /* <div className="App">
     <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React!!!!!!!!
      </a>
    </header> 
  </div> */