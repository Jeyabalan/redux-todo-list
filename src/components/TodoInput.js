import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/actions/add.action';

function TodoInput() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function addToDoList() {
        dispatch(addToDo(value));
        setValue('');
    }

    return (
        <div>
            <input className="form-control mb-3" value={value} type="text" onChange={(event) => setValue(event.target.value)}/>
            <button className="btn btn-primary" onClick={addToDoList}>Add To List</button>
        </div>
    )
}

export default TodoInput
