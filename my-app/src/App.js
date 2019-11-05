import React , {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, todoReducer} from './reducers/reducer'

//components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



function App() {

const [state,action] = useReducer(todoReducer, initialState);

const addTodo = text => {
  action({ type: "add", payload: text })
}


  return (
    <div className="App">
   <h1>Todo Readucer</h1>


    <TodoList state = {state} addTodo ={addTodo}/>
    <TodoForm addTodo ={addTodo}/>
    </div>
  );
}

export default App;
