import React from 'react'
import './MinBedsMenu.css'

function MinBedsMenu(props) {
    return (
        <div>
            <div className = 'drop-down__item'>
            <div className="dropdown__wrapper">
                <h3 className = "drop-down__text">{props.name}</h3>

                <div className="dropdown__input--wrapper">       
                <input type="Maximum" className="drop-down__input" placeholder = {props.level}/>
                <i className="fas fa-chevron-down"></i> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default MinBedsMenu
