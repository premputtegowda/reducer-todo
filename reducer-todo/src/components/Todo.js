import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";



const Todo = (props) => {
    console.log('Todo List: ', props.todo.id)
    return (
        <div className="todo-item" className={`item${props.todo.completed ? ' completed':''}`} onClick={e => props.handleCompleted(props.todo)}>
           {props.todo.item}
           
        </div>
        
    )

}

export default Todo;