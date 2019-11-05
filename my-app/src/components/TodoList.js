import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log(props)
  return (
    <div>
      {props.state.map(item => (
        
        <Todo
          key={item.id}
          todo={item.item}
        />
      ))}
    </div>
  );
};

export default TodoList;