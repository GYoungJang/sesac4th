import React, { Component } from 'react';
import PropTypes from 'prop-types';

// extends는 상속...
class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent - function</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </div>
        );
    }

    static propTypes = {
        name: PropTypes.string
    }
}
// class ClassComponent1 extends Component {
//     render() {
//         return (
//             <div>

//                 <h2>ClassComponent1</h2>

//             </div>
//         );
//     }
// }


// function ClassComponent ({name, location, chiledren}) {
//     console.log(props);
//     console.log(typeof(props.name));
//     return (
//         <div>
//             {children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {name}</h5>
//             <h5>location : {location}</h5>
//         </div>
//     )
// }
// function ClassComponent (props) {
//     console.log(props);
//     console.log(typeof(props.name));
//     return (
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

// ClassComponent.defaultProps = {
//     name : '기본 이름',
//     location : '기본 위치',
// }
// ClassComponent.propTypes = {
//     name : PropTypes.string,
// }

export default ClassComponent;
// export default { ClassComponent, ClassComponent1 };
