export const initialState = {
    todos: []
}
 
  

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            
        return(
          {...state, todos: [...state.todos,{item: action.payload, completed: false, id:Date.now()}]}
            
        )
        case 'COMPLTE_TODO':
        return (
           {...state, todos:state.todos.map(todo => {
               if(todo.id === action.payload){

                   return {...todo, completed:!todo.completed}
               }
               return todo
           })}
        )
        
        default:
            return state;

         }
         

    }
   


    