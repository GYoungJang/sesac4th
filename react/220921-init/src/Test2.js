import React, { Component } from 'react';
import './App.css';
import img from "./noodle.png";

let style = {
    color : 'orange',
    fontSize : '40px',
    marginTop : '20',
}

class Test2 extends Component {
    render (){
        return (
            <div style={style}>
                <h2>"안녕하세요"</h2>
                <img src={img}></img>
            </div>
        ) 
    }
}


        

export default Test2;