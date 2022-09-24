import React, { Component } from 'react';
import PropTypes from 'prop-types';

// extends는 상속...
// Component가 props를 받아옴..
class StateClass extends Component {
  // constructor(props) {
  //   super(props); // 상속받은 부모의 객체를 호출
  //   this.state = {
  //     name : 'SeSAC',
  //     list : ['s', 'e', 's', 'a', 'c']
  //   }
  // }
  state = {
    name: 'SeSAC',
    cnt: 0,
    list: ['s', 'e', 's', 'a', 'c'],
    num: 0,
  };
  render() {
    return (
      <div>
        <div>
          {this.state.name} {this.state.cnt} StateClass
        </div>
        <div>{this.state.num}</div>
        <button
          onClick={() => {
            // this.setState({name : '청년취업사관학교', cnt:this.state.cnt +1});
            // this.setState({name : '영등포 캠퍼스', cnt:this.state.cnt +1});
            this.setState((prevState) => {
              return { cnt: prevState.cnt + 1 };
            });
            this.setState((prevState) => {
              return { cnt: prevState.cnt + 1 };
            });
          }}
        >
          클릭
        </button>
        <button
          onClick={() => {
            this.setState({ list: ['c', 'l', 'i'] });
          }}
        >
          클릭2
        </button>
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ num: this.state.num - 1 });
          }}
        >
          -1
        </button>
        <ul>
          {this.state.list.map((txt) => {
            return <li>{txt}</li>;
          })}
        </ul>
      </div>
    );
  }

  static propTypes = {
    name: PropTypes.string,
  };
}

export default StateClass;
