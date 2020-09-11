import React from 'react';
import './Todos.css'

const Todos = ({todos, deleteTodo, toogleTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="todos__item">
                    <input type="checkbox" onClick={() => {toogleTodo(todo.id)}} className="todos__checkbox" />
                    <li className="todos__text"
                        style = {{
                            textDecoration: todo.completed ? "line-through" : null,
                            /*color: todo.completed ? "grey" : "black"*/
                        }}
                    >{todo.content}</li>
                    <button className="todos__button" onClick={() => {deleteTodo(todo.id)}}>X</button>
                </div>
            )
        })
    ) : (
        <p>You have no todos left</p>
    )
    return (
        <ul className="todos__wrapper">
            {todoList}
        </ul>
    )
} 

export default Todos