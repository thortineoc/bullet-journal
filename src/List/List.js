import React, { useState, useEffect } from 'react';
import './List.css';
import Todos from './Todos.js';
import AddTodo from './AddTodo';
import uuid from 'uuid';
import db from '../firebase';
import firebase from 'firebase';

function List() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        db.collection('list').orderBy('timestamp', 'desc').onSnapshot(snapschot => {
            setTodos(snapschot.docs.map(doc => ({
                content: doc.data().content,
                id: doc.data().id,
                completed: doc.data().completed,
                timestamp: doc.data().timestamp,
                docId: doc.id
            })));
        })
        console.log("snapchot");
    }, []);
    {/*}
    const deleteTodo = id => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }*/}
    const toogleTodo = id => {
        for(let todo of todos) {
            if(todo.id === id) {
                db.collection('list').doc(todo.docId).update({completed: !todo.completed})
            }
        }
    }
    const addTodo = content => {
        const newItem = {
            content,
            id: uuid(),
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('list').add(newItem);
        // setTodos([...todos, newItem]);
    }
    const clear = event => {
        for(let todo of todos) {
            db.collection('list').doc(todo.docId).delete();
        }
    }
    return (
        <div className="list">
            <h1 className="home__title">To-do list</h1>
            <div className="list__wrapper">
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} toogleTodo={toogleTodo}/>
                <button className="list__button" onClick={clear}>Clear the whole list</button>
            </div>
        </div>
    );
}

export default List;
