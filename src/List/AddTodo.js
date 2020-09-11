import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content.trim()) {
            this.props.addTodo(this.state);
        };
        this.setState({
            content: ''
        })
    }
    render() {
        return (
        <div className="addTodo">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Type a new task..." value={this.state.content} />
                <button type="submit" className="list__button">Add</button>
            </form>
        </div>
        )
    }
}

export default AddTodo
