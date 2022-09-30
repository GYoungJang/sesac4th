import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from './2HooksReducer';
import Memo from './3HooksMemo';
import Origin from './4Origin';
import UseSass from './5UseSass';
import CSSModule from './6CSSModule';
import StyledComponent from './7StyledComponent';
import Prac2 from './Prac2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hook />
    <hr></hr>
    <Reducer></Reducer>
    <Memo></Memo>
    <Origin></Origin>
    <hr></hr>
    <UseSass></UseSass>
    <hr></hr>
    <CSSModule></CSSModule>
    <hr></hr>
    <StyledComponent></StyledComponent>
    <hr></hr> */}
    <Prac2></Prac2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

