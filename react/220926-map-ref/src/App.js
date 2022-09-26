import React, {useState} from 'react';
import Event_ex from './ex/Event_ex'
import Event from './ex/Event'
import Practice59 from './Practice59';

function App() {
  const [list, setList] = useState(['s', 'e', 's']);

  function filterCheck() {
    let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
    let newLists = [...lists, 'dog'];

    let newList = [];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].length > 4) newList.push(lists[i])
    }

    newList = lists.filter((value) => {
      return value.length > 4;
    })
  }
  function addElement() {
    
    //console.log(list); 
    setList([...list, 's']);

    let newList = [];
    for (let i = 0; i < list.length; i++) {
      console.log(i);
      console.log(list[i]);
      newList.push(i + list[i])
    }
    list.map((value, i)=> {
      console.log(i)
      console.log(value)
      return i + value;
    })
  }
  return (
    <div>
      <ul>
        {list.map((name, i) => {
          return <li key={i}> {name}</li>
        })}
      </ul>
      <ul>
        {list.filter((name) => {
          return name.includes('a')
        })}
      </ul>
      <button onClick={addElement}>추가</button>
      <Event_ex></Event_ex> 
      <Event></Event>
      <Practice59></Practice59>
    </div>
  );
}

export default App;
