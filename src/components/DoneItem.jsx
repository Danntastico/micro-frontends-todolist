import React from 'react';
import '../assets/styles/DoneItem.css';

const DoneItem = (props) => (
  <div key={props.todo.id} 
    className="shadow my-1 p-2 doneItem rounded-lg d-flex justify-content-between"
    onClick={props.toggleComplete} 
  >
    <p className="text-success"  
      style = 
        {{textDecoration: props.todo.complete ? "line-through" : ""}}
    >{props.todo.text}</p>
    <small className="text-secondary">tap to toggle</small>
  </div>
)

export default DoneItem;