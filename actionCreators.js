let nextid = 0; 
export function addTodo(text){
    
    return{
        type: "ADD_TODO",
        id: nextid++,
        text
    }
}