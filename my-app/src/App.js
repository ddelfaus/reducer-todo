import React , {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, todoReducer} from './reducers/reducer'

//components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ClearTodo from './components/ClearTodo'


function App() {

const [state,dispatch] = useReducer(todoReducer, initialState);

const addTodo = text => {
  dispatch({ type: "add", payload: text })
}

const toggle = id => {
  dispatch({type: 'toggle' , payload: id});
}
const clear = () => {
  dispatch({type: 'clear'})
}
  return (
    <div className="App">
   <h1>Todo Reducer</h1>


    <TodoList state = {state} toggle= {toggle}/>
    <TodoForm addTodo ={addTodo}/>
    <ClearTodo clear = {clear}/>
    </div>
  );
}

export default App;
