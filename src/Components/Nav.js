import React, {useState} from 'react'
import './Nav.css'
import "./NavSideMenu.css"
import MinBedsMenu from './DropdownComponents/MinBedsMenu'
import SearchArea from './DropdownComponents/SearchArea'
import Button from "./Button"

function Nav() {
    const [showMenu , setShowMenu]= useState(false)

    return (
        <nav>
            <div className="search-menu">
                <i className="fas fa-search"></i><p onClick = {()=>setShowMenu (!showMenu)}>
                    find rental property...
                </p>
            </div>
            <div className="nav-btns">
                <button className = 'btn__login'> Login</button>
                <button className = 'btn__signup'> Sign up</button>
            </div>

            <div className="nav-sidemenu">
                <div className = 'nav-side-menu'id = {showMenu ? "hidden": ""}>
                <div className="nav-side-menu__wrapper">
                    <h1 className="nav-side-menu__header">Find a rental property</h1>
                    <SearchArea/>
                    <div className="nav-drop-downs">
                    <MinBedsMenu name = "Minimum beds" level = 'No min' />
                    <MinBedsMenu  name = "Maximum beds" level = 'No max'/>
                    </div>

                    <MinBedsMenu name = "Minimum beds" level = 'No min' />
                    <div className="nav-drop-downs">
                    <MinBedsMenu name = "Minimum price" level = 'No min' />
                    <MinBedsMenu  name = "Maximum price" level = 'No max'/>
                    </div>

                    <Button title = "FIND PROPERTIES"/>

                </div>
            

            </div>
            </div>
        </nav>
    )
}

export default Nav
