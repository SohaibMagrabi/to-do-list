import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([""])
  const inputRef = useRef()
  const handleAddToDo = () => {
    const txt = inputRef.current.value;
    setTodos([...todos, txt]);//خد القديمة وضف عليها الجديدة
    inputRef.current.value ='';
    console.log(txt)
  }
  return (
    <div className='App'>
      <h2>To DO List</h2>
      <div className = "container" >
        <ul>
          {todos.map((e) => {
            return <li >{e} </li>
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item" />
        <button onClick={handleAddToDo}>Add</button>
      </div >
    </div>
  );
}

export default App;
