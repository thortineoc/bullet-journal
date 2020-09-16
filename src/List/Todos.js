import React from 'react';
import db from '../firebase';
import ClearIcon from '@material-ui/icons/Clear';

const Todos = ({ todos, toogleTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="todos__item">
                    <input type="checkbox" onClick={() => {toogleTodo(todo.id)}} className="todos__checkbox" />
                    <li className="todos__text"
                        style = {{
                            textDecoration: todo.completed ? "line-through" : null,
                            color: todo.completed ? "grey" : "black"
                        }}
                    >{todo.content}</li>
                    <ClearIcon style={{color: 'red', marginLeft: '5px'}} className="todos__delete" onClick={event => {db.collection('list').doc(todo.id).delete()}} />
                </div>
            );
        })
    ) : (
        <p className="todos__text">You have no todos</p>
    );
    return (
        <ul className="todos__wrapper">
            {todoList}
        </ul>
    );
}

export default Todos;