import React from 'react'
import './SearchArea.css'
import { useContext, useState } from "react";

export const MyContext = React.createContext('');

function SearchArea({deriveTerm}) {
    const { onChange } = useContext(MyContext);
    return (
        <div className = 'search-area__container'>
            <div className="search-area__wrapper">
                <h3 className = "search-area__text">Search area</h3>
                <input type="text" className="search-area__input" placeholder = 'eg. Oxford or NW3' onKeyPress={deriveTerm} />
            </div>
        </div>
    )


}

export default SearchArea
