import {useState,useMemo, useEffect, useCallback, useRef} from 'react';

function getAverage(list) {
    console.log('getAverage');
    let sum = 0;
    if (list.length == 0) return sum;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);
    
    const input = useRef(null);
    // const onChange = e => {
    //     setNum(e.target.value);
    // }

    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0);
    // }
    const onInsert = useCallback(e => {
        setList([...list, parseInt(num)]);
        setNum('');
        input.current.focus();
    },[num, list])

    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, [])

    //const avg = getAverage(list);
    //const avg = useMemo(() => getAverage(list), [list]);
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list))
    }, [list]);
    return (
        <div>
            <input value={num} onChange={onChange} ref={input}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>
            <div>
                <b>평균값 : {avg}</b>
            </div>
            
        </div>
    )
}

export default Memo;