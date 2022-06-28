import { v4 } from "uuid"
import React, { useState, useRef, useEffect } from "react";
import TasksList from "./TasksList";
import './App.css';

const LOCAL_STORAGE_KEY = "some.key.here"

function App() {
  const [tasks, setTasks] = useState([])
  const inputRef = useRef()
  console.log(tasks)

  // SUBMIT NEW TASK
  function handleSubmitTask() {
    const taskName = inputRef.current.value;

    if (taskName !== "") {
      setTasks(prevTasks => [...prevTasks, {id: v4(), task: taskName, complete: false}])
      
    }
  }

  // GET DATA ON RELOAD
  useEffect(() => {
    const oldTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTasks(oldTasks)
  }, [])


  // UPDATES LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])


  // TOGGLES THE CHECKBOX
  function toggleChecked(id) {
    const newTasks = [...tasks];
    const taskStatus = newTasks.find(task => task.id === id)
    taskStatus.complete = !taskStatus.complete;
    setTasks(newTasks)
  }


  // CLEARS THE FINISHED TASKS
  function handleClear() {
    var newTasks = [...tasks];
    newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks)
  }

  

  return (
    <div className="App">
      <h1>TASK LIST</h1>
      <TasksList tasks={tasks} toggleChecked={toggleChecked}/>
      <input type="text" placeholder="Input task here" ref={inputRef}/>
      <br></br>
      <button onClick={handleSubmitTask}>Add Task</button>
      <br></br>
      <button onClick={handleClear}>Clear Finished Tasks</button>
      <p>{tasks.filter(task => !task.complete).length} tasks remaining</p>
    </div>
  );
}

export default App;
