import React, {Component} from 'react';
import './List.css';
import Todos from './Todos.js';
import AddTodo from './AddTodo';

class List extends React.Component {
    state = {
        todos: [
            {id: 1, content: "allegro"},
            {id: 2, content: "bazofile"},
            {id: 3, content: "react"}
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        })
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    clearList = () => {
        this.setState({
            todos: null
        })
    }
    render() {
        return (
            <div className="list">
                <h1 className="home__title">To-do list</h1>
                <div className="list__wrapper">
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                    <button className="list__button" onClick={this.clearList}>Clear whole list</button>
                </div>
            </div>
        )
    }
}

export default List
