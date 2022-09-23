import React, {Component} from 'react';

export default class Handler_ex extends Component {
    state = {
        title : 'Hello World!',
    }
    printTitle = () => {
        this.setState({title : 'Goodbye World!'})
    }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.printTitle}>클릭</button>
            </div>
        )
    }
}
