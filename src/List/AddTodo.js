import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [content, setContent] = useState('');
    
    const handleChange = e => {
        setContent(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(!content) return;
        addTodo(content);
        setContent('');
    }
    return (
        <div className="addTodo">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Type a new task..." value={content} />
                <button type="submit" className="list__button">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
