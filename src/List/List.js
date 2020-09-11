import React, {Component} from 'react';
import './List.css';
import Todos from './Todos.js';
import AddTodo from './AddTodo';
import uuid from 'uuid';

class List extends Component {
    state = {
        todos: [
            {id: 1, content: "allegro", completed: false},
            {id: 2, content: "bazofile", completed: false},
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
    toogleTodo = (id) => {
        const todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        })
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = uuid();
        todo.completed = false;
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    clearList = () => {
        this.setState({
            todos: []
        })
    }
    
    render() {
        return (
            <div className="list">
                <h1 className="home__title">To-do list</h1>
                <div className="list__wrapper">
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toogleTodo}/>
                    <button className="list__button" onClick={this.clearList}>Clear whole list</button>
                </div>
            </div>
        )
    }
}

export default List
