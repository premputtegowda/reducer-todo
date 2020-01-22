import React from 'react';


const TodoForm = (props) => {
   
    return (
       <form >
           <input 
                type='text'
                name="todo"
                value={props.todoText}
                onChange={props.handleChanges}
            />
            <button onClick={props.handleSubmit}> Add </button>
       </form>
        
    )
}

export default TodoForm;