import React from 'react'

function Task({ task, tasks, toggleChecked }) {

    function handleCheck() {
        toggleChecked(tasks.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={tasks.complete} onClick={handleCheck}/>
            </label>
            {task}
        </div>
    )
}

export default Task