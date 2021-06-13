import React from 'react'
import './SearchArea.css'

function SearchArea() {
    return (
        <div className = 'search-area__container'>
            <div className="search-area__wrapper">
                <h3 className = "search-area__text">Search area</h3>
                <input type="text" className="search-area__input" placeholder = 'eg. Oxford or NW3'/>
            </div>
        </div>
    )
}

export default SearchArea
