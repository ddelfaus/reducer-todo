import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/reducer'



const TodoForm = props => {
  return (

   
   <form>
      <input
        type="text"
        name="todo"
        placeholder="things to do"
      />
      <button>Add </button>
      <button >Clear</button>
    </form>
  );
};


export default TodoForm;