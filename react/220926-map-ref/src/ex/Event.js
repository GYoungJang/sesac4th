import React, {useState} from 'react';

export default function Event() {
    const [info, setInfo] = useState([{id :1 ,name : '코디', email : 'codi@gmail.com'},{id : 2, name : '윤소희', email : 'yoonsohee@gmail.com'}]);
    const [nextId, setId] = useState(3);

    // const{name, email}
    const infoList = info.map(info => <div key={info.id} onDoubleClick={() => onRemove(info.id)}>{info.name} : {info.email}</div>)

    
    const addList = () => {
        const nameText = document.getElementById('name')
        const emailText = document.getElementById('email')
        let newList = {
            id : nextId,
            name : nameText.value,
            email : emailText.value,
        }
        console.log(newList);
        setInfo([...info, newList])
        setId(nextId + 1);
    }

    const enter = e => {
        let key = e.key || e.keyCode;
        if ((key === 'Enter' && !e.shiftKey) || (key === 13 && key !== 16)) {
            addList();
          }
        }
    
    const onRemove = id => {
        const nextUser = info.filter(user => user.id !== id);
        setInfo(nextUser);
    }

    return(
        <div>
            <input id='name' placeholder='이름'></input>
            <input id='email' onKeyDown={enter} placeholder='이메일'></input>
            <button onClick={addList}>등록</button>
            {infoList}
        </div>
    )
}