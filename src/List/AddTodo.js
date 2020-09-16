import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [content, setContent] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!content) return;
        addTodo(content);
        setContent('');
    }
    return (
        <div className="addTodo">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setContent(e.target.value)} placeholder="Type a new task..." value={content} />
                <button type="submit" className="list__button">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
