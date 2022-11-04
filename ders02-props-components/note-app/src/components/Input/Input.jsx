import React from 'react';
import style from './Input.module.css';

const Input = ({ value, label, type = "text", handleInput }) => {
    return (
        <div className={style.inputContainer}>
            <label className={style.label}>{label}</label>
            <input value={value} type={type} className={style.input} onChange={(e) => handleInput(e.target.value)} />
        </div>
    )
}

export default Input;