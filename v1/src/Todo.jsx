import React from 'react'

function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick}/>
            </label>
            {todo.name}
        </div>
    )
}

export default Todo