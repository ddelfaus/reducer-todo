import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm'



const TodoList = props => {
    console.log(props,"todolist")



  return (
    <div>
      {props.state.map(i => (
        
        <Todo
          key={i.id}
          id = {i.id}
          todo={i.item}
          completed = {i.completed}
          toggle = {props.toggle}
        />
      ))}
    </div>
  );
};

export default TodoList;