import React, {useState} from 'react'
import Button from './Button'
import MinBedsMenu from './DropdownComponents/MinBedsMenu'
import minBedMinBedsMenu from './DropdownComponents/MinBedsMenu'
import SearchArea from './DropdownComponents/SearchArea'
import './SideMenu.css'

function SideMenu({searchInput, searchBtn}) {

    return (
        
        <div className = 'side-menu'>
            <div className="side-menu__wrapper">
                <h1 className="side-menu__header">Find a rental property</h1>
                {searchInput}
                <div className="drop-downs">
                <MinBedsMenu name = "Minimum beds" level = 'No min' />
                <MinBedsMenu  name = "Maximum beds" level = 'No max'/>
                </div>

                <MinBedsMenu name = "Minimum beds" level = 'No min' />
                <div className="drop-downs">
                <MinBedsMenu name = "Minimum price" level = 'No min' />
                <MinBedsMenu  name = "Maximum price" level = 'No max'/>
                </div>

                {searchBtn}

            </div>
           

        </div>
    )
}

export default SideMenu
