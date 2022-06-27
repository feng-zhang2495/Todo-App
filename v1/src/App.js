import './App.css';
import React, { useState, useRef, useEffect } from "react"
import ToDoList from './ToDoList';
import { v4 } from 'uuid'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;

    if (name !== "") {
      setTodos(prevTodos => [...prevTodos, { id: v4(), name: name, complete: false}])
    }

    else {
      alert("You must enter a task!")
    }
  }




  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos)
    if (storedTodos) setTodos(storedTodos)
    
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id) 
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos);
  }



  return (
    <div className="App">
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
    
  );
}

export default App;
