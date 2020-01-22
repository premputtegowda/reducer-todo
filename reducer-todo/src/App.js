import React, { useState, useReducer }from 'react';
import {initialState, todoReducer } from './reducers/TodoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  const [todoText, setTodoText] = useState();

  const handleChanges = (e)=> {
    e.preventDefault();
    setTodoText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoText)
    dispatch({type: 'ADD_TODO', payload: todoText})
    setTodoText('')
  }

  const handleCompleted = (item) => {
    
    dispatch({type:'COMPLTE_TODO', payload: item.id})
    console.log('clicked item: ', item.id)
  }

  return (
    <div className="App">
      <TodoForm todoText = {todoText} handleChanges = {handleChanges} handleSubmit={handleSubmit} />
      <TodoList list = {state.todos} handleCompleted={handleCompleted}/>

    </div>
  );
}

export default App;
