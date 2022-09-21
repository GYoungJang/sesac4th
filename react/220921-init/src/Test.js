import React, { Component } from 'react';
import './App.css';

let name = 'zzbtang';
let my_style = {
    backgroundColor : 'blue',
    color : "orange",
    fontSize : "40px",
    padding : "12px",
}
    

class Test extends Component {
    render () {
        return (
            <div style={my_style}>
                {name}
            </div>
        )
    }
}

export default Test;