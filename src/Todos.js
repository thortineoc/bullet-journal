import React from 'react';
import './Todos.css'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="todos__item">
                    <input onClick={() => {deleteTodo(todo.id)}} type="checkbox" className="todos__checkbox" />
                    <span className="todos__text">{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>You have no todos left</p>
    )
    return (
        <div className="todos__wrapper">
            {todoList}
        </div>
    )
} 

export default Todos