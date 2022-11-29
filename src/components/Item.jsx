import React from 'react';
import './Item.css';
export const Item = ({todo, onChange}) => {
  return <div className='todo-item'>
    <input type="checkbox" defaultChecked={todo.checked} onChange={() => onChange(!todo.checked)}/>
    <label style={{textDecoration: todo.checked && 'line-through'}}>{todo.text}</label>
  </div>;
}