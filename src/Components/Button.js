import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <div className = 'button__wrapper'>
            <button className="button__item">{props.title}</button>
        </div>
    )
}

export default Button
