import React, {Component} from 'react'
import './AddTodo.css';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render() {
        return (
        <div className="addTodo">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Type a new task..." />
                <button type="submit" className="list__button">Add</button>
            </form>
        </div>
        )
    }
}

export default AddTodo
