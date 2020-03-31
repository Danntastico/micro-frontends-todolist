import React from 'react';
import '../assets/styles/TodoItem.css';

const TodoItem = (props) => (
  <div key={props.todo.id} 
    className="my-4 p-2 divItem rounded-lg d-flex justify-content-between"
    onClick={props.toggleComplete} 
  >
    <p className="h5"  
      style = 
        {{textDecoration: props.todo.complete ? "line-through" : ""}}
    >{props.todo.text}</p>
    <small className="text-secondary">tap to toggle</small>
  </div>
)

export default TodoItem;