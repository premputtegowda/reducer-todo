import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
   console.log('TodoList: ', props.list);
    return (
        <div className='todo-list'>
            {props.list.map((todo,index) => (
                <Todo key={index} todo = {todo} handleCompleted={ props.handleCompleted}/>
            ))}
            
        </div>
        
    )

}
export default TodoList;