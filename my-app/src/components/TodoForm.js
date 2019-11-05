import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/reducer'



const TodoForm = ({addTodo}) => {
  
    const [newTodo, setNewTodo] = useState('');
  
    const submitTodoText = event => {
        event.preventDefault();
        addTodo(newTodo)
      };
    
      const handleChanges = event => {
        setNewTodo(event.target.value);
      };
  
  
    return (

   
   <form onSubmit={submitTodoText} >
      <input
        type="text"
        name="todo"
        placeholder="things to do"
        value={newTodo}
        onChange={handleChanges}
      />
      <button >Add </button>
      <button >Clear</button>
    </form>
  );
};


export default TodoForm;