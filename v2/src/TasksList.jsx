import React from 'react'
import Task from './Task'
 

const TasksList = ({ tasks, toggleChecked }) => {

    const task = tasks.map((task) => {
        return <Task task={task.task} key={task.id} tasks={task} toggleChecked={toggleChecked}/>
    })

    return (
        <div className="tasks">
            {task}
        </div>
        
    )
}

export default TasksList