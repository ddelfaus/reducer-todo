import React , {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, todoReducer} from './reducers/reducer'

//components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



function App() {

const [state,action] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
   <h1>Todo Readucer</h1>


    <TodoList state = {state}/>
   <TodoForm/>
    </div>
  );
}

export default App;
