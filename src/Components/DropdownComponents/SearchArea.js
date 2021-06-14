import React from 'react'
import './SearchArea.css'
import { useState} from 'react'

function SearchArea() {

    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className = 'search-area__container'>
            <div className="search-area__wrapper">
                <h3 className = "search-area__text">Search area</h3>
                <input type="text" className="search-area__input" placeholder = 'eg. Oxford or NW3' onChange = {event =>{setSearchTerm(event.target.value)}} />
            </div>
        </div>
    )

    // console.log(searchTerm)
}

export default SearchArea
