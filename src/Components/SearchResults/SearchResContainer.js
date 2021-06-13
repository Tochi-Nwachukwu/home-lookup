import React from 'react'
import Card from './Card'
import './SearchResContainer.css'
import { Link }from 'react-router-dom';

function SearchResContainer() {
    return (
        <div className = 'search-results__container'>
            <h1 className="search-results__title">
                15 Search results
            </h1>
        <div className="search-results__cards">

            <Link to = '/opencard'>
                <Card/>
            </Link>
            <Link to = '/opencard'>
                <Card/>
            </Link>
            <Link to = '/opencard'>
                <Card/>
            </Link>
            <Link to = '/opencard'>
                <Card/>
            </Link>
            <Link to = '/opencard'>
                <Card/>
            </Link>
            
           
        </div>
        </div>
    )
}

export default SearchResContainer
