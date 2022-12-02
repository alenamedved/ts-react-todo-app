import React from "react";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteTodo}) => {
    return (
    <li>
        <label style={{textDecoration: todo.complete ? 'line-through' : undefined}}>
            <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text}
            <input type='submit' value='delete' onClick={()=> deleteTodo(todo)} />
        </label>
    </li>
    )
}