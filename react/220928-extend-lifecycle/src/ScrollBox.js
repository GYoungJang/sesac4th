import React, { Component, createRef } from 'react';

export default class ScrollBox extends Component {
  // state = {scroll : ''}

  scroll = createRef();
  scrollDown = () => {
    // let scroll = document.querySelector('#div1')
    // this.setState(() => {
    //     return {scroll : this.state.scroll + '\n'}
    // })
    let scroll = this.scroll.current;
    scroll.scrollTo(0, scroll.scrollHeight);
  };
  scrollUp = () => {
    let scroll = this.scroll.current;
    scroll.scrollTo(scroll.scrollHeight, 0);
  };

  scrollUpDown = () => {
    let scroll = this.scroll.current;
  };

  render() {
    return (
      <div>
        {/* <div className="div1" id="div1">
                    <div className="div2"></div>
                 </div> */}
        <div className="div1" ref={this.scroll}>
          <div className="div2"></div>
        </div>
        {/* <div id='div1'>{this.state.scroll}</div> */}
        <button onClick={this.scrollDown}>버튼1</button>
        <button onClick={this.scrollUp}>버튼2</button>
        <button onClick={this.scrollUpDown}>버튼3</button>
      </div>
    );
  }
}
