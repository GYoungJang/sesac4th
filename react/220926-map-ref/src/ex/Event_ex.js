import React, {useState} from 'react';



export default function Event_ex() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [inputs, setInputs] = useState([{id :1 ,name : '코디', email : 'codi@gmail.com'},{id : 2, name : '윤소희', email : 'yoonsohee@gmail.com'}]);
    const [nextId, setId] = useState(3);
    const [nameText, nameInput] = useState('');
    const [emailText, emailInput] = useState('');
    
    const infoList = inputs.map(info => <div key={info.id} onDoubleClick={() => onRemove(info.id)}>{info.name} : {info.email}</div>)

    console.log('a',infoList);
    console.log(inputs);
    const onChange1 = (e) => {   
       
        nameInput(e.target.value);

    }
    const onChange2 = (e) => {   
    
        emailInput(e.target.value);

    }

    const addList = () => {
        // setInputs(nextInputs);
        const nextUser = inputs.concat({id : nextId, name : nameText, email : emailText})
        console.log('vv',nextUser);
        setId(nextId+1);
        setInputs(nextUser);
        nameInput('')
        emailInput('')

    }

    const onRemove = id => {
        const nextUser = inputs.filter(user => user.id !== id);
        setInputs(nextUser);
    }
    
    const enter = e => {
        let key = e.key || e.keyCode;
        if ((key === 'Enter' && !e.shiftKey) || (key === 13 && key !== 16)) {
            addList();
          }
        }
          

    return(
        <div>
            <input name='name' value={nameText} onChange={onChange1} placeholder='이름'></input>
            <input name='email' value={emailText} onChange={onChange2} onKeyDown={enter} placeholder='이메일'></input>
            <button onClick={addList}>등록</button>
            {infoList}
        </div>
    )
}
   

   
    
            