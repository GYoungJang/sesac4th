import React, {Component} from 'react';

let style = {
    color : 'red',
}

class Food extends Component {
    render (){
        console.log(this.props);
        const {name, desc} = this.props
        return (
            <div>
                음식 이름 : <span style={style}>{name}</span><br></br>
                음식 설명 : <span style={style}>{desc}</span>
            </div>
        ) 
    }
}
    

Food.defaultProps = {
    name : '기본 음식 이름',
    desc : '기본 음식 설명',
}

export default Food;