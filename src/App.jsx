import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { read, write } from './util/local-storage';

const todosData = read().todos || [];
  

function App() {

  const [todos, setTodos] = useState(todosData)
  const input = useRef(null);
  
  function onAdd(e){
    e.preventDefault();
    setTodos([
      ...todos,
      {
        checked: false,
        text: input.current.value
      }
    ])
  }
  function onCheck(index, checked){
    setTodos([
      ...todos.map((todo, i) => {
        if(i === index) todo.checked = checked;
        return todo
      }),
    ])
  }
  
  useEffect(()=>{
    write({ todos });
  }, [todos]);

  return (
    <div className="App">
      <form onSubmit={onAdd}>
        <input type="text" ref={input}/>
        <button type="submit" style={{marginLeft: '.5em'}}>Add Todo</button>
      </form>
      <div className="todo-container">
        <h1>Todos</h1>
        {todos.map((todo, index) => <Item key={index} todo={todo} onChange={(checked)=> onCheck(index, checked)}></Item>)}    
      </div>
    </div>
  );
}

export default App;
