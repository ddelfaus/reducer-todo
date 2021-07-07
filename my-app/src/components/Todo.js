import React from 'react';




const Todo = ({todo, toggle, completed, id}) => {
    console.log( 'todo')
    return (
      <div style={completed ? { textDecoration: 'line-through' } : null}
        onClick={() => toggle(id)} 
      >
          {todo}
        
      </div>
    );
  };
  
  export default Todo;