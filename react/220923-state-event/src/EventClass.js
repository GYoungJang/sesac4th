import React, {Component} from 'react';

export default class EventClass extends Component {
    
    constructor(props) {
        super(props);
        this.printConsole = this.printConsole.bind(this);
    }
    printConsole(msg) {
        console.log('printConsole');
        console.log(this); // undefined ???
    }

    // bind 안 쓰고 싶으면 화살표 함수로..
    printConsole2 = () => {
        console.log('printConsole2');
        console.log(this);
    }
    sendParameter =() => {
        this.printConsole('2');
    }
    render() {
        return (
            <div>
                <button onClick={() =>{this.printConsole('2')}}>printConsole</button>
                <button onClick={this.sendParameter}>printConsole3</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>

        ) 
    }
}

