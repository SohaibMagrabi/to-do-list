import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  
  const handleAddToDo = () => {
    const txt = inputRef.current.value;
    const newItem = { completed: false, txt }
    setTodos([...todos, newItem]);//خد القديمة وضف عليها الجديدة
    inputRef.current.value = '';
    console.log(txt)
  }
  const handleItemDone = (i) => {
    const newTodos = [...todos]; //or =todos.slice()
    newTodos[i].completed = !newTodos[i].completed;//اعكس حالتها
    setTodos(newTodos);
    //  console.log(setTodos[i].completed)
  };
  const handleDeleteItem = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);

  }
  return (
    <div className='App'>
      <h2>To DO List</h2>
      <div className="container" >
        <ul>
          {todos.map(({ txt, completed }, i) => {
            return (
              <div>
                <li
                  className={completed ? "done" : ""}
                  key={i}
                  onClick={() => handleItemDone(i)}
                >
                  {txt}
                </li>
                <span
                className="del"
                onClick={() => handleDeleteItem(i)}

                >
                  ❎
                </span>
              </div>
            )
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item" />
        <button onClick={handleAddToDo}>Add</button>
      </div >
    </div>
  );
}

export default App;
