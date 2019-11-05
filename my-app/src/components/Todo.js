import React from 'react';




const Todo = props => {
    console.log(props.todo)
    return (
      <div>
          {props.todo}
      </div>
    );
  };
  
  export default Todo;