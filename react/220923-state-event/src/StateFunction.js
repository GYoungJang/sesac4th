import React, {useState} from 'react';
import StateClass from './StateClass';


export default function StateFunction () {
    const [msg, setMsg] = useState('');
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);
    // this.state {
    //     msg : ''
    // }   

    // 함수 형태의 값 전달
    const changeMsg = () => setMsg('메세지');
    const Increase = () => setNum(num+2);
    const Decrease = () => setNum(num-1);
    
    // function changeMsg() {
    //     setMsg('메세지')
    //     // setState({msg : '메세지'})
    // }
    // function Increase() {
    //     setNum(num+2)
    // }
    // function Decrease() {
    //     setNum(num-1)
    // }

    
    return(
        <div>
            <p>{msg}</p>
            StateFunction
            <StateClass/>
            <div>{num}</div>
            <button onClick={changeMsg}>클릭</button>
            <button onClick={Increase}>+2</button>
            <button onClick={Decrease}>-1</button>
        </div>
    )
}
