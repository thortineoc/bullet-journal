import React, { useState } from 'react';
import './List.css';
import Todos from './Todos.js';
import AddTodo from './AddTodo';
import uuid from 'uuid';

function List() {
    const [todos, setTodos] = useState([]);

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }
    const toogleTodo = id => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
        setTodos(newTodos)
    }
    const addTodo = todo => {
        const newItem = {
            id: uuid(),
            content: todo,
            completed: false
        }
        const newTodos = [...todos, newItem];
        setTodos(newTodos);
    }
    return (
        <div className="list">
            <h1 className="home__title">To-do list</h1>
            <div className="list__wrapper">
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} deleteTodo={deleteTodo} toogleTodo={toogleTodo}/>
                <button className="list__button" onClick={() => setTodos([])}>Clear the whole list</button>
            </div>
        </div>
    );
}

export default List;
