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
    // scroll.scrollTo(0, scroll.scrollHeight);
    scroll.scrollTop = 800;
    console.log(scroll.scrollTop);
  };
  scrollUp = () => {
    let scroll = this.scroll.current;
    // scroll.scrollTo(scroll.scrollHeight, 0);
    scroll.scrollTop = 0;
    console.log(scroll.scrollTop);
  };

  scrollUpDown = () => {
    let scroll = this.scroll.current;
    scroll.scrollTop < 800 ? (scroll.scrollTop = 800) : (scroll.scrollTop = 0);
    console.log(scroll.scrollTop);
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
        <button onClick={this.scrollDown}>Down</button>
        <button onClick={this.scrollUp}>Up</button>
        <button onClick={this.scrollUpDown}>UpDown</button>
      </div>
    );
  }
}
