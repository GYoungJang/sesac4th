import React, { Component } from 'react';
import Name from './Name';

export default class Handler_ex extends Component {
  state = {
    title: 'Hello World!',
  };

  printTitle = () => {
    this.setState({
      title:
        this.state.title === 'Hello World!' ? 'Goodbye World!' : 'Hello World!', //잘 바뀜
      // this.state.title === 'Hello World!' && 'Goodbye World!',
      // this.state.title === 'Hello World!' || 'Goodbye World!',
      // this.state.title === this.state.title && 'Goodbye World!',
      // this.state.title === this.state.title || 'Goodbye World!',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Name title={this.state.title} />
        <button onClick={this.printTitle}>클릭</button>
      </div>
    );
  }
}
