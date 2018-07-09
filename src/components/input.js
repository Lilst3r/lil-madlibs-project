import React from 'react';

const Input = ({title, state, name}, onChange) => {
    return (
        <div key={state} className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
} 

export default Input;