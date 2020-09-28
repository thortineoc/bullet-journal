import React, { useState } from 'react';
import './Tracker.css';
import Row from './Row';
import moment from 'moment';

function Tracker() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        setList([...list, value]);
        setValue('');
    }
    // let number = 0;
    const checkMonth = month => {
        switch(month) {
            case 0: return {name: 'January', number: 31};
            case 1: return {name: 'February', number: 29};
            case 2: return {name: 'March', number: 31};
            case 3: return {name: 'April', number: 30};
            case 4: return {name: 'May', number: 31};
            case 5: return {name: 'June', number: 30};
            case 6: return {name: 'July', number: 31};
            case 7: return {name: 'August', number: 31};
            case 8: return {name: 'September', number: 30};
            case 9: return {name: 'October', number: 31};
            case 10: return {name: 'November', number: 30};
            case 11: return {name: 'December', number: 31};
            default: console.log('checkMonth error');
        }
    }

    let result = checkMonth(moment().month());

    return (
        <div className="tracker">
            <h1 className="home__title">Daily tracker</h1>
            <div className="tracker__wrapper">
                <h2>{result.name} {moment().year()}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Your activity</label>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
                    <button type="submit">Add</button>
                </form>
                {list.map((el, index) => (
                    <Row activity={el} size={result.number} index={index} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Tracker;

{/*
    <Dropdown num={result.number}/>
        <form onSubmit={handleSubmit}>
            <label>Your activity</label>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button type="submit">Add</button>
        </form>
 */}